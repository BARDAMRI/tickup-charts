import {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';
/**
 * Vite resolves `tickup/full` from this file to `../dist/tickup-full.es.js` (published bundle).
 * TypeScript still types imports via `tickup/full` → library sources — no runtime coupling.
 */
import type {Interval, TickUpChartEngine, TickUpHostHandle} from 'tickup/full';
import {
    AxesPosition,
    ChartTheme,
    OverlayKind,
    TickUpCommand,
    TickUpPrimeTier,
    TickUpRenderEngine,
    TimeDetailLevel,
} from 'tickup/full';
import {Magnet} from 'lucide-react';
import {makeComparisonIntervals} from './comparisonMockData';

const COMPARE_INTERVAL_SEC = 300;
/** Published Standard Tier cap — keep aligned with `MAX_CORE_CANDLES` in core `useChartData`. */
const STANDARD_CAP = 5000;
/** Isolated high-volume feed so the Core wall is obvious. */
const MOCK_STREAM_BARS = 12_000;

export type ComparisonLabProps = {
    theme: ChartTheme;
    onThemeVariantChange: (variant: ChartTheme) => void;
    /** Opens the shared license & pricing modal (conversion funnel). */
    onOpenLicenseModal: () => void;
    primeLicenseKey: string | null;
    primeUserIdentifier: string | null;
    /** Obfuscated `@tickup/prime` engine — same object as the landing Prime tier. */
    primeEngine: TickUpChartEngine | null;
};

function ComparisonTelemetry({
    side,
    feedBars,
    renderedBars,
    fps,
    hzPhase,
}: {
    side: 'core' | 'prime';
    feedBars: number;
    renderedBars: number;
    fps: number;
    hzPhase: number;
}) {
    const neon = side === 'prime';
    return (
        <div
            className="rounded-xl border px-3 py-2 font-mono text-[10px] leading-relaxed shadow-lg backdrop-blur-md md:text-[11px]"
            style={{
                borderColor: 'var(--telemetry-border)',
                backgroundColor: neon ? 'var(--telemetry-bg-prime)' : 'var(--telemetry-bg-core)',
                color: 'var(--telemetry-value)',
                boxShadow: neon
                    ? '0 8px 28px -8px rgba(62, 197, 255, 0.12)'
                    : '0 8px 24px -10px rgba(15, 23, 42, 0.1)',
            }}
        >
            <div className="mb-1 flex items-center gap-2 border-b pb-1" style={{borderColor: 'var(--telemetry-divider)'}}>
                <span
                    className="text-[9px] font-bold uppercase tracking-[0.2em]"
                    style={{color: neon ? 'var(--telemetry-label-prime)' : 'var(--telemetry-label-core)'}}
                >
                    {neon ? 'Prime pipeline' : 'Standard Tier'}
                </span>
            </div>
            <div>
                <span style={{color: 'var(--telemetry-muted)'}}>Feed (mock) </span>
                <span style={{color: neon ? 'var(--telemetry-accent-prime)' : 'var(--telemetry-value)'}}>
                    {feedBars.toLocaleString()} bars
                </span>
            </div>
            <div>
                <span style={{color: 'var(--telemetry-muted)'}}>Chart series </span>
                <span style={{color: neon ? 'var(--telemetry-accent-prime)' : 'var(--telemetry-value)'}}>
                    {renderedBars.toLocaleString()}
                </span>
                {!neon && renderedBars <= STANDARD_CAP ? (
                    <span className="ml-1 text-[9px] font-semibold uppercase tracking-wide" style={{color: 'var(--telemetry-label-core)'}}>
                        {' '}
                        (cap)
                    </span>
                ) : null}
            </div>
            {neon ? (
                <div>
                    <span style={{color: 'var(--telemetry-muted)'}}>Target cadence </span>
                    <span className="text-emerald-600 dark:text-emerald-300">~{fps} FPS</span>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <span style={{color: 'var(--telemetry-muted)'}}>Heartbeat </span>
                    <span
                        className="inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)] dark:bg-emerald-400 dark:shadow-[0_0_8px_rgba(52,211,153,0.9)]"
                        style={{
                            animation: 'none',
                            opacity: 0.35 + 0.65 * hzPhase,
                            transform: `scale(${0.85 + 0.2 * hzPhase})`,
                        }}
                    />
                    <span className="font-medium text-emerald-800 dark:text-emerald-300/90">1 Hz (Standard)</span>
                </div>
            )}
        </div>
    );
}

export default function ComparisonLab({
    theme,
    onThemeVariantChange,
    onOpenLicenseModal,
    primeLicenseKey,
    primeUserIdentifier,
    primeEngine,
}: ComparisonLabProps) {
    const isDark = theme === ChartTheme.dark;
    const coreRef = useRef<TickUpHostHandle | null>(null);
    const primeRef = useRef<TickUpHostHandle | null>(null);
    const [coreRendered, setCoreRendered] = useState(0);
    const [primeRendered, setPrimeRendered] = useState(0);
    const [primeFps, setPrimeFps] = useState(60);
    const [hzPhase, setHzPhase] = useState(1);

    const comparisonIntervals = useMemo(
        () =>
            makeComparisonIntervals({
                startTime: 1_700_000_000,
                startPrice: 100,
                intervalSec: COMPARE_INTERVAL_SEC,
                count: MOCK_STREAM_BARS,
                seed: 900_001,
                driftPerBar: 0.03,
                vol: 0.65,
            }) as Interval[],
        []
    );

    const visibleRange = useMemo(() => {
        if (!comparisonIntervals.length) {
            return {start: 0, end: 1};
        }
        const lastT = comparisonIntervals[comparisonIntervals.length - 1].t;
        return {start: comparisonIntervals[0].t, end: lastT + COMPARE_INTERVAL_SEC};
    }, [comparisonIntervals]);

    const coreOptions = useMemo(
        () => ({
            base: {
                engine: TickUpRenderEngine.standard,
                theme,
                showOverlayLine: true,
                showHistogram: true,
                showCrosshair: true,
                showCrosshairValues: true,
                overlayKinds: [{kind: OverlayKind.ema, period: 21} as const],
                style: {
                    backgroundColor: isDark ? '#0b0e14' : '#ffffff',
                    grid: {lineColor: isDark ? '#334155' : '#e2e8f0'},
                    histogram: {
                        bullColor: 'rgba(38, 166, 154, 0.5)',
                        bearColor: 'rgba(239, 83, 80, 0.5)',
                        opacity: isDark ? 0.9 : 0.6,
                    },
                    axes: {
                        lineColor: isDark ? '#334155' : '#e2e8f0',
                        textColor: isDark ? '#94a3b8' : '#475569',
                    },
                },
            },
            axes: {yAxisPosition: AxesPosition.right},
        }),
        [theme, isDark]
    );

    const primeOptions = useMemo(
        () => ({
            base: {
                ...coreOptions.base,
                engine: TickUpRenderEngine.prime,
                showOverlayLine: true,
                overlayKinds: [OverlayKind.vwap, {kind: OverlayKind.ema, period: 34} as const],
                style: {
                    ...coreOptions.base.style,
                    backgroundColor: isDark ? '#050913' : '#f8fafc',
                    grid:
                        isDark || !coreOptions.base.style.grid
                            ? coreOptions.base.style.grid
                            : {
                                  ...coreOptions.base.style.grid,
                                  lineColor: 'rgba(3, 105, 161, 0.1)',
                              },
                },
            },
            axes: {yAxisPosition: AxesPosition.right},
        }),
        [coreOptions.base, isDark]
    );

    const pollCounts = useCallback(() => {
        setCoreRendered(coreRef.current?.getViewInfo()?.intervals?.length ?? 0);
        setPrimeRendered(primeRef.current?.getViewInfo()?.intervals?.length ?? 0);
    }, []);

    useEffect(() => {
        pollCounts();
        const t = window.setInterval(pollCounts, 400);
        return () => clearInterval(t);
    }, [pollCounts]);

    useLayoutEffect(() => {
        if (!primeEngine) return;
        let cancelled = false;
        let attempts = 0;
        const tryBind = () => {
            if (cancelled) return;
            const h = primeRef.current;
            if (h?.setEngine) {
                h.setEngine(primeEngine);
                return;
            }
            if (attempts++ < 48) {
                requestAnimationFrame(tryBind);
            }
        };
        const id = requestAnimationFrame(tryBind);
        return () => {
            cancelled = true;
            cancelAnimationFrame(id);
        };
    }, [primeEngine]);

    useEffect(() => {
        const id = window.setInterval(() => {
            setHzPhase((p) => (p > 0.5 ? 0.2 : 1));
        }, 1000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        let frames = 0;
        let last = performance.now();
        let raf = 0;
        const loop = (now: number) => {
            frames += 1;
            const dt = now - last;
            if (dt >= 500) {
                setPrimeFps(Math.round((frames * 1000) / dt));
                frames = 0;
                last = now;
            }
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(raf);
    }, []);

    const handleSymbolSearch = useCallback(() => {
        window.alert('Comparison lab: wire your data feed here.');
    }, []);

    const sharedHostProps = useMemo(
        () => ({
            defaultSymbol: 'COMPARE',
            onSymbolSearch: handleSymbolSearch,
            initialNumberOfYTicks: 8,
            initialTimeDetailLevel: TimeDetailLevel.Medium,
            initialVisibleTimeRange: visibleRange,
            themeVariant: theme,
            onThemeVariantChange,
            showAttribution: true,
        }),
        [theme, visibleRange, handleSymbolSearch, onThemeVariantChange]
    );

    return (
        <main
            className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col gap-8 px-4 py-8 pb-20 lg:px-8"
            style={{color: 'var(--text-primary)'}}
        >
            <header className="text-center">
                <p
                    className="mb-2 text-[11px] font-bold uppercase tracking-[0.35em]"
                    style={{color: 'var(--compare-hero-kicker)'}}
                >
                    Battleground
                </p>
                <h1
                    className={`mb-3 bg-gradient-to-r bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl ${
                        isDark ? 'from-white via-[#e0f2fe] to-[#3EC5FF]' : 'from-slate-900 via-slate-700 to-[#0369a1]'
                    }`}
                >
                    Live Comparison
                </h1>
                <p className="mx-auto max-w-2xl text-sm" style={{color: 'var(--compare-hero-body)'}}>
                    This view loads the <strong style={{color: 'var(--compare-hero-strong)'}}>published</strong> TickUp bundles from{' '}
                    <code
                        className="rounded px-1 text-[11px] font-medium"
                        style={{backgroundColor: 'var(--compare-code-bg)', color: 'var(--compare-code-text)'}}
                    >
                        dist/
                    </code>{' '}
                    — not TypeScript sources — with an isolated{' '}
                    <strong style={{color: 'var(--compare-hero-strong)'}}>{MOCK_STREAM_BARS.toLocaleString()}-bar</strong> mock stream so the
                    Standard <strong style={{color: 'var(--telemetry-label-core)'}}>{STANDARD_CAP.toLocaleString()}-bar</strong> cap is visible next
                    to Prime presentation. Core imports resolve to{' '}
                    <code
                        className="rounded px-1 text-[11px] font-medium"
                        style={{backgroundColor: 'var(--compare-code-bg)', color: 'var(--compare-code-text)'}}
                    >
                        tickup-core-final/dist
                    </code>
                    ; Prime to{' '}
                    <code
                        className="rounded px-1 text-[11px] font-medium"
                        style={{backgroundColor: 'var(--compare-code-bg)', color: 'var(--compare-code-text)'}}
                    >
                        tickup-prime-final/dist
                    </code>{' '}
                    (no <code style={{color: 'var(--telemetry-muted)'}}>src/</code>).
                </p>
            </header>

            <div className="grid gap-6 lg:grid-cols-2">
                <section
                    className="relative overflow-hidden rounded-2xl border"
                    style={{
                        borderColor: 'var(--compare-core-border)',
                        backgroundColor: 'var(--compare-core-surface)',
                        boxShadow: 'var(--compare-core-shadow)',
                    }}
                >
                    <div
                        className="border-b px-3 py-2 text-center text-[10px] font-bold uppercase tracking-widest"
                        style={{
                            borderColor: 'var(--compare-cap-banner-border)',
                            backgroundColor: 'var(--compare-cap-banner-bg)',
                            color: 'var(--compare-cap-banner-text)',
                        }}
                    >
                        DATA CAPPED AT {STANDARD_CAP.toLocaleString()} BARS
                    </div>
                    <div
                        className="flex flex-wrap items-center justify-between gap-2 border-b px-3 py-2"
                        style={{borderColor: 'var(--compare-core-border)'}}
                    >
                        <span className="text-sm font-semibold" style={{color: 'var(--compare-hero-strong)'}}>
                            TickUp Core (Standard)
                        </span>
                        <button
                            type="button"
                            disabled
                            title="Magnet snapping is Prime-only in this showcase."
                            className="inline-flex cursor-not-allowed items-center gap-1 rounded-md border px-2 py-1 text-xs opacity-60"
                            style={{borderColor: 'var(--border-default)', color: 'var(--text-muted)'}}
                        >
                            <Magnet className="h-3.5 w-3.5" />
                            Magnet
                        </button>
                    </div>
                    <div className="relative h-[380px]">
                        <TickUpCommand
                            ref={coreRef}
                            {...sharedHostProps}
                            intervalsArray={comparisonIntervals}
                            chartOptions={coreOptions}
                        />
                        <div className="pointer-events-none absolute bottom-3 left-3 z-20">
                            <ComparisonTelemetry
                                side="core"
                                feedBars={MOCK_STREAM_BARS}
                                renderedBars={coreRendered}
                                fps={0}
                                hzPhase={hzPhase}
                            />
                        </div>
                    </div>
                    <div className="border-t p-3" style={{borderColor: 'var(--compare-core-border)'}}>
                        <div className="flex flex-col gap-2 sm:flex-row">
                            <button
                                type="button"
                                onClick={onOpenLicenseModal}
                                className="flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold shadow-md transition hover:brightness-110 active:scale-[0.99]"
                                style={{
                                    background: 'linear-gradient(90deg, var(--accent-neon), #0ea5e9)',
                                    color: 'var(--text-on-accent)',
                                }}
                            >
                                Upgrade to Prime
                            </button>
                            <button
                                type="button"
                                onClick={onOpenLicenseModal}
                                className="flex-1 rounded-lg border px-4 py-2.5 text-sm font-semibold transition active:scale-[0.99] hover:bg-[var(--btn-ghost-hover)]"
                                style={{
                                    borderColor: 'var(--border-strong)',
                                    color: 'var(--text-secondary)',
                                }}
                            >
                                Pricing & activation
                            </button>
                        </div>
                    </div>
                </section>

                <section
                    className="compare-prime-panel-bg relative overflow-hidden rounded-2xl border"
                    style={{
                        borderColor: 'var(--compare-prime-border)',
                        boxShadow: 'var(--compare-prime-shadow)',
                    }}
                >
                    <div
                        className="border-b px-3 py-2 text-center text-[10px] font-bold uppercase tracking-widest"
                        style={{
                            borderColor: 'var(--compare-prime-border)',
                            backgroundColor: 'var(--compare-prime-strip-bg)',
                            color: 'var(--compare-prime-strip-text)',
                        }}
                    >
                        Prime experience · Neon + extended throughput (licensed product)
                    </div>
                    <div
                        className="flex items-center justify-between border-b px-3 py-2"
                        style={{borderColor: 'var(--compare-prime-border)'}}
                    >
                        <span className="text-sm font-semibold" style={{color: 'var(--compare-prime-title)'}}>
                            TickUp Prime
                        </span>
                        <span
                            className="rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ring-1"
                            style={{
                                backgroundColor: 'var(--compare-prime-badge-bg)',
                                color: 'var(--compare-prime-badge-text)',
                                boxShadow: 'inset 0 0 0 1px var(--compare-prime-badge-ring)',
                            }}
                        >
                            Neon
                        </span>
                    </div>
                    <div className="relative h-[380px]">
                        <TickUpPrimeTier
                            ref={primeRef}
                            {...sharedHostProps}
                            intervalsArray={comparisonIntervals}
                            chartOptions={primeOptions}
                            licenseKey={primeLicenseKey}
                            licenseUserIdentifier={primeUserIdentifier}
                        />
                        <div className="pointer-events-none absolute bottom-3 left-3 z-20">
                            <ComparisonTelemetry
                                side="prime"
                                feedBars={MOCK_STREAM_BARS}
                                renderedBars={primeRendered}
                                fps={primeFps}
                                hzPhase={0}
                            />
                        </div>
                    </div>
                    <div className="border-t p-3" style={{borderColor: 'var(--compare-prime-border)'}}>
                        <div className="flex flex-col gap-2 sm:flex-row">
                            <button
                                type="button"
                                onClick={onOpenLicenseModal}
                                className="flex-1 rounded-lg border px-4 py-2.5 text-sm font-semibold transition active:scale-[0.99] hover:bg-[var(--accent-neon-soft)]"
                                style={{
                                    borderColor: 'var(--compare-prime-border)',
                                    color: 'var(--compare-prime-strip-text)',
                                    backgroundColor: isDark ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.65)',
                                }}
                            >
                                Commercial license
                            </button>
                            <button
                                type="button"
                                onClick={onOpenLicenseModal}
                                className="flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition hover:brightness-110 active:scale-[0.99]"
                                style={{
                                    backgroundColor: 'var(--accent-neon)',
                                    color: 'var(--text-on-accent)',
                                }}
                            >
                                Open activation modal
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
