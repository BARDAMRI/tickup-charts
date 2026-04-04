import {useEffect, useState} from 'react';
import {ChartTheme} from 'tickup/full';
import type {TickUpHostHandle} from 'tickup/full';
import {Zap} from 'lucide-react';

export function PrimeProTelemetry({
    theme,
    pickHost,
}: {
    theme: ChartTheme;
    pickHost: () => TickUpHostHandle | null;
}) {
    const [fps, setFps] = useState(60);
    const [renderedBars, setRenderedBars] = useState(0);

    useEffect(() => {
        let raf = 0;
        let frames = 0;
        let last = performance.now();
        const loop = (t: number) => {
            frames++;
            const dt = t - last;
            if (dt >= 650) {
                setFps(Math.max(1, Math.round((frames * 1000) / dt)));
                frames = 0;
                last = t;
                const h = pickHost();
                setRenderedBars(h?.getViewInfo?.()?.intervals?.length ?? 0);
            }
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(raf);
    }, [pickHost]);

    const isDark = theme === ChartTheme.dark;
    return (
        <div
            className="pointer-events-none absolute right-3 top-3 z-20 flex max-w-[min(92vw,320px)] flex-col gap-1 rounded-xl border px-3 py-2 text-left shadow-xl backdrop-blur-md"
            style={{
                borderColor: 'var(--prime-pill-border)',
                backgroundColor: 'var(--prime-pill-bg)',
                color: 'var(--text-primary)',
                boxShadow: isDark
                    ? '0 0 28px rgba(62, 197, 255, 0.15)'
                    : '0 8px 32px -12px rgba(3, 105, 161, 0.12)',
            }}
        >
            <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em]" style={{color: 'var(--prime-pill-title)'}}>
                <Zap className="h-3 w-3" fill="currentColor" />
                Pro Power
            </div>
            <div className="text-[11px] font-semibold leading-snug">
                <span className="tabular-nums" style={{color: 'var(--prime-pill-fps)'}}>
                    {fps} FPS
                </span>
                <span style={{color: 'var(--prime-pill-muted)'}}> · </span>
                <span style={{color: 'var(--text-secondary)'}}>Unlimited history</span>
            </div>
            <div className="text-[10px] font-medium tabular-nums" style={{color: 'var(--prime-pill-muted)'}}>
                Series window: {renderedBars.toLocaleString()} bars (live)
            </div>
        </div>
    );
}
