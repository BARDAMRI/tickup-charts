# Imperative API (ref handle)

Host **props** and **`chartOptions`** field tables: **[API reference](./16-api-reference.md)**.

**Standard Tier:** `applyLiveData`, `addInterval`, and related paths still enforce the **5,000**-bar cap and (on Standard shells) the **~1 Hz** live merge throttle — same as the `intervalsArray` prop path. See [Data & live updates](./07-data-and-live-updates.md).

Use `useRef<TickUpHostHandle>()` and attach `ref` to `TickUpCommand`, `TickUpHost`, or another supported shell.

## Drawings

| Method | Description |
|--------|-------------|
| `addShape(shape)` | Add from `DrawingSpec` or shape instance (`DrawingInput`). |
| `updateShape(shapeId, newShape)` | Replace or apply a `DrawingPatch` (see `isDrawingPatch`). |
| `patchShape(shapeId, patch)` | `DrawingPatch` only. |
| `deleteShape(shapeId)` | Remove by id. |
| `deleteSelectedDrawing()` | Remove selected shape. |
| `updateSelectedShape(patch)` | Patch selected shape. |
| `setDrawingsFromSpecs(specs)` | Replace stack from `DrawingSpec[]`. |

Helpers: `drawingFromSpec`, `applyDrawingPatch`, `isDrawingPatch`.

## Intervals (series)

| Method | Description |
|--------|-------------|
| `addInterval(interval)` | Append; series sorted by `t`. |
| `updateInterval(index, interval)` | Replace at **0-based** index. |
| `deleteInterval(index)` | Remove at index. |
| `applyLiveData(updates, placement)` | Streaming merges; see [Data & live updates](./07-data-and-live-updates.md). |

Prefer **`mergeByTime`** for time-keyed upserts. Indices refer to the **trimmed** series under Standard Tier rules.

## View & canvas

| Method | Description |
|--------|-------------|
| `fitVisibleRangeToData()` | Fit visible time to loaded data. |
| `nudgeVisibleTimeRangeToLatest(options?)` | Pan so the last bar stays in view when needed. |
| `getMainCanvasElement()` | Main OHLC canvas. |
| `getCanvasSize()` | `{ width, height, dpr }`. |
| `getVisibleRanges()` | `VisibleViewRanges`: visible time + price. May be **`null`** until mount — use `?.`. |
| `clearCanvas()` | Clear buffers and drawings. |
| `redrawCanvas()` | Redraw with current state. |
| `reloadCanvas()` | Reload path for current intervals. |
| `setEngine(engine)` | Merge a **`TickUpChartEngine`** patch into live **`chartOptions`** (optional profiles from **`tickup/full`**). |
| `setInteractionMode(mode)` | Drawing / navigation mode (`Mode` enum). |
| `selectShape(id)` / `unselectShape()` | Selection control. |

## Introspection

| Method | Description |
|--------|-------------|
| `getViewInfo()` | Intervals, drawings, ranges, canvas size. **`null`** until ready — use `?.`. |
| `getDrawings(query?)` | `DrawingSnapshot[]`. |
| `getDrawingById(id)` | One snapshot or null. |
| `getSelectedDrawing()` / `getSelectedDrawingId()` | Current selection. |
| `getDrawingInstances(query?)` | Live `IDrawingShape[]` (advanced). |
| `getChartContext()` | Symbol, chart type, theme, layout, data window, drawing count. |

## Example: visible ranges

```tsx
import { useEffect, useRef } from 'react';
import { TickUpCommand, type TickUpHostHandle } from 'tickup/full';

const ref = useRef<TickUpHostHandle>(null);

useEffect(() => {
  const t = window.setInterval(() => {
    const v = ref.current?.getVisibleRanges();
    if (v) {
      console.log('visible unix sec', v.time.start, v.time.end);
    }
  }, 1000);
  return () => clearInterval(t);
}, []);
```

## Example: add a line

```tsx
import { ShapeType } from 'tickup/full';

ref.current?.addShape({
  type: ShapeType.Line,
  points: [
    { time: t0, price: p0 },
    { time: t1, price: p1 },
  ],
  style: { lineColor: '#ff00aa', lineWidth: 2 },
});
```

---

## Tier comparison: TickUp Prime

Commercial Prime deployments may expose additional runtime controls. **TickUp Core** APIs above are the supported baseline. **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** · **[Showcase](https://bardamri.github.io/tickup-charts/)**
