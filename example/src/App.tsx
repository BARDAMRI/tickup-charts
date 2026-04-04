import {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';
import type {Interval, TickUpChartEngine, TickUpHostHandle} from 'tickup/full';
import {
    AxesPosition,
    ChartTheme,
    LiveDataPlacement,
    OverlayKind,
    ShapeType,
    StrokeLineStyle,
    TickUpCommand,
    TickUpDesk,
    TickUpFlow,
    TickUpPrimeTier,
    TickUpPulse,
    TickUpRenderEngine,
    TimeDetailLevel,
} from 'tickup/full';
import {Zap, Play, Pause, RefreshCw, Sun, Moon} from 'lucide-react';
import TickUpDemo from './TickUpDemo';
import ComparisonLab from './ComparisonLab';
import {PrimeProTelemetry} from './PrimeProTelemetry';
import {SHOWCASE_PRIME_LICENSE_KEY, SHOWCASE_PRIME_USER_ID} from './showcaseConstants';
import {syncDocumentTheme} from './syncDocumentTheme';
import './index.css';

// ----------------------------------------------------------------------------
// DATA GENERATION
// ----------------------------------------------------------------------------
function simplePRNG(seed = 12345) {
    let s = seed >>> 0;
    const rand = () => (s = (1664525 * s + 1013904223) >>> 0) / 0xffffffff;
    return {rand};
}

function makeSimpleIntervals({
    startTime,
    startPrice,
    intervalSec,
    count,
    seed = 12345,
    driftPerBar = 0.04,
    vol = 0.6,
    addGapsEvery,
}: any): Interval[] {
    const rng = simplePRNG(seed);
    const out: Interval[] = [];
    let t = startTime;
    let lastClose = startPrice;

    for (let i = 0; i < count; i++) {
        if (addGapsEvery && i > 0 && i % addGapsEvery === 0) {
            const gapPct = (rng.rand() - 0.5) * 0.01;
            lastClose = +(lastClose * (1 + gapPct)).toFixed(2);
        }

        const o = lastClose;
        const noise = (rng.rand() - 0.5) * 2 * vol;
        const c = o + driftPerBar + noise;
        const wigUp = Math.abs((rng.rand() - 0.5) * 2) * (vol * 0.8 + 0.1);
        const wigDn = Math.abs((rng.rand() - 0.5) * 2) * (vol * 0.8 + 0.1);
        const h = Math.max(o, c) + wigUp;
        const l = Math.min(o, c) - wigDn;
        const baseVol = 1200;
        const volJitter = (rng.rand() - 0.5) * 2 * 300;
        const v = Math.max(1, Math.round(baseVol + volJitter));

        out.push({
            t,
            o: +o.toFixed(2),
            h: +h.toFixed(2),
            l: +l.toFixed(2),
            c: +c.toFixed(2),
            v,
        });

        lastClose = c;
        t += intervalSec;
    }

    return out;
}

const INTERVAL_SEC = 300;

const INITIAL_INTERVALS: Interval[] = makeSimpleIntervals({
    startTime: 1688000000,
    startPrice: 100,
    intervalSec: INTERVAL_SEC,
    count: 200,
    seed: 4242,
    driftPerBar: 0.03,
    vol: 0.7,
});

function cloneIntervals(rows: Interval[]): Interval[] {
    return rows.map((b) => ({...b}));
}

function makeNextBar(last: Interval, intervalSec: number): Interval {
    const o = last.c;
    const noise = (Math.random() - 0.5) * 1.2;
    const drift = 0.02 + (Math.random() - 0.5) * 0.02;
    const c = o + drift + noise;
    const wickUp = Math.random() * 0.45;
    const wickDn = Math.random() * 0.45;
    const h = Math.max(o, c) + wickUp;
    const l = Math.min(o, c) - wickDn;
    const v = Math.max(1, Math.round(1000 + Math.random() * 500));
    return {
        t: last.t + intervalSec,
        o: +o.toFixed(2),
        h: +h.toFixed(2),
        l: +l.toFixed(2),
        c: +c.toFixed(2),
        v,
    };
}

function jitterLastBar(last: Interval): Interval {
    const delta = (Math.random() - 0.5) * 0.35;
    const c = +(last.c + delta).toFixed(2);
    const h = +Math.max(last.h, last.o, c, last.l + 0.01).toFixed(2);
    const l = +Math.min(last.l, last.o, c, last.h - 0.01).toFixed(2);
    const v = Math.max(1, Math.round((last.v ?? 1200) + (Math.random() - 0.5) * 80));
    return {...last, o: last.o, c, h, l, v};
}

const LIVE_TICK_MS = 900;
const PRIME_LICENSE_STORAGE_KEY = 'tickup:prime:license-key';
const PRIME_USER_STORAGE_KEY = 'tickup:prime:user-identifier';

const PRIME_SHOWCASE_BAR_COUNT = 12_000;

// ----------------------------------------------------------------------------
// STRUCTURE
// ----------------------------------------------------------------------------
type TierKey = 'pulse' | 'flow' | 'command' | 'desk' | 'prime';

// Seed demo drawings on a single chart only (avoid clutter).
const TIERS_WITH_DEMO_SHAPES: TierKey[] = ['command'];

const TIER_ROWS: {
    key: TierKey;
    title: string;
    blurb: string;
    Cmp: any; // e.g. typeof TickUpCommand
    lux?: boolean;
}[] = [
    {
        key: 'pulse',
        title: 'TickUp Pulse',
        blurb: 'Minimal embed — price plot and axes only (no toolbars). Pure data.',
        Cmp: TickUpPulse,
    },
    {
        key: 'flow',
        title: 'TickUp Flow',
        blurb: 'Analysis — top bar & settings; no drawing tools sidebar.',
        Cmp: TickUpFlow,
    },
    {
        key: 'command',
        title: 'TickUp Command',
        blurb: 'Full trader UI — drawings, modals, programmatic API.',
        Cmp: TickUpCommand,
    },
    {
        key: 'desk',
        title: 'TickUp Desk',
        blurb: 'Broker-style — same as Command; attribution always on.',
        Cmp: TickUpDesk,
    },
    {
        key: 'prime',
        title: 'TickUp Prime',
        blurb: 'Production @tickup/prime bundle: WebGL, neon luxury profile, VWAP Pro, magnetic drawing with Pro license, and uncapped history in this lane.',
        Cmp: TickUpPrimeTier,
        lux: true,
    },
];

function seedDemoShapes(api: TickUpHostHandle | null, series: Interval[]) {
    if (!api?.addShape || !series.length) {
        return;
    }
    const t0 = series[0].t;
    const tLast = series[series.length - 1].t;
    const span = Math.max(INTERVAL_SEC, tLast - t0);
    const prices = series.flatMap((b) => [b.l, b.h]);
    const pMin = Math.min(...prices);
    const pMax = Math.max(...prices);
    const pMid = (pMin + pMax) / 2;

    api.addShape({
        type: ShapeType.Line,
        points: [
            {time: t0 + span * 0.12, price: pMid - (pMax - pMin) * 0.08},
            {time: t0 + span * 0.58, price: pMid + (pMax - pMin) * 0.12},
        ],
        style: {
            lineColor: '#e040fb',
            lineWidth: 2,
            lineStyle: StrokeLineStyle.dashed,
        },
    });
    api.addShape({
        type: ShapeType.Rectangle,
        points: [
            {time: t0 + span * 0.32, price: pMid - 1.2},
            {time: t0 + span * 0.48, price: pMid + 2.4},
        ],
        style: {
            lineColor: '#26c6da',
            lineWidth: 1,
            lineStyle: StrokeLineStyle.solid,
            fillColor: 'rgba(38, 198, 218, 0.18)',
        },
    });
    api.addShape({
        type: ShapeType.Circle,
        points: [
            {time: t0 + span * 0.62, price: pMid - 0.5},
            {time: t0 + span * 0.74, price: pMid + 2},
        ],
        style: {
            lineColor: '#ffca28',
            lineWidth: 2,
            lineStyle: StrokeLineStyle.solid,
            fillColor: 'rgba(255, 202, 40, 0.14)',
        },
    });
    api.addShape({
        type: ShapeType.Triangle,
        points: [
            {time: t0 + span * 0.78, price: pMid + 0.8},
            {time: t0 + span * 0.86, price: pMid + 0.1},
        ],
        style: {
            lineColor: '#60a5fa',
            lineWidth: 2,
            lineStyle: StrokeLineStyle.solid,
            fillColor: 'rgba(96, 165, 250, 0.14)',
        },
    });
    api.addShape({
        type: ShapeType.Arrow,
        points: [
            {time: t0 + span * 0.18, price: pMid + 0.4},
            {time: t0 + span * 0.26, price: pMid + 1.0},
        ],
        style: {
            lineColor: '#34d399',
            lineWidth: 2,
            lineStyle: StrokeLineStyle.solid,
        },
    });
    api.redrawCanvas?.();
}

export default function App() {
    const refs = useRef<Record<TierKey, TickUpHostHandle | null>>({
        pulse: null,
        flow: null,
        command: null,
        desk: null,
        prime: null,
    });

    const commandRef = useRef<TickUpHostHandle | null>(null);

    const tierRefCallbacks = useMemo(() => {
        const keys: TierKey[] = ['pulse', 'flow', 'command', 'desk', 'prime'];
        const out = {} as Record<TierKey, (h: TickUpHostHandle | null) => void>;
        keys.forEach((key) => {
            out[key] = (h: TickUpHostHandle | null) => {
                refs.current[key] = h;
                if (key === 'command') {
                    commandRef.current = h;
                }
                
                // We avoid calling h.setEngine here during render/ref assignment
            };
        });
        return out;
    }, []);

    const [series, setSeries] = useState<Interval[]>(() => cloneIntervals(INITIAL_INTERVALS));
    const [livePaused, setLivePaused] = useState(false);
    const tickCountRef = useRef(0);
    const programmaticShapesSeededRef = useRef(false);

    const [theme, setTheme] = useState<ChartTheme>(() => {
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return ChartTheme.light;
        }
        return ChartTheme.dark;
    });
    const [page, setPage] = useState<'tiers' | 'ticks' | 'compare'>('tiers');
    const [primeEngine, setPrimeEngine] = useState<TickUpChartEngine | null>(null);
    const [primeLinked, setPrimeLinked] = useState(false);
    const [primeLicenseInput, setPrimeLicenseInput] = useState<string>(() => {
        if (typeof window === 'undefined') {
            return SHOWCASE_PRIME_LICENSE_KEY;
        }
        return window.localStorage.getItem(PRIME_LICENSE_STORAGE_KEY) ?? SHOWCASE_PRIME_LICENSE_KEY;
    });
    const [primeLicenseKey, setPrimeLicenseKey] = useState<string>(() => {
        if (typeof window === 'undefined') {
            return SHOWCASE_PRIME_LICENSE_KEY;
        }
        return (window.localStorage.getItem(PRIME_LICENSE_STORAGE_KEY) ?? SHOWCASE_PRIME_LICENSE_KEY).trim();
    });
    const [primeUserIdentifierInput, setPrimeUserIdentifierInput] = useState<string>(() => {
        if (typeof window === 'undefined') {
            return SHOWCASE_PRIME_USER_ID;
        }
        return window.localStorage.getItem(PRIME_USER_STORAGE_KEY) ?? SHOWCASE_PRIME_USER_ID;
    });
    const [primeUserIdentifier, setPrimeUserIdentifier] = useState<string>(() => {
        if (typeof window === 'undefined') {
            return SHOWCASE_PRIME_USER_ID;
        }
        return (window.localStorage.getItem(PRIME_USER_STORAGE_KEY) ?? SHOWCASE_PRIME_USER_ID).trim();
    });
    const [licenseModalOpen, setLicenseModalOpen] = useState(false);

    useEffect(() => {
        const syncRoute = () => {
            const raw = window.location.hash.replace(/^#\/?/, '').toLowerCase();
            let relPath = window.location.pathname.replace(/\/$/, '') || '/';
            const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
            if (base && base !== '/' && relPath.startsWith(base)) {
                relPath = relPath.slice(base.length) || '/';
            }
            relPath = relPath.replace(/\/$/, '') || '/';
            const pathCompare =
                relPath === '/compare' || relPath.endsWith('/compare');
            if (raw === 'compare' || raw === 'playground' || pathCompare) {
                setPage('compare');
            }
        };
        syncRoute();
        window.addEventListener('hashchange', syncRoute);
        window.addEventListener('popstate', syncRoute);
        return () => {
            window.removeEventListener('hashchange', syncRoute);
            window.removeEventListener('popstate', syncRoute);
        };
    }, []);

    useEffect(() => {
        if (page === 'compare') {
            if (window.location.hash !== '#/compare') {
                window.location.hash = '#/compare';
            }
        } else if (page === 'tiers' && window.location.hash === '#/compare') {
            window.location.hash = '';
        }
    }, [page]);

    useEffect(() => {
        const mqLight = window.matchMedia('(prefers-color-scheme: light)');
        const handler = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? ChartTheme.light : ChartTheme.dark);
        };
        mqLight.addEventListener('change', handler);
        return () => mqLight.removeEventListener('change', handler);
    }, []);

    useEffect(() => {
        syncDocumentTheme(theme);
    }, [theme]);

    /** Black-box Prime engine: Vite resolves `@tickup/prime` to the sibling package's `dist/tickup.es.js` (never Prime `src/`). */
    useLayoutEffect(() => {
        let cancelled = false;
        import('@tickup/prime')
            .then((m: typeof import('@tickup/prime')) => {
                if (cancelled) return;
                const eng = m.TickUpPrime ?? null;
                if (eng) {
                    setPrimeEngine(eng);
                    setPrimeLinked(eng.id !== 'prime-shim');
                } else {
                    setPrimeLinked(false);
                }
            })
            .catch(() => {
                if (!cancelled) setPrimeLinked(false);
            });
        return () => {
            cancelled = true;
        };
    }, []);

    const primeLicenseUnlocked = primeLicenseKey.trim().length > 0;

    const applyPrimeLicense = useCallback(() => {
        const normalized = primeLicenseInput.trim();
        const userIdentifier = primeUserIdentifierInput.trim();
        if (!normalized) {
            setPrimeLicenseKey('');
            window.localStorage.removeItem(PRIME_LICENSE_STORAGE_KEY);
            return;
        }
        setPrimeLicenseInput(normalized);
        setPrimeLicenseKey(normalized);
        setPrimeUserIdentifier(userIdentifier);
        setPrimeUserIdentifierInput(userIdentifier);
        window.localStorage.setItem(PRIME_LICENSE_STORAGE_KEY, normalized);
        window.localStorage.setItem(PRIME_USER_STORAGE_KEY, userIdentifier);
    }, [primeLicenseInput, primeUserIdentifierInput]);

    const clearPrimeLicense = useCallback(() => {
        setPrimeLicenseInput('');
        setPrimeLicenseKey('');
        setPrimeUserIdentifierInput('');
        setPrimeUserIdentifier('');
        window.localStorage.removeItem(PRIME_LICENSE_STORAGE_KEY);
        window.localStorage.removeItem(PRIME_USER_STORAGE_KEY);
    }, []);

    useLayoutEffect(() => {
        if (!primeEngine) return;
        const timer = requestAnimationFrame(() => {
            const h = refs.current.prime;
            if (h?.setEngine) {
                h.setEngine(primeEngine);
            }
        });
        return () => cancelAnimationFrame(timer);
    }, [primeEngine]);

    const exampleVisibleRange = useMemo(() => {
        if (!series.length) {
            return {start: 0, end: 1};
        }
        const lastT = series[series.length - 1].t;
        return {start: series[0].t, end: lastT + INTERVAL_SEC};
    }, [series]);

    const standardChartOptions = useMemo(
        () => ({
            base: {
                theme: theme,
                showOverlayLine: true,
                showHistogram: true,
                showCrosshair: true,
                showCrosshairValues: true,
                style: {
                    backgroundColor: theme === ChartTheme.dark ? '#0b0e14' : '#ffffff',
                    grid: {
                        lineColor: theme === ChartTheme.dark ? '#334155' : '#e2e8f0',
                    },
                    histogram: {
                        bullColor: theme === ChartTheme.dark ? 'rgba(38, 166, 154, 0.5)' : 'rgba(38, 166, 154, 0.5)',
                        bearColor: theme === ChartTheme.dark ? 'rgba(239, 83, 80, 0.5)' : 'rgba(239, 83, 80, 0.5)',
                        opacity: theme === ChartTheme.dark ? 0.9 : 0.6,
                    },
                    axes: {
                        lineColor: theme === ChartTheme.dark ? '#334155' : '#e2e8f0',
                        textColor: theme === ChartTheme.dark ? '#94a3b8' : '#64748b',
                    }
                }
            },
            axes: {
                yAxisPosition: AxesPosition.right,
            },
        }),
        [theme]
    );

    const primeShowcaseIntervals = useMemo(
        () =>
            makeSimpleIntervals({
                startTime: 1688000000,
                startPrice: 100,
                intervalSec: INTERVAL_SEC,
                count: PRIME_SHOWCASE_BAR_COUNT,
                seed: 918273,
                driftPerBar: 0.03,
                vol: 0.7,
            }),
        []
    );

    const primeShowcaseVisibleRange = useMemo(() => {
        if (!primeShowcaseIntervals.length) {
            return {start: 0, end: 1};
        }
        const lastT = primeShowcaseIntervals[primeShowcaseIntervals.length - 1].t;
        return {start: primeShowcaseIntervals[0].t, end: lastT + INTERVAL_SEC};
    }, [primeShowcaseIntervals]);

    const primeShowcaseChartOptions = useMemo(
        () => ({
            base: {
                ...standardChartOptions.base,
                engine: TickUpRenderEngine.prime,
                showOverlayLine: true,
                overlayKinds: [OverlayKind.vwap, {kind: OverlayKind.ema, period: 21} as const],
                style: {
                    ...standardChartOptions.base.style,
                    backgroundColor: theme === ChartTheme.dark ? '#050913' : '#f8fafc',
                    grid:
                        theme === ChartTheme.dark
                            ? standardChartOptions.base.style.grid
                            : {
                                  ...standardChartOptions.base.style.grid,
                                  lineColor: 'rgba(3, 105, 161, 0.11)',
                              },
                },
            },
            axes: standardChartOptions.axes,
        }),
        [standardChartOptions, theme]
    );

    const primeTelemetryPickHost = useCallback(() => refs.current.prime, []);

    const pushLiveTick = useCallback(() => {
        const api = commandRef.current;
        if (!api?.applyLiveData || !api.getViewInfo) {
            return;
        }
        const viewInfo = api.getViewInfo();
        const intervals = viewInfo?.intervals;
        if (!intervals?.length) {
            return;
        }
        const last = intervals[intervals.length - 1];
        tickCountRef.current += 1;
        const n = tickCountRef.current;
        const result =
            n % 5 !== 0
                ? api.applyLiveData(jitterLastBar(last), LiveDataPlacement.mergeByTime)
                : api.applyLiveData(makeNextBar(last, INTERVAL_SEC), LiveDataPlacement.append);
        if (result.intervals.length) {
            setSeries(result.intervals);
        }
    }, []);

    useEffect(() => {
        if (livePaused) {
            return;
        }
        const id = window.setInterval(pushLiveTick, LIVE_TICK_MS);
        return () => window.clearInterval(id);
    }, [livePaused, pushLiveTick]);

    useEffect(() => {
        if (!series.length || programmaticShapesSeededRef.current) {
            return;
        }
        let cancelled = false;
        let attempts = 0;
        const maxAttempts = 24;

        const trySeed = () => {
            if (cancelled || programmaticShapesSeededRef.current) {
                return;
            }
            const demoReady = TIERS_WITH_DEMO_SHAPES.every((k) => refs.current[k] != null);
            attempts += 1;
            if (!demoReady && attempts < maxAttempts) {
                requestAnimationFrame(trySeed);
                return;
            }
            programmaticShapesSeededRef.current = true;
            TIERS_WITH_DEMO_SHAPES.forEach((k) => {
                const api = refs.current[k];
                if (api) {
                    seedDemoShapes(api, series);
                }
            });
        };

        const timer = window.setTimeout(() => requestAnimationFrame(trySeed), 200);
        return () => {
            cancelled = true;
            window.clearTimeout(timer);
        };
    }, [series]);

    const handleRefreshSeries = useCallback(async () => {
        tickCountRef.current = 0;
        programmaticShapesSeededRef.current = false;
        (Object.keys(refs.current) as TierKey[]).forEach((key) => {
            refs.current[key]?.clearCanvas?.();
        });
        const reset = cloneIntervals(INITIAL_INTERVALS);
        setSeries(reset);
        window.requestAnimationFrame(() => {
            (Object.keys(refs.current) as TierKey[]).forEach((key) => {
                const api = refs.current[key];
                api?.fitVisibleRangeToData?.();
                api?.redrawCanvas?.();
            });
        });
    }, []);

    const handleSymbolSearch = useCallback((sym: string) => {
        const label = sym || '(empty)';
        window.alert(`Symbol search (demo): ${label}\nWire onSymbolSearch to load data for this symbol.`);
    }, []);

    const sharedProps = {
        intervalsArray: series,
        onRefreshRequest: handleRefreshSeries,
        defaultSymbol: 'DEMO',
        onSymbolSearch: handleSymbolSearch,
        initialNumberOfYTicks: 8,
        initialTimeDetailLevel: TimeDetailLevel.Medium,
        initialVisibleTimeRange: exampleVisibleRange,
        chartOptions: standardChartOptions,
        themeVariant: theme,
        onThemeVariantChange: setTheme,
    };

    return (
        <div
            className="flex min-h-screen flex-col font-sans transition-colors duration-300"
            style={{
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                backgroundImage: 'var(--app-radial)',
            }}
        >
            <header
                className="sticky top-0 z-50 flex flex-col items-center justify-between gap-4 border-b px-6 py-4 backdrop-blur-md sm:flex-row lg:px-12"
                style={{
                    borderColor: 'var(--header-border)',
                    backgroundColor: 'var(--header-bg)',
                }}
            >
                <div className="flex items-center">
                    <div className="flex flex-col leading-tight">
                        <div className="text-lg font-extrabold tracking-tight">
                            TickUp <span style={{color: 'var(--brand-wordmark)'}}>Charts</span>
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-wider" style={{color: 'var(--text-muted)'}}>
                            Demo
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-end gap-3">
                    <a
                        href="https://github.com/BARDAMRI/tickup-charts/blob/main/documentation/README.md"
                        target="_blank"
                        rel="noreferrer"
                        className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                            theme === ChartTheme.dark
                                ? 'border-white/10 bg-black/30 text-slate-300 hover:border-[#3EC5FF]/45 hover:text-white'
                                : 'border-slate-200 bg-white/70 text-slate-700 hover:border-[#3EC5FF]/60 hover:text-slate-900'
                        }`}
                        title="Open documentation (GitHub)"
                    >
                        Docs
                    </a>
                    <button
                        type="button"
                        onClick={() => {
                            setPage('tiers');
                            window.location.hash = '';
                        }}
                        className={`rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                            page === 'tiers'
                                ? 'showcase-nav-pill--active'
                                : theme === ChartTheme.dark
                                    ? 'border-white/10 bg-black/30 text-slate-300 hover:border-white/20 hover:text-white'
                                    : 'border-slate-200 bg-white/70 text-slate-700 hover:border-slate-300 hover:text-slate-900'
                        }`}
                        aria-pressed={page === 'tiers'}
                    >
                        Showcase
                    </button>
                    <button
                        type="button"
                        onClick={() => setPage('ticks')}
                        className={`rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                            page === 'ticks'
                                ? 'showcase-nav-pill--active'
                                : theme === ChartTheme.dark
                                    ? 'border-white/10 bg-black/30 text-slate-300 hover:border-white/20 hover:text-white'
                                    : 'border-slate-200 bg-white/70 text-slate-700 hover:border-slate-300 hover:text-slate-900'
                        }`}
                        aria-pressed={page === 'ticks'}
                    >
                        Tick demo
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            setPage('compare');
                            window.location.hash = '#/compare';
                        }}
                        className={`rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                            page === 'compare'
                                ? 'showcase-nav-pill--active'
                                : theme === ChartTheme.dark
                                    ? 'border-white/10 bg-black/30 text-slate-300 hover:border-white/20 hover:text-white'
                                    : 'border-slate-200 bg-white/70 text-slate-700 hover:border-slate-300 hover:text-slate-900'
                        }`}
                        aria-pressed={page === 'compare'}
                        title="Core vs Prime — published dist bundles, high-volume mock data"
                    >
                        Core vs Prime
                    </button>
                    {page !== 'compare' ? (
                    <div className={`flex items-center gap-3 rounded-full border p-1.5 pl-4 pr-1.5 shadow-xl ${
                    theme === ChartTheme.dark ? 'border-white/10 bg-black/40' : 'border-slate-200 bg-white/60'
                }`}>
                    <div className="flex items-center gap-2 pr-2">
                        <span className="relative flex h-3 w-3">
                            {!livePaused && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>}
                            <span className={`relative inline-flex h-3 w-3 rounded-full ${livePaused ? 'bg-amber-500' : 'bg-emerald-500'}`}></span>
                        </span>
                        <span className={`text-xs font-semibold uppercase tracking-wider ${theme === ChartTheme.dark ? 'text-slate-300' : 'text-slate-600'}`}>
                            {livePaused ? 'Live Paused' : 'Live Data API'}
                        </span>
                    </div>
                    <button
                        type="button"
                        onClick={() => setLivePaused((p) => !p)}
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-all hover:scale-105 active:scale-95 ${
                            livePaused 
                                ? (theme === ChartTheme.dark ? 'bg-amber-500/20 text-amber-500 hover:bg-amber-500/30' : 'bg-amber-500/20 text-amber-600 hover:bg-amber-500/30') 
                                : (theme === ChartTheme.dark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/5 text-slate-800 hover:bg-black/10')
                        }`}
                        title={livePaused ? "Resume Data" : "Pause Data"}
                    >
                        {livePaused ? <Play className="h-4 w-4" fill="currentColor" /> : <Pause className="h-4 w-4" fill="currentColor" />}
                    </button>
                    <button
                        type="button"
                        onClick={handleRefreshSeries}
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-all hover:scale-105 active:scale-95 ${
                            theme === ChartTheme.dark ? 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white' : 'bg-black/5 text-slate-500 hover:bg-black/10 hover:text-slate-900'
                        }`}
                        title="Reset Data"
                    >
                        <RefreshCw className="h-4 w-4" />
                    </button>
                    <button
                        type="button"
                        onClick={() => setTheme((t) => t === ChartTheme.dark ? ChartTheme.light : ChartTheme.dark)}
                        className={`flex h-8 w-8 items-center justify-center rounded-full transition-all hover:scale-105 active:scale-95 ${
                            theme === ChartTheme.dark ? 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white' : 'bg-black/5 text-amber-500 hover:bg-black/10 hover:text-amber-600'
                        }`}
                        title={theme === ChartTheme.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {theme === ChartTheme.dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>
                    </div>
                    ) : (
                    <button
                        type="button"
                        onClick={() => setTheme((t) => t === ChartTheme.dark ? ChartTheme.light : ChartTheme.dark)}
                        className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
                            theme === ChartTheme.dark
                                ? 'border-white/10 bg-black/40 text-slate-300 hover:bg-white/10'
                                : 'border-slate-200 bg-white/70 text-amber-600 hover:bg-slate-50'
                        }`}
                        title={theme === ChartTheme.dark ? 'Light mode' : 'Dark mode'}
                    >
                        {theme === ChartTheme.dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </button>
                    )}
                </div>
            </header>

            {page === 'ticks' ? (
                <TickUpDemo />
            ) : page === 'compare' ? (
                <ComparisonLab
                    theme={theme}
                    onThemeVariantChange={setTheme}
                    onOpenLicenseModal={() => setLicenseModalOpen(true)}
                    primeLicenseKey={primeLicenseUnlocked ? primeLicenseKey : null}
                    primeUserIdentifier={primeUserIdentifier || null}
                    primeEngine={primeEngine}
                />
            ) : (
                <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12 p-6 lg:gap-16 lg:p-12 mb-20">
                <div className="text-center pt-8 pb-4">
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
                        <span className={`text-transparent bg-clip-text bg-gradient-to-b ${theme === ChartTheme.dark ? 'from-white to-slate-400' : 'from-slate-800 to-slate-500'}`}>Next-Gen</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#3EC5FF] to-[#0A6B99] ml-4 drop-shadow-lg">Analysis</span>
                    </h1>
                    <p className={`mx-auto max-w-3xl text-lg mb-8 leading-relaxed ${theme === ChartTheme.dark ? 'text-slate-400' : 'text-slate-600'}`}>
                        TickUp is an ultra-fast, lightweight charting engine built for serious financial applications. 
                        With a remarkably tiny footprint, full developer support, and seamless turnkey integrations, it scales 
                        effortlessly from simple data embeds to immersive, WebGL-accelerated trading platforms. 
                        Give your users the institutional-grade technical analysis tools they deserve.
                    </p>
                    <div className={`flex flex-wrap items-center justify-center gap-4 text-xs lg:text-sm font-semibold uppercase tracking-wider ${theme === ChartTheme.dark ? 'text-slate-300' : 'text-slate-700'}`}>
                        <span className={`flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm ${theme === ChartTheme.dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'}`}>
                            <span className="text-[#3EC5FF]">⚡</span> Ultra Lightweight
                        </span>
                        <span className={`flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm ${theme === ChartTheme.dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'}`}>
                            <span className="text-emerald-400">🛡️</span> Developer Native
                        </span>
                        <span className={`flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm ${theme === ChartTheme.dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'}`}>
                            <span className="text-[#5A48DE]">✨</span> WebGL Accelerated
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-16">
                    <section
                        className={`rounded-[2rem] border p-5 lg:p-7 ${
                            theme === ChartTheme.dark ? 'border-white/10 bg-[#0a0f1a]/80' : 'border-slate-200 bg-white'
                        }`}
                    >
                        <div className="mb-4 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <h2 className={`text-2xl font-bold tracking-tight ${theme === ChartTheme.dark ? 'text-white' : 'text-slate-900'}`}>
                                    Choose Your Power
                                </h2>
                                <p className={`mt-1 text-sm ${theme === ChartTheme.dark ? 'text-slate-400' : 'text-slate-600'}`}>
                                    Core is production-ready for standard use. Prime is built for speed, scale, and advanced trader workflows.
                                </p>
                            </div>
                        </div>
                        <div className={`overflow-hidden rounded-xl border ${theme === ChartTheme.dark ? 'border-white/10' : 'border-slate-200'}`}>
                            <table className="w-full text-sm">
                                <thead className={theme === ChartTheme.dark ? 'bg-black/30' : 'bg-slate-100'}>
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold">Capability</th>
                                        <th className="px-4 py-3 text-left font-semibold">TickUp Lite (Core)</th>
                                        <th className="px-4 py-3 text-left font-semibold">TickUp Prime</th>
                                    </tr>
                                </thead>
                                <tbody className={theme === ChartTheme.dark ? 'divide-y divide-white/10' : 'divide-y divide-slate-200'}>
                                    <tr><td className="px-4 py-3">Live Updates</td><td className="px-4 py-3">1Hz Updates (Standard)</td><td className="px-4 py-3">60FPS Real-time</td></tr>
                                    <tr><td className="px-4 py-3">History</td><td className="px-4 py-3">5k History (generous cap)</td><td className="px-4 py-3">Unlimited History</td></tr>
                                    <tr><td className="px-4 py-3">Indicator Capacity</td><td className="px-4 py-3">3 Indicators</td><td className="px-4 py-3">Unlimited Indicators</td></tr>
                                    <tr><td className="px-4 py-3">Engine</td><td className="px-4 py-3">Standard Performance</td><td className="px-4 py-3">WebGL High-Performance</td></tr>
                                    <tr><td className="px-4 py-3">Drawing UX</td><td className="px-4 py-3">Manual Alignment</td><td className="px-4 py-3">Magnetic Drawing</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setLicenseModalOpen(true)}
                                className="rounded-lg px-4 py-2 text-sm font-semibold transition hover:brightness-110 active:scale-[0.99]"
                                style={{backgroundColor: 'var(--accent-neon)', color: 'var(--text-on-accent)'}}
                            >
                                Upgrade to Prime
                            </button>
                        </div>
                    </section>
                    <section
                        className={`rounded-[2rem] border p-5 lg:p-7 ${
                            theme === ChartTheme.dark
                                ? 'border-[#3EC5FF]/20 bg-[#08101d]/75 shadow-[0_0_40px_-20px_rgba(62,197,255,0.2)]'
                                : 'border-[#3EC5FF]/30 bg-white'
                        }`}
                    >
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <h2 className={`text-2xl font-bold tracking-tight ${theme === ChartTheme.dark ? 'text-white' : 'text-slate-900'}`}>
                                    Live Comparison
                                </h2>
                                <p className={`mt-1 max-w-2xl text-sm ${theme === ChartTheme.dark ? 'text-slate-400' : 'text-slate-600'}`}>
                                    Side-by-side benchmarks load the published <strong className={theme === ChartTheme.dark ? 'text-slate-200' : 'text-slate-800'}>dist/</strong> bundles
                                    (not TypeScript sources) with a high-volume mock stream—see the Standard cap next to Prime presentation, telemetry, and activation flow.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setPage('compare');
                                        window.location.hash = '#/compare';
                                    }}
                                    className="rounded-lg px-4 py-2 text-sm font-semibold shadow-md transition hover:brightness-110 active:scale-[0.99]"
                                    style={{
                                        backgroundColor: 'var(--accent-neon)',
                                        color: 'var(--text-on-accent)',
                                        boxShadow: '0 8px 28px -8px color-mix(in srgb, var(--accent-neon) 35%, transparent)',
                                    }}
                                >
                                    Open Live Comparison
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setLicenseModalOpen(true)}
                                    className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
                                        theme === ChartTheme.dark
                                            ? 'border-[#3EC5FF]/40 text-[#7dd3fc] hover:bg-[#3EC5FF]/10'
                                            : 'border-[#3EC5FF]/50 text-[#0369a1] hover:bg-cyan-50'
                                    }`}
                                >
                                    License modal
                                </button>
                            </div>
                        </div>
                    </section>
                    {TIER_ROWS.map(({key, title, blurb, Cmp, lux}) => (
                        <section 
                            key={key} 
                            className={`group relative overflow-hidden rounded-[2rem] border transition-all duration-500 ${
                                lux 
                                    ? (theme === ChartTheme.dark 
                                        ? 'border-[#3EC5FF]/30 bg-[#0c121e]/80 shadow-[0_0_80px_-20px_rgba(62,197,255,0.25)] hover:border-[#3EC5FF]/60 hover:shadow-[0_0_100px_-20px_rgba(62,197,255,0.4)]'
                                        : 'hover:border-[color:var(--lux-border-light)] border-[color:var(--lux-border-light)] bg-[var(--lux-surface-light)] shadow-[var(--lux-shadow-light)] hover:shadow-[var(--lux-glow-light)]')
                                    : (theme === ChartTheme.dark
                                        ? 'border-white/5 bg-white/[0.02] shadow-2xl hover:border-white/10'
                                        : 'border-slate-200 bg-white shadow-xl hover:border-slate-300')
                            }`}
                        >
                            <div className={`absolute inset-0 z-0 bg-gradient-to-b pointer-events-none ${theme === ChartTheme.dark ? 'from-white/[0.03] to-transparent' : 'from-slate-100 to-transparent'}`} />
                            
                            <div className={`relative z-10 flex flex-col gap-2 border-b p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8 ${theme === ChartTheme.dark ? 'border-white/5' : 'border-slate-100'}`}>
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h2 className={`text-2xl font-bold tracking-tight lg:text-3xl ${theme === ChartTheme.dark ? 'text-white' : 'text-slate-900'}`}>
                                            {title}
                                        </h2>
                                        {lux && (
                                            <span
                                                className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ring-1"
                                                style={{
                                                    backgroundColor: 'var(--lux-badge-bg)',
                                                    color: 'var(--lux-badge-text)',
                                                    boxShadow: 'inset 0 0 0 1px var(--lux-badge-ring)',
                                                }}
                                            >
                                                <Zap className="h-3 w-3" fill="currentColor" /> Luxury
                                            </span>
                                        )}
                                    </div>
                                    <p className={`mt-2 text-sm lg:text-base ${theme === ChartTheme.dark ? 'text-slate-400' : 'text-slate-600'}`}>{blurb}</p>
                                    {key === 'prime' && !primeLinked ? (
                                        <p className={`mt-2 text-xs ${theme === ChartTheme.dark ? 'text-amber-200/90' : 'text-amber-900'}`}>
                                            Prime{' '}
                                            <code
                                                className={`rounded px-1 py-0.5 ${theme === ChartTheme.dark ? 'bg-black/30' : 'bg-amber-100/90 text-amber-950'}`}
                                            >
                                                dist/tickup.es.js
                                            </code>{' '}
                                            not found next to this repo. Build <strong>tickup-prime-final</strong> or set{' '}
                                            <code
                                                className={`rounded px-1 py-0.5 ${theme === ChartTheme.dark ? 'bg-black/30' : 'bg-amber-100/90 text-amber-950'}`}
                                            >
                                                VITE_TICKUP_PRIME_SHIM=1
                                            </code>{' '}
                                            for a stub engine.
                                        </p>
                                    ) : null}
                                    {key === 'prime' ? (
                                        <div
                                            className={`mt-4 rounded-xl border p-3 ${
                                                theme === ChartTheme.dark
                                                    ? 'border-[#3EC5FF]/30 bg-[#040b16]/80 shadow-[inset_0_0_28px_rgba(62,197,255,0.08)]'
                                                    : 'border-[#3EC5FF]/30 bg-cyan-50/70'
                                            }`}
                                        >
                                            <div className="mb-2 flex items-center justify-between gap-2">
                                                <span
                                                    className={`text-[11px] font-semibold uppercase tracking-wider ${
                                                        theme === ChartTheme.dark ? 'text-[#7dd3fc]' : 'text-[#0c4a6e]'
                                                    }`}
                                                >
                                                    License Settings
                                                </span>
                                                <span
                                                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                                                        primeLicenseUnlocked
                                                            ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40'
                                                            : theme === ChartTheme.dark
                                                                ? 'bg-amber-950/40 text-amber-300 ring-1 ring-amber-500/35'
                                                                : 'bg-amber-100 text-amber-800 ring-1 ring-amber-300'
                                                    }`}
                                                >
                                                    {primeLicenseUnlocked ? 'Unlocked' : 'Evaluation'}
                                                </span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => setLicenseModalOpen(true)}
                                                className="w-full rounded-lg px-3 py-2 text-xs font-semibold transition hover:brightness-110 active:scale-[0.99]"
                                                style={{backgroundColor: 'var(--accent-neon)', color: 'var(--text-on-accent)'}}
                                            >
                                                Open License Modal
                                            </button>
                                        </div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="relative z-10 p-2 sm:p-4 lg:p-6 pb-0 shadow-inner">
                                <div
                                    className={`relative w-full overflow-hidden rounded-xl border ${
                                        lux
                                            ? theme === ChartTheme.dark
                                                ? 'h-[550px] border-[#3EC5FF]/20 shadow-[inset_0_0_40px_rgba(62,197,255,0.05)] bg-black/50'
                                                : 'h-[550px] border-[color:var(--lux-border-light)] bg-[var(--bg-elevated)] shadow-[inset_0_0_28px_var(--accent-neon-soft)]'
                                            : theme === ChartTheme.dark
                                              ? 'h-[500px] border-white/10 bg-black/50'
                                              : 'h-[500px] border-slate-200 bg-slate-50'
                                    }`}
                                >
                                    {key === 'prime' ? (
                                        <PrimeProTelemetry theme={theme} pickHost={primeTelemetryPickHost} />
                                    ) : null}
                                    <Cmp
                                        ref={tierRefCallbacks[key]}
                                        {...sharedProps}
                                        {...(key === 'prime'
                                            ? {
                                                intervalsArray: primeShowcaseIntervals,
                                                initialVisibleTimeRange: primeShowcaseVisibleRange,
                                                chartOptions: primeShowcaseChartOptions,
                                                licenseKey: primeLicenseUnlocked ? primeLicenseKey : null,
                                                licenseUserIdentifier:
                                                    primeLicenseUnlocked && primeUserIdentifier.trim()
                                                        ? primeUserIdentifier
                                                        : primeLicenseUnlocked
                                                          ? SHOWCASE_PRIME_USER_ID
                                                          : null,
                                            }
                                            : {})}
                                    />
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
                </main>
            )}
            {licenseModalOpen ? (
                <div
                    className="fixed inset-0 z-[70] flex items-center justify-center px-4"
                    style={{backgroundColor: 'var(--overlay-scrim)'}}
                >
                    <div
                        className="w-full max-w-lg rounded-2xl border p-5 shadow-2xl"
                        style={{
                            borderColor: 'var(--modal-border)',
                            backgroundColor: 'var(--modal-bg)',
                            color: 'var(--modal-text)',
                        }}
                    >
                        <div className="mb-3 flex items-center justify-between">
                            <h3 className="text-lg font-bold">Unlock Prime Features</h3>
                            <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${
                                primeLicenseUnlocked
                                    ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/40'
                                    : theme === ChartTheme.dark
                                        ? 'bg-amber-950/40 text-amber-300 ring-1 ring-amber-500/35'
                                        : 'bg-amber-100 text-amber-800 ring-1 ring-amber-300'
                            }`}>
                                {primeLicenseUnlocked ? 'Unlocked' : 'Evaluation'}
                            </span>
                        </div>
                        <p className="mb-4 text-sm" style={{color: 'var(--modal-muted)'}}>
                            Enter your Prime user identifier and license key to unlock Pro/Luxury rendering, smoother updates, and unlimited analysis tools.
                        </p>
                        <div
                            className={`mb-4 rounded-xl border p-4 text-sm ${
                                theme === ChartTheme.dark
                                    ? 'border-[#3EC5FF]/25 bg-[#0a1624]/90 text-slate-300'
                                    : 'border-[#3EC5FF]/30 bg-cyan-50/80 text-slate-700'
                            }`}
                        >
                            <h4 className={`mb-2 text-xs font-bold uppercase tracking-widest ${theme === ChartTheme.dark ? 'text-[#7dd3fc]' : 'text-cyan-800'}`}>
                                Pricing & licensing
                            </h4>
                            <p className="mb-3 leading-relaxed">
                                TickUp Core is MIT. Prime is a commercial upgrade for WebGL throughput, deep history, and pro tooling.
                            </p>
                            <div className="flex flex-col gap-2 text-xs font-semibold">
                                <a
                                    href="https://github.com/BARDAMRI/tickup-core-final/blob/main/README.md#pricing--licensing"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`rounded-lg border px-3 py-2 transition ${theme === ChartTheme.dark ? 'border-white/15 hover:bg-white/10' : 'border-slate-200 hover:bg-white'}`}
                                >
                                    Core (MIT) & upgrade overview →
                                </a>
                                <a
                                    href="https://github.com/BARDAMRI/tickup-prime"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`rounded-lg border px-3 py-2 transition ${theme === ChartTheme.dark ? 'border-[#3EC5FF]/35 text-[#7dd3fc] hover:bg-[#3EC5FF]/10' : 'border-cyan-200 text-cyan-900 hover:bg-cyan-100/60'}`}
                                >
                                    TickUp Prime product repo →
                                </a>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <input
                                value={primeUserIdentifierInput}
                                onChange={(e) => setPrimeUserIdentifierInput(e.target.value)}
                                placeholder="user@example.com or account ID"
                                className={`w-full rounded-lg border px-3 py-2 text-sm outline-none ring-[#3EC5FF]/40 focus:ring-2 ${
                                    theme === ChartTheme.dark
                                        ? 'border-[#3EC5FF]/35 bg-black/35 text-slate-100 placeholder:text-slate-500'
                                        : 'border-slate-300 bg-white text-slate-800'
                                }`}
                            />
                            <input
                                value={primeLicenseInput}
                                onChange={(e) => setPrimeLicenseInput(e.target.value)}
                                placeholder={SHOWCASE_PRIME_LICENSE_KEY}
                                className={`w-full rounded-lg border px-3 py-2 font-mono text-sm outline-none ring-[#3EC5FF]/40 focus:ring-2 ${
                                    theme === ChartTheme.dark
                                        ? 'border-[#3EC5FF]/35 bg-black/35 text-slate-100 placeholder:text-slate-500'
                                        : 'border-slate-300 bg-white text-slate-800'
                                }`}
                            />
                        </div>
                        <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
                            <button
                                type="button"
                                onClick={clearPrimeLicense}
                                className="rounded-lg border px-3 py-2 text-xs font-semibold transition active:scale-[0.98] hover:bg-[var(--btn-ghost-hover)] active:bg-[var(--btn-ghost-active)]"
                                style={{
                                    borderColor: 'var(--border-default)',
                                    color: 'var(--text-secondary)',
                                    backgroundColor: 'transparent',
                                }}
                            >
                                Clear
                            </button>
                            <button
                                type="button"
                                onClick={() => setLicenseModalOpen(false)}
                                className="rounded-lg border px-3 py-2 text-xs font-semibold transition active:scale-[0.98] hover:bg-[var(--btn-ghost-hover)] active:bg-[var(--btn-ghost-active)]"
                                style={{
                                    borderColor: 'var(--border-default)',
                                    color: 'var(--text-secondary)',
                                    backgroundColor: 'transparent',
                                }}
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    applyPrimeLicense();
                                    setLicenseModalOpen(false);
                                }}
                                className="rounded-lg px-3 py-2 text-xs font-semibold transition hover:brightness-110 active:scale-[0.98]"
                                style={{
                                    backgroundColor: 'var(--accent-neon)',
                                    color: 'var(--text-on-accent)',
                                }}
                            >
                                Apply & Unlock
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
