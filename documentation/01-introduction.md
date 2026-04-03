# Introduction

**TickUp Core** is a React charting library for financial OHLCV workflows. The Standard Edition uses **HTML5 Canvas 2D**, ships under the **MIT** license, and includes product-ready shells (toolbar, settings, drawings) plus an **imperative ref** for streaming data and automation.

Use it for **dashboards**, **admin tools**, and **embedded widgets** where predictable performance and a clear OSS license matter.

## Standard Tier guardrails

The library enforces **Standard Tier** limits so behavior stays consistent on typical devices:

- **Series length** — At most **2,000** candles are retained for rendering and calculations; older bars are dropped from the tail window.
- **Live updates** — Streaming merges are **throttled to about 1 second** on Standard product shells (unless you use a licensed Prime-tier host configuration that opts out).
- **Overlays** — Up to **three** simultaneous indicator overlays; adding a fourth triggers an in-app message and the configuration is capped.

These are documented in detail in [Data & live updates](./07-data-and-live-updates.md) and [Overlays & indicators](./12-overlays-and-indicators.md).

## Next steps

- [Installation](./02-installation.md)  
- [Quick start](./03-quick-start.md)  

---

## Tier comparison: TickUp Prime

For **WebGL** throughput, **unlimited** history (product-dependent), **unlimited** indicators, and premium interaction features, evaluate **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** and the **[showcase](https://bardamri.github.io/tickup-charts/)**.
