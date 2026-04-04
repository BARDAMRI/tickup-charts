# TickUp Core documentation

Integration guides for **TickUp Core** (Standard Edition): the MIT open-source React charting library published as the **`tickup`** npm package.

## Start here (zero-knowledge path)

1. **[Getting started — Grand Tour](./00-getting-started.md)** — Create a React app, install peers, copy-paste **Hello World**, learn the **5k / 1 Hz / 3 overlays** guardrails.  
2. **[Interval schema & debugging](./17-interval-schema-and-debugging.md)** — What **OHLC** means and how to fix a blank chart.  
3. **[API reference](./16-api-reference.md)** — Tables for **`TickUpHost` props**, **`TickUpRenderEngine`**, and **`chartOptions`**.  
4. **[Comparison showcase](./18-comparison-showcase.md)** — Using **`#/compare`** to audit Core vs Prime before you choose a tier.

---

## Package entries

- **`tickup`** — `TickUpStage`, types, overlays, live-data helpers, drawing utilities.  
- **`tickup/full`** — Product shells (`TickUpCommand`, `TickUpHost`, …), extended exports, engine-related types.

Published tarballs include this **`documentation/`** folder and sibling **`legal/`** templates (see root **`package.json`** **`files`**). Declarations ship under **`dist/*.d.ts`**.

The **example app** in [`../example/`](../example/) (Vite + React) demonstrates hosts, `chartOptions`, the imperative ref API, and the **comparison** route. It is **not** published to npm.

---

## All guides

| # | Guide | Description |
|---|--------|-------------|
| 0 | [Getting started](./00-getting-started.md) | Grand Tour: install, Hello World, guardrails |
| 1 | [Introduction](./01-introduction.md) | What Core is; doc map |
| — | [Glossary](./01-glossary.md) | Intervals, ranges, products, placements |
| 2 | [Installation](./02-installation.md) | Peers, npm, bundlers |
| 3 | [Quick start](./03-quick-start.md) | Minimal embed and data flow |
| 4 | [Products & layout](./04-products-and-layout.md) | Pulse, Flow, Command, Desk, Prime tier |
| 5 | [Props & chart options](./05-props-and-chart-options.md) | `TickUpHost`, `chartOptions` (narrative) |
| 6 | [Imperative API](./06-imperative-api.md) | Ref: data, view, drawings |
| 7 | [Data & live updates](./07-data-and-live-updates.md) | `intervalsArray`, `applyLiveData`, guardrails |
| 8 | [Drawings & shapes](./08-drawings-and-shapes.md) | Toolbar tools and programmatic shapes |
| 9 | [Settings modal](./09-settings-modal.md) | In-app settings categories |
| 10 | [Toolbar & interactions](./10-toolbar-and-interactions.md) | Symbol strip, pan/zoom, snapshot |
| 11 | [Exports & advanced](./11-exports-and-advanced.md) | Public export surface |
| 12 | [Overlays & indicators](./12-overlays-and-indicators.md) | Standard Tier overlays |
| 13 | [i18n & axes](./13-internationalization-and-axes.md) | Locale, RTL, sessions |
| 14 | [Legal & policies](./14-legal-and-policies.md) | Policy templates in `legal/` |
| 16 | [API reference](./16-api-reference.md) | **Master tables**: host props, engine enum, chart options |
| 17 | [Interval schema & debugging](./17-interval-schema-and-debugging.md) | OHLC, validation, common errors |
| 18 | [Comparison showcase](./18-comparison-showcase.md) | **`/compare`** performance audit |

Legacy notes may appear under [`../docs/`](../docs/). **Authoritative integration reference** is this folder.

### Reading on GitHub (light / dark)

These guides use **GitHub Flavored Markdown** (fenced code blocks with language tags, GFM tables). They remain readable in both **light** and **dark** GitHub themes.

---

## Tier comparison: TickUp Prime

**TickUp Core** is the **Standard Edition**: Canvas 2D, a **5,000**-candle cap, **~1 Hz** live-update throttling on Standard shells, and **three** overlay indicators. For WebGL, deep history, and expanded tooling, see **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** and the **[live showcase](https://bardamri.github.io/tickup-charts/)**.
