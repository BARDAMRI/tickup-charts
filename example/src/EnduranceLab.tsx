import {Component, type ReactNode, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import type {Interval, TickUpHostHandle} from 'tickup/full';
import {AxesPosition, ChartTheme, LiveDataPlacement, TickUpCommand, TimeDetailLevel} from 'tickup/full';

/**
 * Stress-test harness for the Standard (Core, Canvas 2D) engine:
 *  - a 200k-candle initial payload (exercises the MAX_CORE_CANDLES clamp + slicing)
 *  - a continuous 50 ticks/sec live feed, a fraction of which is deliberately malformed
 *  - a render-fault Error Boundary standing in for GPU/WebGL context-loss recovery
 *    (neither Core nor the linked Prime bundle actually render via WebGL today — see
 *    the harness header below for what this substitutes and why)
 *  - a performance.memory logger + manual mount/unmount toggle for leak inspection
 */

const INTERVAL_SEC = 300;
const INITIAL_CANDLE_COUNT = 200_000;
const TICKS_PER_SECOND = 50;
const DIRTY_TICK_EVERY = 25;
const MEMORY_LOG_INTERVAL_MS = 10_000;
const RECOVERY_DELAY_MS = 1_500;

function enduranceRng(seed: number) {
    let s = seed >>> 0;
    return () => (s = (1664525 * s + 1013904223) >>> 0) / 0xffffffff;
}

function makeEnduranceIntervals(count: number): Interval[] {
    const rand = enduranceRng(777_001);
    const out: Interval[] = new Array(count);
    let t = 1_600_000_000;
    let lastClose = 100;
    for (let i = 0; i < count; i++) {
        const o = lastClose;
        const noise = (rand() - 0.5) * 1.2;
        const c = +(o + 0.01 + noise).toFixed(2);
        const h = +(Math.max(o, c) + rand() * 0.4).toFixed(2);
        const l = +(Math.min(o, c) - rand() * 0.4).toFixed(2);
        const v = Math.max(1, Math.round(1000 + (rand() - 0.5) * 400));
        out[i] = {t, o, h, l, c, v};
        lastClose = c;
        t += INTERVAL_SEC;
    }
    return out;
}

function makeCleanTick(last: Interval): Interval {
    const o = last.c;
    const noise = (Math.random() - 0.5) * 1.0;
    const c = +(o + 0.01 + noise).toFixed(2);
    const h = +(Math.max(o, c) + Math.random() * 0.35).toFixed(2);
    const l = +(Math.min(o, c) - Math.random() * 0.35).toFixed(2);
    const v = Math.max(1, Math.round(1000 + (Math.random() - 0.5) * 400));
    return {t: last.t + INTERVAL_SEC, o, h, l, c, v};
}

type DirtyVariant = 'null-fields' | 'nan-price' | 'missing-fields' | 'out-of-order-timestamp';
const DIRTY_VARIANTS: DirtyVariant[] = ['null-fields', 'nan-price', 'missing-fields', 'out-of-order-timestamp'];

/** Deliberately malformed payloads mimicking a flaky upstream feed. Returned as `any` — that's the point. */
function makeDirtyTick(last: Interval, variant: DirtyVariant): any {
    switch (variant) {
        case 'null-fields':
            return {t: last.t + INTERVAL_SEC, o: null, h: null, l: null, c: null, v: null};
        case 'nan-price':
            return {t: last.t + INTERVAL_SEC, o: last.c, h: NaN, l: NaN, c: NaN, v: last.v};
        case 'missing-fields':
            return {t: last.t + INTERVAL_SEC};
        case 'out-of-order-timestamp':
            return {t: last.t - 999_999, o: last.c, h: last.c + 1, l: last.c - 1, c: last.c, v: last.v};
    }
}

type FeedStats = {
    sent: number;
    accepted: number;
    droppedByEngine: number;
    warnings: number;
    engineExceptions: number;
};

/**
 * Stand-in for GPU context-loss recovery: neither Core nor the linked Prime bundle
 * render via WebGL today (confirmed: both use Canvas 2D; Prime's only "WebGL" surface
 * is a license capability probe, not a renderer), so there is no real context to lose.
 * This proves the same contract a context-loss handler would need to honor — catch a
 * fault in the render path, never crash the host page, show a transient recovering
 * state, then cleanly remount — using a real thrown error instead of a fabricated
 * `WEBGL_lose_context` event.
 */
class RenderFaultBoundary extends Component<
    {onRecovered: () => void; children: ReactNode},
    {hasError: boolean}
> {
    state = {hasError: false};
    private recoveryTimer: number | null = null;

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error: unknown) {
        console.error('[EnduranceLab] render fault caught by boundary — recovering:', error);
    }

    componentDidUpdate() {
        if (this.state.hasError && this.recoveryTimer == null) {
            this.recoveryTimer = window.setTimeout(() => {
                this.recoveryTimer = null;
                this.setState({hasError: false});
                this.props.onRecovered();
            }, RECOVERY_DELAY_MS);
        }
    }

    componentWillUnmount() {
        if (this.recoveryTimer != null) {
            window.clearTimeout(this.recoveryTimer);
        }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-black/70 text-amber-300">
                    <span className="text-sm font-semibold uppercase tracking-widest">Recovering…</span>
                    <span className="text-xs text-amber-200/70">Render fault caught — reinitializing chart engine</span>
                </div>
            );
        }
        return this.props.children;
    }
}

/** Throws once, synchronously, while armed — the fault the boundary above must survive. */
function ChaosProbe({armed}: {armed: boolean}) {
    if (armed) {
        throw new Error('EnduranceLab: simulated render-path fault');
    }
    return null;
}

export default function EnduranceLab({
    theme,
    onThemeVariantChange,
}: {
    theme: ChartTheme;
    onThemeVariantChange: (variant: ChartTheme) => void;
}) {
    const isDark = theme === ChartTheme.dark;
    const hostRef = useRef<TickUpHostHandle | null>(null);

    const initialIntervals = useMemo(() => makeEnduranceIntervals(INITIAL_CANDLE_COUNT), []);
    const initialVisibleRange = useMemo(() => {
        const lastT = initialIntervals[initialIntervals.length - 1].t;
        return {start: initialIntervals[0].t, end: lastT + INTERVAL_SEC};
    }, [initialIntervals]);

    const chartOptions = useMemo(
        () => ({
            base: {
                theme,
                showOverlayLine: true,
                showHistogram: true,
                showCrosshair: true,
                style: {backgroundColor: isDark ? '#05080f' : '#ffffff'},
            },
            axes: {yAxisPosition: AxesPosition.right},
        }),
        [theme, isDark]
    );

    const [feedRunning, setFeedRunning] = useState(true);
    const [stats, setStats] = useState<FeedStats>({
        sent: 0,
        accepted: 0,
        droppedByEngine: 0,
        warnings: 0,
        engineExceptions: 0,
    });
    const statsRef = useRef(stats);
    statsRef.current = stats;
    const lastBarRef = useRef<Interval>(initialIntervals[initialIntervals.length - 1]);
    const dirtyCycleRef = useRef(0);
    const tickCounterRef = useRef(0);

    const [engineBarCount, setEngineBarCount] = useState(initialIntervals.length);

    const pushTick = useCallback(() => {
        const api = hostRef.current;
        if (!api?.applyLiveData) return;

        tickCounterRef.current += 1;
        const isDirty = tickCounterRef.current % DIRTY_TICK_EVERY === 0;
        const last = lastBarRef.current;
        const tick = isDirty
            ? makeDirtyTick(last, DIRTY_VARIANTS[dirtyCycleRef.current++ % DIRTY_VARIANTS.length])
            : makeCleanTick(last);

        let result;
        try {
            result = api.applyLiveData(tick, LiveDataPlacement.append);
        } catch (err) {
            console.error('[EnduranceLab] applyLiveData threw — should never happen:', err);
            setStats((s) => ({...s, sent: s.sent + 1, engineExceptions: s.engineExceptions + 1}));
            return;
        }

        if (!isDirty && result.errors.length === 0) {
            lastBarRef.current = tick as Interval;
        }
        if (result.intervals.length) {
            setEngineBarCount(result.intervals.length);
        }
        setStats((s) => ({
            sent: s.sent + 1,
            accepted: s.accepted + (result.errors.length === 0 ? 1 : 0),
            droppedByEngine: s.droppedByEngine + (result.errors.length > 0 ? 1 : 0),
            warnings: s.warnings + result.warnings.length,
            engineExceptions: s.engineExceptions,
        }));
    }, []);

    useEffect(() => {
        if (!feedRunning) return;
        const id = window.setInterval(pushTick, 1000 / TICKS_PER_SECOND);
        return () => window.clearInterval(id);
    }, [feedRunning, pushTick]);

    // rAF-driven FPS estimator — cheap stand-in for "chart must maintain a stable framerate".
    const [fps, setFps] = useState(0);
    useEffect(() => {
        let raf = 0;
        let frames = 0;
        let windowStart = performance.now();
        const loop = (now: number) => {
            frames += 1;
            if (now - windowStart >= 1000) {
                setFps(frames);
                frames = 0;
                windowStart = now;
            }
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(raf);
    }, []);

    // performance.memory logger (Chrome/Chromium only) — printed every 10s, cleaned up on unmount.
    const [memorySupported, setMemorySupported] = useState(false);
    const [memoryStats, setMemoryStats] = useState<{usedMB: number; totalMB: number; limitMB: number} | null>(null);
    useEffect(() => {
        const perf = performance as Performance & {memory?: {usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number}};
        const supported = typeof perf.memory !== 'undefined';
        setMemorySupported(supported);
        if (!supported) return;

        const log = () => {
            const m = perf.memory!;
            const snapshot = {
                usedMB: +(m.usedJSHeapSize / 1_048_576).toFixed(1),
                totalMB: +(m.totalJSHeapSize / 1_048_576).toFixed(1),
                limitMB: +(m.jsHeapSizeLimit / 1_048_576).toFixed(1),
            };
            console.log('[EnduranceLab] performance.memory', snapshot);
            setMemoryStats(snapshot);
        };
        log();
        const id = window.setInterval(log, MEMORY_LOG_INTERVAL_MS);
        return () => window.clearInterval(id);
    }, []);

    // Chaos / render-fault recovery cycle.
    const [chaosArmed, setChaosArmed] = useState(false);
    const [remountEpoch, setRemountEpoch] = useState(0);
    const [faultsRecovered, setFaultsRecovered] = useState(0);
    const triggerRenderFault = useCallback(() => setChaosArmed(true), []);
    const handleRecovered = useCallback(() => {
        setChaosArmed(false);
        setRemountEpoch((e) => e + 1);
        setFaultsRecovered((n) => n + 1);
    }, []);

    // Manual mount/unmount toggle for DevTools memory-profiler inspection.
    const [chartMounted, setChartMounted] = useState(true);
    const [mountCycles, setMountCycles] = useState(0);
    // Increment directly in the click handler (not inside a setState updater function
    // or an effect body) — React 18 Strict Mode double-invokes both of those to catch
    // impurities, which would double-count a nested counter update.
    const toggleMounted = useCallback(() => {
        setChartMounted((m) => !m);
        if (!chartMounted) {
            setMountCycles((n) => n + 1);
        }
    }, [chartMounted]);

    const acceptRate = stats.sent ? Math.round((stats.accepted / stats.sent) * 100) : 100;

    return (
        <main
            className={`mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 p-6 lg:p-12 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}
        >
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Endurance Lab</h1>
                <p className={`max-w-3xl text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Stress harness for the Standard (Core) engine: a {INITIAL_CANDLE_COUNT.toLocaleString()}-candle
                    initial payload, a continuous {TICKS_PER_SECOND} ticks/sec live feed (1 in {DIRTY_TICK_EVERY} ticks
                    deliberately malformed), a simulated render-fault recovery cycle, and a live memory sampler.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
                <StatTile label="Est. FPS" value={String(fps)} isDark={isDark} />
                <StatTile label="Bars in engine" value={engineBarCount.toLocaleString()} isDark={isDark} />
                <StatTile label="Ticks sent" value={stats.sent.toLocaleString()} isDark={isDark} />
                <StatTile label="Accept rate" value={`${acceptRate}%`} isDark={isDark} />
                <StatTile label="Dropped (dirty)" value={stats.droppedByEngine.toLocaleString()} isDark={isDark} />
                <StatTile label="Warnings" value={stats.warnings.toLocaleString()} isDark={isDark} />
                <StatTile
                    label="Engine exceptions"
                    value={stats.engineExceptions.toLocaleString()}
                    isDark={isDark}
                    danger={stats.engineExceptions > 0}
                />
            </div>

            <div className="flex flex-wrap items-center gap-3">
                <button
                    type="button"
                    onClick={() => setFeedRunning((r) => !r)}
                    className={`rounded-lg border px-3 py-2 text-xs font-semibold uppercase tracking-wide ${
                        isDark ? 'border-white/15 bg-white/5 hover:bg-white/10' : 'border-slate-300 bg-white hover:bg-slate-50'
                    }`}
                >
                    {feedRunning ? 'Pause feed' : 'Resume feed'}
                </button>
                <button
                    type="button"
                    onClick={triggerRenderFault}
                    disabled={chaosArmed}
                    className="rounded-lg border border-amber-500/50 bg-amber-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-amber-500 hover:bg-amber-500/20 disabled:opacity-50"
                >
                    Trigger render fault
                </button>
                <button
                    type="button"
                    onClick={toggleMounted}
                    className={`rounded-lg border px-3 py-2 text-xs font-semibold uppercase tracking-wide ${
                        isDark ? 'border-white/15 bg-white/5 hover:bg-white/10' : 'border-slate-300 bg-white hover:bg-slate-50'
                    }`}
                >
                    {chartMounted ? 'Unmount chart' : 'Remount chart'}
                </button>
                <button
                    type="button"
                    onClick={() => onThemeVariantChange(isDark ? ChartTheme.light : ChartTheme.dark)}
                    className={`rounded-lg border px-3 py-2 text-xs font-semibold uppercase tracking-wide ${
                        isDark ? 'border-white/15 bg-white/5 hover:bg-white/10' : 'border-slate-300 bg-white hover:bg-slate-50'
                    }`}
                >
                    Toggle theme
                </button>
                <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    Faults recovered: {faultsRecovered} · Mount cycles: {mountCycles}
                </span>
                <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                    {memorySupported
                        ? memoryStats
                            ? `Heap: ${memoryStats.usedMB}MB / ${memoryStats.totalMB}MB (limit ${memoryStats.limitMB}MB)`
                            : 'Sampling memory…'
                        : 'performance.memory not supported in this browser'}
                </span>
            </div>

            <div
                className={`relative h-[560px] w-full overflow-hidden rounded-xl border ${
                    isDark ? 'border-white/10 bg-black/40' : 'border-slate-200 bg-slate-50'
                }`}
            >
                {chartMounted ? (
                    <RenderFaultBoundary onRecovered={handleRecovered}>
                        <div key={remountEpoch} className="h-full w-full">
                            <ChaosProbe armed={chaosArmed} />
                            <TickUpCommand
                                ref={hostRef}
                                intervalsArray={initialIntervals}
                                initialVisibleTimeRange={initialVisibleRange}
                                initialTimeDetailLevel={TimeDetailLevel.Medium}
                                chartOptions={chartOptions}
                                themeVariant={theme}
                                onThemeVariantChange={onThemeVariantChange}
                                defaultSymbol="ENDURANCE"
                            />
                        </div>
                    </RenderFaultBoundary>
                ) : (
                    <div className={`flex h-full w-full items-center justify-center text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        Chart unmounted — click "Remount chart" to reinitialize
                    </div>
                )}
            </div>
        </main>
    );
}

function StatTile({label, value, isDark, danger}: {label: string; value: string; isDark: boolean; danger?: boolean}) {
    return (
        <div
            className={`rounded-lg border px-3 py-2 ${
                danger
                    ? 'border-red-500/50 bg-red-500/10'
                    : isDark
                      ? 'border-white/10 bg-white/5'
                      : 'border-slate-200 bg-white'
            }`}
        >
            <div className={`text-[10px] font-semibold uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {label}
            </div>
            <div className={`font-mono text-lg font-semibold ${danger ? 'text-red-500' : isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                {value}
            </div>
        </div>
    );
}
