# Interval schema, OHLC meaning & debugging

TickUp charts consume an array of **`Interval`** objects (often named **`intervalsArray`**). Each object is one **bar** or **candle** in time.

---

## What is OHLCV?

Financial software often summarizes trading in fixed **time buckets** (e.g. one bar per **5 minutes**). For each bucket you store:

| Field | Name | Meaning |
|-------|------|---------|
| **`t`** | Time | **Start** of the bar as **Unix time in seconds** (not milliseconds). |
| **`o`** | Open | First traded price (or official session open) in the bucket. |
| **`h`** | High | Highest price during the bucket. |
| **`l`** | Low | Lowest price during the bucket. |
| **`c`** | Close | Last traded price when the bucket ends (or official close). |
| **`v`** | Volume | Optional. Total traded **size** in the bucket (shares, contracts, etc.). |

**Invariants** (your data should satisfy these):

- `l <= min(o, c)` and `h >= max(o, c)` (low is the minimum of the bar, high the maximum).
- Bars are usually **ordered by increasing `t`**.
- **`t`** steps should match your **timeframe** (e.g. +300 seconds for 5-minute bars).

If **`h` < `l`** or **`o`/`c`** fall outside **[`l`, `h`]**, rendering may look wrong or behave oddly.

---

## TypeScript shape

```ts
interface Interval {
  t: number; // unix seconds
  o: number;
  h: number;
  l: number;
  c: number;
  v?: number;
}
```

---

## Standard Tier: data, performance & limits

**Data:** Only the **last 5,000** intervals are kept in the internal series. Feeding 100,000 rows still results in a **5,000-bar window** for drawing and overlays.

**Performance:** Streaming via **`applyLiveData`** (and rapid prop updates) is **throttled** to about **1 Hz** on Standard product shells so the UI stays stable. Licensed Prime-tier hosts may opt out of this throttle; the **5,000**-bar cap remains the **TickUp Core** baseline for in-package data paths.

---

## Debugging: chart is blank or “does nothing”

| Symptom | Likely cause | What to check |
|---------|----------------|----------------|
| **Empty canvas** | No data or zero-height parent | `intervalsArray.length`, wrapper **`height`** / flex layout. |
| **Flat line or dot** | All `o,h,l,c` identical or one bar only | Log `intervalsArray` length and price spread. |
| **Nothing updates live** | Throttle or wrong placement | Expect ~1s between applied merges on Standard; check `LiveDataPlacement`. |
| **Wrong time axis** | `t` in milliseconds | Divide by **1000** or fix upstream (TickUp expects **seconds**). |
| **Bars out of order** | Unsorted `t` | Sort by `t` ascending before passing. |
| **Indicators missing** | More than 3 overlays | Standard Tier caps at **3**; see toast / [Overlays](./12-overlays-and-indicators.md). |
| **NaN / Infinity** | Bad feed math | Filter or fix non-finite numbers before passing to TickUp. |

### Minimal console checks

```ts
const rows = intervalsArray ?? [];
console.log('bars', rows.length, 'first', rows[0], 'last', rows[rows.length - 1]);
```

Confirm **`rows[0].t`** is a plausible **second** timestamp (e.g. 10 digits, not 13).

---

## Related guides

- [Data & live updates](./07-data-and-live-updates.md) — `applyLiveData`, placements, clamping.
- [API reference](./16-api-reference.md) — `intervalsArray` and options.
- [Getting started](./00-getting-started.md) — Hello World sample.

---

## Tier comparison: TickUp Prime

For higher throughput and larger histories on supported deployments, evaluate **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** and the **[showcase](https://bardamri.github.io/tickup-charts/)**.
