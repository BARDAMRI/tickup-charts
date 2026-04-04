# Props & chart options

For **exhaustive tables** (every host prop, `TickUpRenderEngine`, and `chartOptions` field with types, defaults, and Standard Tier notes), see **[API reference](./16-api-reference.md)**. This page is a shorter narrative companion.

## `TickUpHostProps` / `TickUpHostHandle`

### Data & view

| Prop | Purpose |
|------|---------|
| `intervalsArray` | OHLCV series (`Interval[]`). Default `[]`. Clamped to **5,000** bars (Standard Tier). |
| `initialVisibleTimeRange` | On the type for API stability; **not wired** in `TickUpHost` today — use ref pan/fit or load data first. |
| `initialNumberOfYTicks` | Seeds `chartOptions.axes.numberOfYTicks` when that axis field is omitted in `chartOptions` (default **5**). |
| `initialXAxisHeight` | **Not read** by the host today; layout uses internal constants. |
| `initialYAxisWidth` | **Not read** by the host today. |
| `initialTimeDetailLevel` | `TimeDetailLevel` for axis time density. |
| `initialTimeFormat12h` | 12h vs 24h time formatting. |

### `chartOptions` (deep partial merge)

Type: `DeepPartial<ChartOptions>`. Merged with library defaults (`DEFAULT_GRAPH_OPTIONS`). Pass a **stable** reference (`useMemo`) when values do not change every render, so toolbar-driven state is not overwritten by a new `{}` each time.

### Layout (only without `productId`)

| Prop | Purpose |
|------|---------|
| `showSidebar` | Drawing tools column. |
| `showTopBar` | Symbol + chart controls row. |
| `showSettingsBar` | Gear and related controls. |

### Toolbar / host hooks

| Prop | Purpose |
|------|---------|
| `symbol` | Controlled symbol (top bar when shown). |
| `defaultSymbol` | Initial symbol when `symbol` is **omitted**. |
| `onSymbolChange` | Top-bar symbol edits (Flow, Command, Desk). |
| `onSymbolSearch` | Search submit; return **`false`** or **reject** to revert input. |
| `onRefreshRequest` | User chose Refresh. |

**Top bar hidden** (e.g. Pulse): use **`symbol`** / **`defaultSymbol`** for the compact strip; see [Toolbar & interactions](./10-toolbar-and-interactions.md).

### Other

| Prop | Purpose |
|------|---------|
| `productId` | Lock layout (`pulse` \| `flow` \| `command` \| `desk` \| `prime`). |
| `showAttribution` | In-chart TickUp watermark (Desk forces on). |
| `licenseKey` | For `productId: 'prime'`: evaluation vs licensed chrome (Prime product). |
| `themeVariant` / `defaultThemeVariant` / `onThemeVariantChange` | Shell light/dark. |

### Shell vs chart theme

- Shell props drive **`GlobalStyle`**, settings modal chrome, and toolbar surfaces.
- Plot colors come from **`chartOptions`** (`base.theme`, `base.style`, …). Align shell and chart theme for readable grid and watermarks.

## `ChartOptions` structure (high level)

```ts
ChartOptions = {
  base: {
    engine?,             // rendering profile key (Standard Edition defaults to Canvas 2D)
    chartType,
    theme,
    showOverlayLine,
    showHistogram,
    showCrosshair,
    showCrosshairValues,
    showCandleTooltip,
    style: { candles, line, area, bar, histogram, grid, overlay, axes, drawings, showGrid, backgroundColor },
    overlays?, overlayKinds?,
  },
  axes: { yAxisPosition, currency, numberOfYTicks },
};
```

### Interaction flags (`base`)

- **`showCrosshair`** — Guide lines in navigation mode.  
- **`showCrosshairValues`** — Time/price labels (requires crosshair).  
- **`showCandleTooltip`** — OHLC / change / volume panel.

### Axes & formatting

Under `base.style.axes`: locale, decimals, currency, sessions, holidays, etc. See [i18n & axes](./13-internationalization-and-axes.md).

### Overlays / indicators

- **`base.showOverlayLine`** — Draw indicator lines.  
- **`base.overlays`** — `OverlayWithCalc[]` (recommended).  
- **`base.overlayKinds`** — Shorthand list.

Standard Tier: **three** overlays maximum. See [Overlays & indicators](./12-overlays-and-indicators.md).

### Standard Tier: data volume & live cadence

**TickUp Core** (Standard Tier) keeps at most **5,000** bars in the rendered series and throttles rapid live merges to about **1 Hz** on Standard shells so dashboards stay responsive. If you need deeper history or faster merge cadence without that throttle, evaluate **Prime** (see [Comparison showcase](./18-comparison-showcase.md)).

### Drawings default style

`base.style.drawings`: line, fill, selection styling.

---

## Tier comparison: TickUp Prime

**TickUp Prime** documents optional engine patches and commercial styling. **TickUp Core** integration does not require them. **[Prime docs](https://github.com/BARDAMRI/tickup-prime)** · **[Showcase](https://bardamri.github.io/tickup-charts/)**
