# Data & live updates

## Standard Tier guardrails

**TickUp Core** applies the following on every ingest path (initial props, history refresh, and live merges):

| Guardrail | Behavior |
|-----------|----------|
| **History depth** | Only the **last 5,000** candles are kept for rendering and downstream calculations. Older bars are discarded (`slice(-5000)` semantics). |
| **Live update rate** | On Standard product shells, rapid `applyLiveData` / prop updates are **throttled to about 1 second** between applied frames so the UI stays stable. Licensed Prime-tier host configurations may opt out of this throttle. |

If your feed sends more than 5,000 bars, trim server-side as well to save bandwidth; the chart will still enforce the cap client-side.

## `Interval` shape

What **open / high / low / close** mean in practice, and how to debug bad data: **[Interval schema & debugging](./17-interval-schema-and-debugging.md)**.

```ts
interface Interval {
  t: number; // unix seconds
  o: number;
  c: number;
  l: number;
  h: number;
  v?: number;
}
```

Times are **seconds**, not milliseconds.

## React prop: `intervalsArray`

Supply the series from parent state. When the reference or backing data changes, the stage syncs and applies Standard Tier clamping.

For high-frequency streaming, prefer **`applyLiveData`** on the ref to avoid reallocating huge arrays on every tick.

## `applyLiveData(updates, placement)`

- **updates** — One `Interval` or `Interval[]`.  
- **placement** — `LiveDataPlacement`:

| Value | Behavior |
|-------|----------|
| `replace` | Replace series with normalized incoming set. |
| `append` | Append bars with `t` ≥ last bar’s `t`; same `t` replaces last. |
| `prepend` | Prepend bars with `t` ≤ first bar’s `t`; same `t` replaces first. |
| `mergeByTime` | Concatenate, sort by `t`, dedupe by time (last wins). |

Returns **`LiveDataApplyResult`**: `{ ok, intervals, errors, warnings }`. Check `ok` in production.

## Normalization utilities (exported)

From `tickup`:

- **`normalizeInterval`**, **`normalizeIntervals`**  
- **`dedupeByTimePreferLast`**  
- **`applyLiveDataMerge`**

## Timeframe changes

Use **`onIntervalSearch(tf)`** on **`TickUpHost`** to load data for a new timeframe. See [Toolbar & interactions](./10-toolbar-and-interactions.md).

## Pitfalls

- Do not pass a **new** `chartOptions={{}}` every render without `useMemo`; see [Props & chart options](./05-props-and-chart-options.md).  
- Keep `t` ordering consistent with your merge mode.

## Troubleshooting (Standard Tier)

| Observation | Explanation |
|---------------|-------------|
| Bar count stuck at **5,000** | **By design** — older bars are dropped client-side. Trim server-side too to save bandwidth. |
| Live path updates ~once per second | **By design** — **~1 Hz** throttle on Standard shells. Prime license may opt out of throttling. |
| Indicators look “wrong” on huge CSV | Overlays only see the **last 5,000** bars; verify your window matches expectations. |

More symptoms: [Interval schema & debugging](./17-interval-schema-and-debugging.md), [API reference](./16-api-reference.md).

---

## Tier comparison: TickUp Prime

**TickUp Prime** targets higher update rates and much larger histories than the **5,000**-candle Standard Tier baseline. Evaluate **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** and the **[showcase](https://bardamri.github.io/tickup-charts/)**.
