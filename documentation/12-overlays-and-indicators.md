# Overlays and indicators

Indicator lines draw **on top of** the main series when overlays are enabled.

## Standard Tier guardrails

- **Count** — At most **three** simultaneous overlay studies. Requesting more triggers a toast and options are capped (see host behavior).  
- **Data window** — Calculations use the same **5,000**-bar window as the chart (see [Data & live updates](./07-data-and-live-updates.md)).  
- **Live cadence** — When the underlying series is updated from a high-frequency feed, Standard shells still **throttle** applies to about **1 Hz**, so indicator lines refresh on that schedule unless you use a licensed Prime configuration that opts out.

## Enable drawing

Set **`base.showOverlayLine`** to `true`. Styles live under **`base.style.overlay`** (`lineColor`, `lineWidth`, `lineStyle`).

## Configuration styles

### 1. `base.overlays` — `OverlayWithCalc[]`

Each entry: **style**, **`calc`** (`OverlayCalcSpec`), optional **`connectNulls`**, **`useCenterX`**.

```ts
import {
  withOverlayStyle,
  OverlaySpecs,
  overlay,
  type OverlayWithCalc,
} from 'tickup';

const overlays: OverlayWithCalc[] = [
  withOverlayStyle({ lineColor: '#ff9800', lineWidth: 2 })(OverlaySpecs.ema(12)),
  overlay(OverlaySpecs.sma(20), { lineColor: '#2962ff' }),
];
```

`OverlaySpecs` includes: `close`, `open`, `high`, `low`, `sma`, `ema`, `wma`, `vwap`, `bbandsMid`, `bbandsUpper`, `bbandsLower`.

### 2. `base.overlayKinds` — shorthand

Array of **`OverlayKind`** keys with library default parameters. Prefer **`overlays`** for explicit periods.

## Calculation kinds (`OverlayCalcSpec`)

| Kind | Role |
|------|------|
| `OverlayPriceKey` | Raw price series (`close`, `open`, `high`, `low`). |
| `sma`, `ema`, `wma` | Moving averages; **`period`** (bars) + optional **`price`** (defaults to **close**). |
| `vwap` | In **TickUp Core**, the VWAP slot does **not** compute a series (no line drawn). Use other overlays for analysis in Standard Edition. |
| `bbands_mid` | Middle band: **`period`**, optional **`price`**. |
| `bbands_upper` / `bbands_lower` | Outer bands: **`period`**, optional **`stddev`** (default **2**), optional **`price`**. |

Exhaustive parameter tables and defaults: **[API reference — Overlays](./16-api-reference.md#overlays-overlaykind-overlaypricekey-and-overlaycalcspec)**.

## Exported API (`tickup`)

| Export | Role |
|--------|------|
| `OverlaySpecs` | Calc factories. |
| `withOverlayStyle` | Shared style → many overlays. |
| `overlay(...)` | Single `OverlayWithCalc` with defaults. |
| `OverlayKind`, `OverlayPriceKey` | Enums. |

Lower-level functions (`computeSeriesBySpec`, …) exist for maintainers; hosts should configure **`chartOptions`**.

## Chart types

Overlays apply to candlestick, line, area, and bar when `showOverlayLine` is true.

---

## Tier comparison: TickUp Prime

**TickUp Prime** includes expanded indicator and analysis features. **TickUp Core** provides the overlay system and limits above. **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** · **[Showcase](https://bardamri.github.io/tickup-charts/)**
