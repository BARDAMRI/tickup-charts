# Getting started — Grand Tour

**TickUp Core** is a **React** library that draws **financial charts** (prices over time) on an HTML5 **canvas**. You give it a list of **bars** (each bar has **time**, **open**, **high**, **low**, **close**, and optional **volume**). The chart handles panning, zooming, crosshair, and optional drawings.

If you have never used a charting library, think of it as a **smart `<canvas>`** component: you pass **data** and **options**, and users explore the series interactively.

---

## What you are building

- A **React** app (Vite, Next.js, or Create React App–style bundler).
- One **parent component** that holds **price data** in state (or loads it from an API).
- One **TickUp** component (`TickUpCommand`, `TickUpPulse`, or `TickUpHost`) that receives `intervalsArray` and optional `chartOptions`.

---

## Step 1 — Create a React project (if you do not have one)

Examples:

```bash
npm create vite@latest my-tickup-app -- --template react-ts
cd my-tickup-app
npm install
```

Or use your team’s existing React 18/19 app.

---

## Step 2 — Install TickUp and peer dependencies

TickUp ships as **`tickup`** on npm. It expects **React**, **react-dom**, and **styled-components** in your app:

```bash
npm install tickup react react-dom styled-components
```

**TypeScript:** types are included. Enable `strict` in `tsconfig.json` if you want stricter checks.

---

## Step 3 — Choose an import path

| Import | Use when |
|--------|----------|
| `import { TickUpStage } from 'tickup'` | You want **only** the chart canvas (no toolbars). |
| `import { TickUpCommand } from 'tickup/full'` | You want the **full product UI** (toolbar, settings, drawings). |

Most product integrations use **`tickup/full`**.

---

## Step 4 — Hello World (copy-paste)

This example uses **`TickUpCommand`**, a few **mock candles**, and a **fixed-height** wrapper (the chart fills its parent).

```tsx
import { useMemo } from 'react';
import { AxesPosition, TickUpCommand } from 'tickup/full';
import type { Interval } from 'tickup/full';

const MOCK_BARS: Interval[] = [
  { t: 1_700_000_000, o: 100, h: 102, l: 99, c: 101, v: 1200 },
  { t: 1_700_000_300, o: 101, h: 103, l: 100, c: 102, v: 900 },
  { t: 1_700_000_600, o: 102, h: 104, l: 101, c: 103, v: 1100 },
  { t: 1_700_000_900, o: 103, h: 105, l: 102, c: 104, v: 1300 },
];

export function HelloTickUp() {
  const chartOptions = useMemo(
    () => ({
      base: {
        showHistogram: true,
        showCrosshair: true,
      },
      axes: { yAxisPosition: AxesPosition.right },
    }),
    []
  );

  return (
    <div style={{ height: 420, width: '100%' }}>
      <TickUpCommand
        intervalsArray={MOCK_BARS}
        defaultSymbol="DEMO"
        chartOptions={chartOptions}
      />
    </div>
  );
}
```

**Render `HelloTickUp` inside your app root** (e.g. `App.tsx`).

### Why `height` matters

The chart **stretches to fill its parent**. If the parent has **no height**, the canvas can collapse to **zero height** and look “broken.” Always set **`height`** (or flex layout with a defined size) on the wrapper.

---

## Step 5 — Standard Tier guardrails (know this early)

TickUp Core applies **stability limits** on all Standard Edition hosts:

| Guardrail | What it means for you |
|-----------|------------------------|
| **5,000 bars** | Only the **last 5,000** candles are kept for drawing and indicators; older bars are dropped. |
| **~1 Hz live updates** | Rapid `applyLiveData` / prop churn is **throttled** to about **once per second** on Standard shells. |
| **3 overlays** | At most **three** indicator overlays; extra requests are capped with a message. |

These are **not bugs**; they keep dashboards fast on typical hardware. See [Data & live updates](./07-data-and-live-updates.md) and [API reference](./16-api-reference.md).

---

## Next steps

| Topic | Guide |
|--------|--------|
| Full prop & option reference | [API reference](./16-api-reference.md) |
| OHLC meaning & debugging | [Interval schema & debugging](./17-interval-schema-and-debugging.md) |
| Compare Core vs Prime in the browser | [Comparison showcase](./18-comparison-showcase.md) |
| Products (Pulse vs Command) | [Products & layout](./04-products-and-layout.md) |
| Ref API (`applyLiveData`, …) | [Imperative API](./06-imperative-api.md) |

---

## Tier comparison: TickUp Prime

For **WebGL**, **unlimited** history (product-dependent), and **unlimited** indicators, evaluate **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** and the **[live showcase](https://bardamri.github.io/tickup-charts/)**.
