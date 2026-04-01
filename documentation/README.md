# TickUp Charts documentation

Complete guides for integrating and operating the TickUp Charts React charting library.

The **npm package** has **`tickup`** (default — `TickUpStage` and chart helpers) and **`tickup/full`** (e.g. `TickUpCommand`, `TickUpHost`, extended exports). Product-focused guides import from **`tickup/full`**.

Published tarballs **include this `documentation/` folder** and the sibling **`legal/`** policy templates (see root `package.json` **`files`**) so links in **[14-legal-and-policies.md](./14-legal-and-policies.md)** resolve under `node_modules/tickup/`. Type declarations ship in **`dist/*.d.ts`**. This documentation covers the open-source core package.

The **reference example app** in [`../example/`](../example/) (Vite + React) exercises all product tiers, `chartOptions`, the compact symbol strip on Pulse, host symbol callbacks, and the imperative ref API; see [`../example/README.md`](../example/README.md). The example app itself is **not** published to npm.

## Contents

| # | Guide | Description |
|---|--------|-------------|
| 1 | [Introduction](./01-introduction.md) | Overview, package scope, and Prime upgrade path |
| 2 | [Glossary](./01-glossary.md) | Terms: intervals, ranges, products, placements, etc. |
| 3 | [Installation](./02-installation.md) | Peer dependencies, package install, styled-components |
| 4 | [Quick start](./03-quick-start.md) | Minimal embed, ref, controlled data |
| 5 | [Products & layout](./04-products-and-layout.md) | Pulse, Flow, Command, Desk; toolbars (public line) |
| 6 | [Props & chart options](./05-props-and-chart-options.md) | `TickUpHost`, `chartOptions`, shell theme + chart theme |
| 7 | [Imperative API](./06-imperative-api.md) | Ref handle: shapes, data, **`getVisibleRanges()`**, **`getCanvasSize()`**, view, context |
| 8 | [Data & live updates](./07-data-and-live-updates.md) | `intervalsArray`, `applyLiveData`, merge helpers |
| 9 | [Drawings & shapes](./08-drawings-and-shapes.md) | Toolbar tools, select/edit, programmatic shapes & patches |
| 10 | [Settings modal](./09-settings-modal.md) | In-app settings categories and persistence |
| 11 | [Toolbar & interactions](./10-toolbar-and-interactions.md) | Chart type, snapshot, crosshair, tooltip, pan/zoom |
| 12 | [Exports & advanced](./11-exports-and-advanced.md) | Full export list, `TickUpStage`, branding, init/update |
| 13 | [Overlays & indicators](./12-overlays-and-indicators.md) | SMA/EMA/VWAP/Bollinger, `overlays` / `overlayKinds` |
| 14 | [i18n & axes](./13-internationalization-and-axes.md) | Locale, RTL, currency, sessions, grid |
| 15 | [Legal & policies](./14-legal-and-policies.md) | Terms of Service, Privacy, Acceptable Use templates (`legal/`) |

## Older material

Additional notes and legacy pages may still live under [`../docs/`](../docs/) (roadmap, contributing, design). The **authoritative integration reference** is this `documentation/` folder.

### Pro Tip

Use this docs hub for core integration, then evaluate TickUp Prime for teams that require premium rendering profiles and commercial-grade analysis workflows.

### Prime Showcase

[Explore the TickUp Prime Showcase](https://bardamri.github.io/tickup-charts/)
