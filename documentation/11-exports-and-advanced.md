# Public exports & advanced topics

Published API is split across **`tickup`** and **`tickup/full`**. Undocumented deep imports are **not** semver-stable.

## Standard Edition scope

**TickUp Core** (this package) is the **Standard Edition**: Canvas 2D rendering, **2,000**-bar history cap, **1 Hz** live-update throttling on Standard shells, and **three** overlay indicators. Optional types and engine helpers in **`tickup/full`** exist for compatibility with advanced or commercial integrations; runtime behavior remains subject to Standard Tier guardrails unless you use a separate licensed Prime deployment.

## `tickup` (default)

| Export | Role |
|--------|------|
| `TickUpStage` | Chart + axes + optional toolbars + ref handle. |
| `TickUpMark` | DOM wordmark (`light` \| `dark` \| `grey`). |
| `TickUpAttribution` | Footer attribution strip. |
| `GlobalStyle` | Optional global CSS fragment. |
| `ModeProvider`, `useMode` | Drawing mode context. |
| `ChartOptions`, `DeepRequired` | Configuration typing. |
| Plus | Intervals, live-data utils, overlay builders, drawing helpers, snapshot helpers, graph math, enums, shape types. |

## `tickup/full` (shells + extended)

Everything in **`tickup`**, **plus**:

### Components

| Export | Role |
|--------|------|
| `TickUpHost` | Full shell: toolbar, settings, stage. |
| `TickUpPulse`, `TickUpFlow`, `TickUpCommand`, `TickUpDesk` | Product layouts. |
| `TickUpPrimeTier` | Prime product evaluation / licensed shell (`productId: 'prime'`). |
| `ShapePropertiesModal` | Shape property editor. |

### Engine profiles (optional)

Exports such as **`TickUpStandardEngine`**, **`TickUpChartEngine`**, and related symbols allow merging patches via **`setEngine`**. Standard Tier limits still apply in this open-source runtime unless paired with a licensed Prime backend.

### Types

`TickUpHostProps`, `TickUpHostHandle`, product prop types, `TickUpStageProps`, `TickUpStageHandle`, `TickUpAttributionProps`, `TickUpProductId`, etc.

## Context

`ModeProvider`, `useMode`, exported **`Mode`** enum.

## Data & config types

`Interval`, `TimeRange`, `VisibleViewRanges`, `LiveDataPlacement`, `LiveDataApplyResult`, `ChartContextInfo`, `ChartType`, `TimeDetailLevel`, `AxesPosition`, overlay types.

## Drawings

`ShapeType`, `DrawingSpec`, `DrawingPatch`, factories, query helpers, `IDrawingShape`, shape classes (**`tickup/full`**).

## Overlay builders

`OverlaySpecs`, `withOverlayStyle`, `overlay` — see [Overlays & indicators](./12-overlays-and-indicators.md).

## Live data

`applyLiveDataMerge`, `normalizeInterval`, `normalizeIntervals`, `dedupeByTimePreferLast`.

## Snapshot / export

`captureChartRegionToPngDataUrl`, filename helpers, `ChartSnapshotMeta`.

## Graph math

`timeToX`, `xToTime`, `priceToY`, `yToPrice`, etc.

## `TickUpStage` usage

Wrap with **`ModeProvider`**. Pass required `TickUpStageProps` from TypeScript. Most apps use **`TickUpHost`** or a **product** component instead.

## Init / update (summary)

1. Mount host or stage.  
2. Merge stable `chartOptions`.  
3. Load `intervalsArray` (clamped by Standard Tier).  
4. Canvases draw grid, series, histogram, watermark, overlays, drawings.  
5. Ref APIs: use `useEffect` / callbacks; **`getViewInfo()`** may be **`null`** until ready.

## Deprecated

`ChartStage` → use `TickUpStage`.

---

## Tier comparison: TickUp Prime

**[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** documents the commercial WebGL product, unlimited studies, and enterprise integrations. **[Showcase](https://bardamri.github.io/tickup-charts/)**
