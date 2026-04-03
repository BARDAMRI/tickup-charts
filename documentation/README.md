# TickUp Core documentation

Integration guides for **TickUp Core** (Standard Edition): the MIT open-source React charting library shipped as the **`tickup`** npm package.

## Package entries

- **`tickup`** — `TickUpStage`, types, overlays, live-data helpers, and drawing utilities.
- **`tickup/full`** — Product shells (`TickUpCommand`, `TickUpHost`, …), extended exports, and optional engine profile types for advanced setups.

Published tarballs include this **`documentation/`** folder and sibling **`legal/`** templates (see root **`package.json`** **`files`**). Type declarations ship under **`dist/*.d.ts`**.

The **example app** in [`../example/`](../example/) (Vite + React) demonstrates hosts, `chartOptions`, and the imperative ref API; it is **not** published to npm.

## Contents

| # | Guide | Description |
|---|--------|-------------|
| 1 | [Introduction](./01-introduction.md) | Scope of TickUp Core (Standard Tier) |
| 2 | [Glossary](./01-glossary.md) | Intervals, ranges, products, placements |
| 3 | [Installation](./02-installation.md) | Peers, install, bundlers |
| 4 | [Quick start](./03-quick-start.md) | Minimal embed and data flow |
| 5 | [Products & layout](./04-products-and-layout.md) | Pulse, Flow, Command, Desk |
| 6 | [Props & chart options](./05-props-and-chart-options.md) | `TickUpHost`, `chartOptions` |
| 7 | [Imperative API](./06-imperative-api.md) | Ref handle: data, view, drawings |
| 8 | [Data & live updates](./07-data-and-live-updates.md) | `intervalsArray`, `applyLiveData`, guardrails |
| 9 | [Drawings & shapes](./08-drawings-and-shapes.md) | Toolbar tools and programmatic shapes |
| 10 | [Settings modal](./09-settings-modal.md) | In-app settings categories |
| 11 | [Toolbar & interactions](./10-toolbar-and-interactions.md) | Symbol strip, pan/zoom, snapshot |
| 12 | [Exports & advanced](./11-exports-and-advanced.md) | Public export surface |
| 13 | [Overlays & indicators](./12-overlays-and-indicators.md) | Standard Tier overlays |
| 14 | [i18n & axes](./13-internationalization-and-axes.md) | Locale, RTL, sessions |
| 15 | [Legal & policies](./14-legal-and-policies.md) | Policy templates in `legal/` |

Legacy notes may appear under [`../docs/`](../docs/). **Authoritative integration reference** is this folder.

---

## Tier comparison: TickUp Prime

**TickUp Core** (this package) is the **Standard Edition**: Canvas 2D, a **2,000**-candle cap, **1 Hz** live-update throttling on Standard shells, and **three** overlay indicators. For WebGL rendering, unlimited history, and expanded tooling, see **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** and the **[live showcase](https://bardamri.github.io/tickup-charts/)**.
