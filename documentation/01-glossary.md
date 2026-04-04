# Glossary

New to financial bars? Read **[Getting started](./00-getting-started.md)** and **[Interval schema](./17-interval-schema-and-debugging.md)** first.

## Data

- **Interval** — One bar: open, high, low, close, time (`t` in **Unix seconds**), optional volume (`v`). See the `Interval` type.
- **Series** — Ordered array of intervals, sorted by `t`.
- **Time range** — Visible X-axis window: `start` and `end` (Unix seconds). Indices `startIndex` / `endIndex` refer to positions in the **loaded** series (after Standard Tier trimming).
- **Price range** — Visible Y window: min/max prices and `range` span.

## Chart presentation

- **Chart type** — `ChartType`: candlestick, line, area, or bar.
- **Theme** — `base.theme` on the chart (`light`, `dark`, `grey`) plus **`TickUpHost`** shell theme via **`themeVariant`** / **`defaultThemeVariant`** / **`onThemeVariantChange`**.
- **Axes** — Time (X) and price (Y) scales; options under `chartOptions.base.style.axes` and `chartOptions.axes`.
- **Histogram** — Volume bars below the plot when `showHistogram` is true.
- **Overlay** — Computed line series drawn on price (see [Overlays & indicators](./12-overlays-and-indicators.md)).

## Products (shell layout)

TickUp ships **named product components** that fix toolbar layout:

| Product | Typical use |
|---------|-------------|
| **Pulse** | Minimal: plot + axes; optional **compact symbol strip** when `symbol` / `defaultSymbol` is set |
| **Flow** | Top bar; no drawing sidebar |
| **Command** | Full UI: drawing sidebar + top bar |
| **Desk** | Same as Command; in-chart branding watermark required |

Use **`TickUpHost`** **without** `productId` to control `showSidebar` / `showTopBar` / `showSettingsBar` yourself.

## Live data

- **Placement** — How bars merge: `replace`, `append`, `prepend`, `mergeByTime` (`LiveDataPlacement`).
- **Apply result** — `LiveDataApplyResult`: `ok`, resulting intervals, `errors`, `warnings`.

## Drawings

- **Shape** — User- or API-created overlay: line, rectangle, circle, triangle, angle, arrow, polyline, custom symbol (`ShapeType`).
- **Drawing spec** — `{ type, points, style?, id?, symbol?, size? }` (`DrawingSpec`).
- **Patch** — Partial update `{ style?, points?, symbol?, size? }` (`DrawingPatch`).
- **Z-index** — Later shapes draw above earlier ones; hit-testing uses top-most first.

## Interaction modes

Toolbar **mode** switches between navigation, draw tools, select, and edit. Pan/zoom applies in default navigation.

## Snapshot / export

- **Main canvas** — OHLC layer only via `getMainCanvasElement`.
- **Chart region** — PNG of the composed view via `captureChartRegionToPngDataUrl` and toolbar hooks.

## Indicators

Overlays configured with `base.showOverlayLine` and `base.overlays` or `base.overlayKinds`. Standard Tier allows **three** active overlays.

## Market calendar (axes)

- **Trading session** — Weekday window (`dayOfWeek` + `HH:mm` start/end) for session shading.
- **Holiday** — ISO date strings where integrated.

---

## Tier comparison: TickUp Prime

**TickUp Core** uses Canvas 2D with a **5,000**-candle Standard Tier history cap (plus 1 Hz throttling and three overlays). **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** is the commercial upgrade for higher throughput and expanded features—see the **[showcase](https://bardamri.github.io/tickup-charts/)**.
