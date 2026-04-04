# Glossary

New to financial bars? Read **[Getting started](./00-getting-started.md)** and **[Interval schema](./17-interval-schema-and-debugging.md)** first.

## Data

- **OHLC / OHLCV** — **O**pen, **H**igh, **L**ow, **C**lose, optional **V**olume on each **Interval**; see [Interval schema](./17-interval-schema-and-debugging.md).
- **Interval** — One bar: open, high, low, close, time (`t` in **Unix seconds**), optional volume (`v`). Type: `Interval`.
- **Series** — Ordered array of intervals, sorted by `t` (often passed as **`intervalsArray`**).
- **Time range** — Visible X-axis window: `start` and `end` (Unix seconds). Indices `startIndex` / `endIndex` refer to positions in the **loaded** series (after Standard Tier trimming). Type: `TimeRange`; extended view info: `VisibleViewRanges`.
- **Price range** — Visible Y window: min/max prices and `range` span (`PriceRange`).
- **Standard Tier** — **TickUp Core** limits: **5,000** bars retained, **~1 Hz** live merge throttle on Standard shells, **three** overlays. See [Data & live updates](./07-data-and-live-updates.md).

## Chart presentation

- **Candle / candlestick** — A bar shown as **wick + body** when **`ChartType.Candlestick`** is active; colors come from `base.style.candles`.
- **Bar (OHLC bar mode)** — Vertical OHLC segments when **`ChartType.Bar`** is active (`base.style.bar`).
- **Chart type** — `ChartType`: candlestick, line, area, or bar.
- **Theme** — `base.theme` on the chart (`light`, `dark`, `grey`) plus **`TickUpHost`** shell theme via **`themeVariant`** / **`defaultThemeVariant`** / **`onThemeVariantChange`**.
- **Axes** — Time (X) and price (Y) scales; options under `chartOptions.base.style.axes` and `chartOptions.axes`.
- **Crosshair** — Hover guides (`showCrosshair`) and optional value labels (`showCrosshairValues`).
- **Candle tooltip** — Hover panel for OHLC / change / volume (`showCandleTooltip`).
- **Histogram** — Volume bars below the plot when `showHistogram` is true.
- **Overlay** — Computed line series drawn on price (`OverlayWithCalc`, `OverlaySeries`); configured with `base.showOverlayLine` and `base.overlays` / `base.overlayKinds` (see [Overlays & indicators](./12-overlays-and-indicators.md)).
- **OverlayKind** / **OverlayPriceKey** — Enums for indicator kind (`sma`, `ema`, …) and price source (`close`, `open`, …).
- **TickUpStage** — Low-level React stage: canvases, axes, optional toolbars; import from **`tickup`**. Often wrapped by **`TickUpHost`** or a **product** from **`tickup/full`**.

## Toolbar & time scope

- **Timeframe** — User-facing bar size string (e.g. **`5m`**, **`1h`**) chosen in the toolbar; your app loads **`Interval[]`** for that TF via **`onIntervalSearch`** / controlled **`interval`** prop. Not the same word as the **`Interval`** type (one bar).
- **Range key** — Preset **visible span** name (`1D`, `1M`, `All`, …, `RangeKey`); distinct from **`TimeRange`** (unix `start`/`end`).

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

- **Placement** — How bars merge: `replace`, `append`, `prepend`, `mergeByTime` (**`LiveDataPlacement`** enum).
- **Apply result** — `LiveDataApplyResult`: `ok`, resulting intervals, `errors`, `warnings`.

## Drawings

- **Shape** — User- or API-created overlay: line, rectangle, circle, triangle, angle, arrow, polyline, custom symbol (`ShapeType`).
- **Drawing spec** — `{ type, points, style?, id?, symbol?, size? }` (`DrawingSpec`).
- **Patch** — Partial update `{ style?, points?, symbol?, size? }` (`DrawingPatch`).
- **Z-index** — Later shapes draw above earlier ones; hit-testing uses top-most first.

## Interaction modes

**Mode** — Toolbar / context enum (`Mode.none`, draw tools, `select`, `editShape`, …) from **`ModeContext`**. **Pan** and **wheel zoom** apply in default navigation; see [Toolbar & interactions](./10-toolbar-and-interactions.md).

## Snapshot / export

- **Main canvas** — OHLC layer only via `getMainCanvasElement`.
- **Chart region** — PNG of the composed view via **`captureChartRegionToPngDataUrl`** and toolbar hooks; metadata type **`ChartSnapshotMeta`**.

## Indicators

Overlays configured with `base.showOverlayLine` and `base.overlays` or `base.overlayKinds`. Standard Tier allows **three** active overlays.

## Market calendar (axes)

- **Trading session** — Weekday window (`dayOfWeek` + `HH:mm` start/end) for session shading.
- **Holiday** — ISO date strings where integrated.

## Branding

- **Attribution** — In-chart **TickUp** watermark / footer (**`TickUpAttribution`**, **`showAttribution`**); **Desk** may force it on.
- **Watermark** — Low-opacity mark on the plot; placement enum **`TickUpWatermarkPlacement`**.

## Formatting (advanced)

- **PriceMetricKind** — Enum for special axis/tooltip display modes (`basisPoints`, `pnl`, `yield`, `volatility`) used in formatting helpers.

---

## Tier comparison: TickUp Prime

**TickUp Core** uses Canvas 2D with a **5,000**-candle Standard Tier history cap (plus 1 Hz throttling and three overlays). **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** is the commercial upgrade for higher throughput and expanded features—see the **[showcase](https://bardamri.github.io/tickup-charts/)**.
