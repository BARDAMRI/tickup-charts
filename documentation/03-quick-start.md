# Quick start

**Brand-new to TickUp?** Use **[Getting started](./00-getting-started.md)** for a from-scratch install and a single-file Hello World.

**TickUp Core** is **React-first**: embed **`TickUpHost`**, **`TickUpStage`**, or a **product** component (`TickUpCommand`, …). Configure the chart with **props** and **`chartOptions`**; drive streaming data with **refs** (`applyLiveData`, etc.).

## 1. Render a product component

```tsx
import { useRef } from 'react';
import { TickUpCommand, type TickUpHostHandle } from 'tickup/full';

const sample = [
  { t: 1700000000, o: 100, h: 102, l: 99, c: 101, v: 1200 },
  { t: 1700000060, o: 101, h: 103, l: 100, c: 102, v: 900 },
];

export function App() {
  const chartRef = useRef<TickUpHostHandle>(null);

  return (
    <div style={{ height: 480, width: '100%' }}>
      <TickUpCommand
        ref={chartRef}
        intervalsArray={sample}
        defaultSymbol="DEMO"
      />
    </div>
  );
}
```

`TickUpCommand` is the full-trader layout. For plot + axes only, use **`TickUpPulse`**. Pass **`symbol`** or **`defaultSymbol`** so the ticker appears in the **compact strip** when there is no top bar (Pulse). See [Products & layout](./04-products-and-layout.md).

## 2. Size the container

The chart fills its parent. Set **`height`** (and usually **`width`** or flex) on a wrapper `div`.

## 3. Control data from React state

```tsx
const [bars, setBars] = useState<Interval[]>(initial);

<TickUpCommand ref={chartRef} intervalsArray={bars} />;
```

The stage normalizes incoming data to **Standard Tier** limits — **5,000** bars max and about **1 Hz** live merge throttling on Standard shells (see [Data & live updates](./07-data-and-live-updates.md) and [API reference](./16-api-reference.md)).

## 4. Imperative live updates

```tsx
const r = chartRef.current?.applyLiveData(
  { t: 1700000120, o: 102, h: 104, l: 101, c: 103, v: 1100 },
  'append'
);
if (r && !r.ok) console.warn(r.errors);
```

## 5. Optional: `chartOptions`

Pass a **stable** object (`useMemo`) so internal UI state is not reset every render:

```tsx
const options = useMemo(
  () => ({
    base: { showHistogram: true },
    axes: { yAxisPosition: AxesPosition.left, numberOfYTicks: 5 },
  }),
  []
);

<TickUpCommand chartOptions={options} intervalsArray={bars} />;
```

See [Props & chart options](./05-props-and-chart-options.md).

## Next

- [Products & layout](./04-products-and-layout.md)  
- [Imperative API](./06-imperative-api.md)  

---

## Tier comparison: TickUp Prime

Optional **engine profiles** and commercial features are documented with **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)**. This quick start covers **TickUp Core** (Standard Edition) only. **[Showcase](https://bardamri.github.io/tickup-charts/)**
