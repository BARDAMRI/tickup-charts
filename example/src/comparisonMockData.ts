/**
 * Synthetic OHLCV for the public comparison view. No chart imports — safe to mix with dist-only bundles.
 */
export type ComparisonInterval = {
    t: number;
    o: number;
    c: number;
    l: number;
    h: number;
    v: number;
};

function simplePRNG(seed = 12345) {
    let s = seed >>> 0;
    const rand = () => (s = (1664525 * s + 1013904223) >>> 0) / 0xffffffff;
    return {rand};
}

/** High-volume feed (10k+) so Standard Tier clamps at 5k remain obvious. */
export function makeComparisonIntervals(args: {
    startTime: number;
    startPrice: number;
    intervalSec: number;
    count: number;
    seed?: number;
    driftPerBar?: number;
    vol?: number;
}): ComparisonInterval[] {
    const {
        startTime,
        startPrice,
        intervalSec,
        count,
        seed = 12345,
        driftPerBar = 0.04,
        vol = 0.6,
    } = args;
    const rng = simplePRNG(seed);
    const out: ComparisonInterval[] = [];
    let t = startTime;
    let lastClose = startPrice;

    for (let i = 0; i < count; i++) {
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
