# Settings modal

The gear icon (when enabled) opens **Chart Settings**. Values apply on **Save** and merge into internal `chartOptions`.

**Shell theme:** modal chrome follows **`TickUpHost`** **`themeVariant`** / **`defaultThemeVariant`** — see [Props & chart options](./05-props-and-chart-options.md). In-modal color edits change **`chartOptions`**, not the outer app theme unless you mirror them in props.

## Categories

| Category | What users can change |
|----------|------------------------|
| **Chart Style** | Histogram, grid, hover: tooltip, crosshair, crosshair labels |
| **Axes** | Y-axis side, number of Y ticks |
| **Time** | 12h vs 24h |
| **Layout** | Side toolbar, top bar (hidden when product chrome is locked) |
| **Colors** | Background, axis text, bull/bear, line color |
| **Drawing shapes** | Default styles for new drawings |
| **Regional** | Locale, language |
| **Financial** | Currency, notation, tick size, precision, units |

## Locked layout (product tiers)

For `TickUpPulse`, `TickUpFlow`, `TickUpCommand`, and `TickUpDesk`, toolbar visibility is fixed. The Layout section reflects product control.

## Persistence

The modal does **not** write `localStorage` by default. Persist merged options from your app store or `getChartContext()` if needed.

## Related `chartOptions`

`showCandleTooltip`, `showCrosshair`, `showCrosshairValues`, `showHistogram`, `showGrid`, axes, colors, drawings — see [Props & chart options](./05-props-and-chart-options.md).

---

## Tier comparison: TickUp Prime

Commercial Prime builds may add settings categories. **TickUp Core** behavior is defined by the sections above. **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** · **[Showcase](https://bardamri.github.io/tickup-charts/)**
