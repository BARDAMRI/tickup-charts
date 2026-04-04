# API reference — TickUpHost, chart options & render engine

This page lists **host props** and **`chartOptions`** fields as implemented in **TickUp Core** (Standard Tier / Standard Edition). Types ship in **`dist/*.d.ts`** in the published package.

**Authoritative TypeScript sources:** `TickUpHostProps` in `src/components/TickUpHost.tsx`; `ChartOptions`, `StyleOptions`, and related enums in `src/types/chartOptions.ts`; `ChartTheme` in `src/types/types.ts`; overlay types in `src/types/overlay.ts`.

**Standard Tier guardrails** (apply unless you use a **licensed Prime-tier** deployment that opts out of throttling):

- **History:** at most **5,000** candles retained (`slice(-5000)` semantics).
- **Live path:** about **1 Hz** (1000 ms) throttle on merges for Standard shells.
- **Overlays:** at most **3** simultaneous studies from `overlays` / `overlayKinds`; extras are **capped** and a toast may appear.

For behavior and debugging, see [Data & live updates](./07-data-and-live-updates.md), [Interval schema & debugging](./17-interval-schema-and-debugging.md), and [Comparison showcase](./18-comparison-showcase.md).

---

## `TickUpRenderEngine`

**Type:** string enum (`'standard' | 'prime'`).

**Purpose:** Selects the **visual profile** for the plot (standard Canvas 2D look vs Prime-styled neon / glass accents in this package). **WebGL** throughput requires the separate **@tickup/prime** engine and license path.

| Value | Purpose | Default in merged options |
|-------|---------|---------------------------|
| `standard` | Default Canvas 2D presentation. | Yes (`DEFAULT_GRAPH_OPTIONS`) |
| `prime` | Prime **styling** profile in Core; pair with a Prime engine via ref `setEngine` for full WebGL. | No |

If **omitted** in `chartOptions`, the library merge supplies **`standard`**.

---

## `TickUpHost` props (and product wrappers)

These props apply to **`TickUpHost`** and tier components **`TickUpPulse`**, **`TickUpFlow`**, **`TickUpCommand`**, **`TickUpDesk`**, **`TickUpPrimeTier`** (some props omitted per product; see **Constraint**).

| Prop | Type | Purpose | Default if omitted | Constraint / notes |
|------|------|---------|-------------------|---------------------|
| `intervalsArray` | `Interval[]` | Series to plot (**OHLCV**). | `[]` (empty chart) | Clamped to **5,000** bars (Standard Tier). |
| `initialNumberOfYTicks` | `number` | Seeds `chartOptions.axes.numberOfYTicks` when that field is **not** set in `chartOptions`. | `5` | If you pass `chartOptions.axes.numberOfYTicks`, this prop is ignored. |
| `initialXAxisHeight` | `number` | Declared on the type; **not** read by `TickUpHost` today. | — | Layout uses internal constants (see `windowSpread` in `src/types/types.ts`). |
| `initialYAxisWidth` | `number` | Declared on the type; **not** read by `TickUpHost` today. | — | Same as `initialXAxisHeight`. |
| `initialTimeDetailLevel` | `TimeDetailLevel` | Time axis label density (`auto` / `low` / `medium` / `high`). | `Auto` | Passed through to the stage as `timeDetailLevel`. |
| `initialTimeFormat12h` | `boolean` | 12h vs 24h time labels. | `false` | Shell/settings time format. |
| `initialVisibleTimeRange` | `TimeRange` | Declared on the type; **not** wired into `TickUpStage` today. | — | Use imperative `fitVisibleRangeToData` / pan or load data first; visible range is derived after mount. |
| `chartOptions` | `DeepPartial<ChartOptions>` | Visual + behavior options (merged with defaults). | Internal empty stable ref | Partial deep merge. |
| `showSidebar` | `boolean` | Drawing tools sidebar. | Product default | **Ignored** when `productId` is set. |
| `showTopBar` | `boolean` | Top symbol/toolbar row. | Product default | **Ignored** when `productId` is set. |
| `showSettingsBar` | `boolean` | Settings gear entry. | Product default | **Ignored** when `productId` is set. |
| `onRefreshRequest` | `() => void \| Promise<void>` | User tapped Refresh in settings toolbar. | — | Hook your data reload. |
| `symbol` | `string` | Controlled toolbar symbol. | — | Pair with `onSymbolChange`. |
| `defaultSymbol` | `string` | Initial symbol if uncontrolled. | — | Shown in strip / top bar. |
| `onSymbolChange` | `(s: string) => void` | Symbol changed. | — | — |
| `onSymbolSearch` | `(s: string) => …` | User submitted search; return `false` to revert. | — | Async allowed. |
| `productId` | `TickUpProductId` | Locks layout: pulse / flow / command / desk / prime. | — | Omit for custom chrome flags. |
| `showAttribution` | `boolean` | In-chart “Powered by” watermark. | `true` (forced on Desk) | Branding policy. |
| `licenseKey` | `string \| null` | Prime tier license string. | `null` | **`TickUpPrimeTier` only** (evaluation strip if invalid). |
| `licenseUserIdentifier` | `string \| null` | User id for license pairing. | `null` | Prime tier. |
| `licenseValidationOverride` | `boolean` | Skip/fake validation (testing). | — | Use only in controlled tests. |
| `themeVariant` | `ChartTheme` | Controlled shell light / dark / grey. | — | Must update when `onThemeVariantChange` fires. |
| `defaultThemeVariant` | `ChartTheme` | Uncontrolled initial shell theme. | **`light`** | — |
| `onThemeVariantChange` | `(v: ChartTheme) => void` | Toolbar theme toggle. | — | — |
| `interval` | `string` | Controlled timeframe (e.g. `5m`). | — | — |
| `onIntervalChange` | `(tf: string) => void` | Timeframe changed. | — | — |
| `onIntervalSearch` | `(tf: string) => …` | Load data for new TF; return `false` on failure. | — | — |
| `range` | `RangeKey` (see `tickup/full`) | Controlled range key (`1D`, `5D`, `1M`, …). | — | Host typings may use `any`; prefer `RangeKey` in your app. |
| `onRangeChange` | `(r: RangeKey) => void` | Range changed. | — | — |
| `initialRange` | `RangeKey` | Initial range if uncontrolled. | — | — |

---

## `ChartTheme`: shell vs plot

**Enum:** `light` \| `dark` \| `grey` (`src/types/types.ts`).

| Where | What it controls |
|-------|------------------|
| **`themeVariant` / `defaultThemeVariant` (host props)** | **Shell:** `GlobalStyle` page background, settings modal chrome, toolbar sun/moon toggle, prime evaluation strip styling. **`dark`** uses a dark page background; **`grey`** and **`light`** use a light page background in the current host. |
| **`chartOptions.base.theme`** | **Plot intent:** merged into `finalStyleOptions` as the chart’s nominal theme key. User-defined `base.style` colors (candles, grid, axes, …) define what is actually painted on the canvas when the shell is **`light`**. |
| **Shell not `light`** | **Plot override:** when `themeVariant` is **`dark`** or **`grey`**, `TickUpHost` **deep-merges** a dark palette over `chartOptions` before passing options to the stage (dark canvas background, lighter axis text, adjusted grid/candle border). So non-light shells force a **dark chart surface** even if `base.theme` was `light`. |

Use **`chartOptions.base.style`** to fine-tune the canvas after you understand the shell merge above.

---

## `chartOptions.base`

Merged onto **`DEFAULT_GRAPH_OPTIONS.base`**. **Omitted** fields keep library defaults.

| Field | Type | Purpose | Default (merged) | Standard Tier |
|-------|------|---------|------------------|---------------|
| `chartType` | `ChartType` enum | `Candlestick` \| `Line` \| `Area` \| `Bar`. | `Candlestick` | — |
| `engine` | `TickUpRenderEngine` | Render **style** profile. | `standard` | Does not remove data caps by itself. |
| `theme` | `ChartTheme` | Plot theme key carried in options; interacts with shell as above. | `light` | — |
| `showOverlayLine` | `boolean` | Draw indicator overlay lines. | `false` | Max **3** studies. |
| `showHistogram` | `boolean` | Volume histogram pane under the main plot. | `true` | — |
| `showCrosshair` | `boolean` | Crosshair lines on hover. | `true` | — |
| `showCrosshairValues` | `boolean` | Numeric labels on crosshair. | `false` | — |
| `showCandleTooltip` | `boolean` | OHLC tooltip on hover. | `true` | — |
| `style` | `StyleOptions` (partial) | Colors, fonts, grid, overlay/drawing styles. | See below | — |
| `overlays` | `OverlayWithCalc[]` | Fully specified overlay series + style. | `[]` | Max **3** entries; uses **5,000**-bar window. |
| `overlayKinds` | `(OverlayKind \| OverlayCalcSpec)[]` | Declarative indicators (SMA, EMA, VWAP, …). | `[]` | Max **3** entries. |

---

## `chartOptions.axes`

| Field | Type | Purpose | Default (merged) | Notes |
|-------|------|---------|------------------|-------|
| `yAxisPosition` | `AxesPosition` | `left` \| `right`. | `left` | Price axis side. |
| `currency` | `string` | Default currency code for formatting. | `'USD'` | — |
| `numberOfYTicks` | `number` | How many **horizontal price grid lines** (and matching Y tick labels) the layout targets. | `5` | Does not include axis padding lines; engine may nudge for readability. |

---

## `chartOptions.base.style` — top level

| Field | Type | What it paints | Default (merged) |
|-------|------|----------------|------------------|
| `showGrid` | `boolean` | Master switch for **price/time grid lines** drawn across the main plot (independent of histogram). | `true` |
| `backgroundColor` | `string` | **Main plot + histogram** canvas fill behind candles/lines/drawings. | `#ffffff` |
| `candles` | `CandleStyleOptions` | **Candlestick** bodies, wicks, and horizontal spacing in the slot. | See table below |
| `line` | `LineStyleOptions` | **Line chart** mode: stroke of the closing-price polyline. | Blue defaults |
| `area` | `AreaStyleOptions` | **Area chart** mode: fill under the line + outline stroke. | Blue defaults |
| `histogram` | `HistogramStyleOptions` | **Volume pane** columns (height, color by direction, opacity). | Green/red defaults |
| `bar` | `BarStyleOptions` | **OHLC bar** mode: vertical segments and colors per direction. | Green/red defaults |
| `grid` | `GridStyleOptions` | **Grid line** appearance (color, thickness, dash, nominal pixel spacing between lines). | Light grey |
| `overlay` | `OverlayOptions` | **Default stroke** for computed indicators when a row does not override style. | Orange solid |
| `axes` | `AxesStyleOptions` | **X/Y tick labels**, axis baseline strokes, number/time formatting, sessions. | See table below |
| `drawings` | `DrawingStyleOptions` | **User shapes** (lines, fibs, …) and **selection halo**. | Blue / orange selection |

---

## `style.axes` (`AxesStyleOptions`)

| Field | Type | What it paints | Default |
|-------|------|----------------|---------|
| `axisPosition` | `AxesPosition` | Internal mirror of price axis side (kept in sync with `chartOptions.axes`). | `left` |
| `textColor` | `string` | **Numeric date/price labels** on both axes. | `#424242` |
| `font` | `string` | **Font** for those labels (CSS shorthand). | `12px Arial` |
| `lineColor` | `string` | **Baseline** of X and Y axes (the rules at the plot edge). | `#9e9e9e` |
| `lineWidth` | `number` | **Stroke width** of those axis baselines. | `1` |
| `locale` | `string` | **Intl** locale for numbers/dates. | `en-US` |
| `language` | `string` | Language tag for higher-level formatting. | `en` |
| `numberFractionDigits` | `number` | Default **decimal places** on price ticks. | `2` |
| `decimalSeparator` | `string` | **Decimal** character in prices. | `.` |
| `thousandsSeparator` | `string` | **Grouping** character in prices. | `,` |
| `dateFormat` | `string` | **Time axis** label pattern. | `MMM d` |
| `numberNotation` | `NumberNotation` | `standard` \| `scientific` \| `compact` for large/small magnitudes. | `standard` |
| `currency` | `string` | **ISO currency** when currency display is on. | `USD` |
| `useCurrency` | `boolean` | Whether to **prefix/suffix** currency on axis prices. | `false` |
| `currencyDisplay` | `CurrencyDisplay` | **Symbol vs code vs name** for currency. | `symbol` |
| `minimumFractionDigits` | `number` | **Floor** on decimal digits. | `2` |
| `maximumFractionDigits` | `number` | **Ceiling** on decimal digits. | `8` |
| `maximumSignificantDigits` | `number` | **Cap** on significant figures. | `21` |
| `tickSize` | `number` | **Price step** hint for snapping/labeling. | `0.01` |
| `autoPrecision` | `boolean` | Let the formatter **expand precision** when needed. | `false` |
| `unit` | `string` | **Arbitrary suffix/prefix** (e.g. `%`, `bps`) via `unitPlacement`. | `''` |
| `unitPlacement` | `AxesUnitPlacement` | **Before or after** the numeric tick text. | `suffix` |
| `timezone` | `string` | **IANA TZ** for session shading and tooltips. | `UTC` |
| `exchange` | `string` | **Display-only** venue label in chrome/tooltip contexts. | `''` |
| `tradingSessions` | `TradingSession[]` | **Weekly windows** used when shading session hours on the time axis. | `[]` |
| `holidays` | `string[]` | **ISO dates** skipped or styled as closed. | `[]` |
| `displayCurrency` | `string` | **Secondary currency** label path when converting display. | `USD` |
| `conversionRate` | `number` | **Rate** applied for display conversion. | `1` |

*(If a field is absent in your partial `chartOptions`, the merged default from `DefaultData` applies.)*

---

## `style.candles` (`CandleStyleOptions`)

| Field | Type | What it paints | Default |
|-------|------|----------------|---------|
| `bullColor` | `string` | **Body fill** when close ≥ open (bullish). | `#26a69a` |
| `bearColor` | `string` | **Body fill** when close < open (bearish). | `#ef5350` |
| `upColor` | `string` | **Alias** for bullish tone (some code paths use `bullColor` / `upColor` together). | `#26a69a` |
| `downColor` | `string` | **Alias** for bearish tone. | `#ef5350` |
| `borderColor` | `string` | **Wick and body outline** stroke. | `#333333` |
| `borderWidth` | `number` | **Outline width** in pixels for wick/body edges. | `1` |
| `bodyWidthFactor` | `number` | **Body width** as a fraction of the bar slot (0–1 scale); lower = thinner candle. | `0.6` |
| `spacingFactor` | `number` | **Gap** between adjacent candles as a fraction of the slot; higher = more air between bodies. | `0.2` |

---

## `style.line` (`LineStyleOptions`)

| Field | Type | What it paints | Default |
|-------|------|----------------|---------|
| `color` | `string` | **Stroke color** of the line series through `(time, close)` points. | `#2962ff` |
| `lineWidth` | `number` | **Stroke width** of that polyline in pixels. | `2` |

---

## `style.area` (`AreaStyleOptions`)

| Field | Type | What it paints | Default |
|-------|------|----------------|---------|
| `fillColor` | `string` | **Interior fill** from the line down to the bottom of the plot. | `rgba(41, 98, 255, 0.2)` |
| `strokeColor` | `string` | **Top edge** stroke along the same path as the line series. | `rgba(41, 98, 255, 1)` |
| `lineWidth` | `number` | **Width** of that top edge stroke. | `2` |

---

## `style.histogram` (`HistogramStyleOptions`)

| Field | Type | What it paints | Default |
|-------|------|----------------|---------|
| `bullColor` | `string` | **Volume bar fill** when close ≥ open. | `#26a69a` |
| `bearColor` | `string` | **Volume bar fill** when close < open. | `#ef5350` |
| `opacity` | `number` | **Alpha** of histogram columns (0–1). | `0.5` |
| `heightRatio` | `number` | **Max column height** as a fraction of the histogram pane height. | `0.3` |

---

## `style.bar` (`BarStyleOptions`)

| Field | Type | What it paints | Default |
|-------|------|----------------|---------|
| `bullColor` | `string` | **OHLC bar** color when close ≥ open. | `#26a69a` |
| `bearColor` | `string` | **OHLC bar** color when close < open. | `#ef5350` |
| `opacity` | `number` | **Alpha** for bar segments. | `0.7` |

---

## `style.grid` (`GridStyleOptions`)

| Field | Type | What it paints | Default |
|-------|------|----------------|---------|
| `color` | `string` | **Legacy** grid stroke color (still honored where readers fall back to it). | `#e0e0e0` |
| `lineWidth` | `number` | **Thickness** of horizontal and vertical grid rules. | `1` |
| `gridSpacing` | `number` | **Target pixel spacing** between adjacent grid lines; the engine snaps to “nice” values from this hint. | `50` |
| `lineColor` | `string` | **Preferred** grid line color on new drawing paths. | `#e0e0e0` |
| `lineDash` | `number[]` | **Canvas `setLineDash`** pattern; empty = solid lines. | `[]` |

---

## `style.overlay` (`OverlayOptions`)

Default **indicator line** stroke when an `OverlayWithCalc` row does not specify its own options.

| Field | Type | What it paints | Default |
|-------|------|----------------|---------|
| `lineColor` | `string` | **Stroke** of SMA/EMA/Bollinger/price overlays. | `#ff9800` |
| `lineWidth` | `number` | **Width** of those strokes. | `1` |
| `lineStyle` | `StrokeLineStyle` | `solid` \| `dashed` \| `dotted` canvas dash style. | `solid` |

---

## `style.drawings` (`DrawingStyleOptions`)

| Field | Type | What it paints |
|-------|------|----------------|
| `lineColor` | `string` | **Default stroke** for new user drawings (trend lines, channels, …). |
| `lineWidth` | `number` | **Default stroke width** for new shapes. |
| `lineStyle` | `StrokeLineStyle` | **Dash style** for new shapes. |
| `fillColor` | `string` | **Default fill** for closed shapes (rectangles, circles) where applicable. |
| `selected` | `object` | **Highlight** when a shape is active: `lineColor` (accent outline), `lineWidthAdd` (extra px on top of base width), `lineStyle`, optional `fillColor`. |

---

## Overlays: `OverlayKind`, `OverlayPriceKey`, and `OverlayCalcSpec`

**Price source enum `OverlayPriceKey`:** `close` \| `open` \| `high` \| `low` — which OHLC field feeds the calculation.

**Indicator enum `OverlayKind`:** `sma` \| `ema` \| `wma` \| `vwap` \| `bbands_mid` \| `bbands_upper` \| `bbands_lower`.

### `OverlayCalcSpec` (discriminated union on `kind`)

| `kind` | Configurable parameters | What it computes |
|--------|-------------------------|------------------|
| `close`, `open`, `high`, `low` | None (the kind **is** the price field). | **Raw price series** for that field, aligned 1:1 with bars. |
| `sma`, `ema`, `wma` | **`period`** (number of bars). **`price`** optional — defaults to **`close`**. | **Moving average** over `price` with the given length. |
| `vwap` | None. | In **TickUp Core**, VWAP is a **placeholder** (no computed line in Standard Tier); use Prime or external series if you need VWAP. |
| `bbands_mid` | **`period`**. **`price`** optional — defaults to **`close`**. | **Middle band** = SMA(`period`, `price`). |
| `bbands_upper` | **`period`**. **`stddev`** optional — defaults to **`2`**. **`price`** optional — defaults to **`close`**. | **Upper band** = mid + `stddev` × rolling standard deviation. |
| `bbands_lower` | Same as upper. | **Lower band** = mid − `stddev` × rolling standard deviation. |

**`overlayKinds` shorthand defaults** (when you pass a string kind without a full spec): SMA/EMA/WMA use **`period: 20`**, **`price: close`**. Bollinger rows use **`period: 20`**, **`stddev: 2`**, **`price: close`**.

### `OverlayWithCalc` (entries in `base.overlays`)

| Field | Type | Role |
|-------|------|------|
| `calc` | `OverlayCalcSpec` | **Math** for the series (see table above). |
| `lineColor`, `lineWidth`, `lineStyle` | overlay style | **Stroke** for this series (override `style.overlay`). |
| `connectNulls` | `boolean` optional | If true, **bridge across `null`** samples with a line; if false, gaps break the stroke. |
| `useCenterX` | `boolean` optional | If true, plot points at **bar center**; if false, use the **leading edge** convention. |

All overlays consume the same **5,000**-bar window as the chart. Live updates on Standard shells are still subject to the **~1 Hz** merge throttle (see [Data & live updates](./07-data-and-live-updates.md)).

---

## Imperative handle (`TickUpHostHandle`)

Not **props**, but the **`ref`** API: `addShape`, `applyLiveData`, `getViewInfo`, `setEngine`, etc. **`applyLiveData`** respects Standard Tier **clamping** and **throttling**. See [Imperative API](./06-imperative-api.md).

---

## Performance & troubleshooting (Standard Tier)

| Symptom | Likely cause |
|---------|----------------|
| Series length never exceeds **5,000** | **Expected:** Standard Tier trims history client-side. |
| Live updates “stutter” or arrive ~once per second | **Expected:** **~1 Hz** throttle on Standard shells; Prime license can opt out. |
| Indicators disappear after adding a fourth | **Expected:** **3** overlay cap; extras dropped with toast. |

More: [Interval schema & debugging](./17-interval-schema-and-debugging.md), [Comparison showcase](./18-comparison-showcase.md).

---

## Tier comparison: TickUp Prime

For WebGL throughput, deep history, and unlimited overlays, see **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** and the **[showcase](https://bardamri.github.io/tickup-charts/)**.
