# Introduction

**TickUp Core** is a **React** library for **financial charts**: candlesticks, lines, areas, and bars built on **HTML5 Canvas 2D**. You pass **time-ordered price bars** (OHLC, optional volume); users **pan**, **zoom**, and use **toolbars**, **settings**, and **drawings** depending on which product component you choose.

This package is the **Standard Edition** (**MIT**). It is aimed at **dashboards**, **admin tools**, and **embedded widgets** where you want a **real chart**, not a screenshot, without building canvas math from scratch.

**Open source:** TickUp Core is developed in the open. If you use it, improve it, or teach others with it, consider **joining the effort**—documentation fixes, reproducible bug reports, and focused pull requests are all valuable. You do not need prior maintainer approval to **open an issue**; for anything sensitive or exploratory, **Bar Damri** is reachable at **[bardamri1702@gmail.com](mailto:bardamri1702@gmail.com)** ([bardamri.com](https://bardamri.com)). Public collaboration happens on **[GitHub](https://github.com/BARDAMRI/tickup-charts/issues)**. See **[Contributing](../CONTRIBUTING.md)** for how to run builds and propose changes.

**New here?** Start with the **[Getting started — Grand Tour](./00-getting-started.md)** (install from zero + Hello World).

---

## What TickUp does *not* assume

- You do **not** need prior experience with **TradingView**, **Lightweight Charts**, or other SDKs — only **React** and basic **JavaScript/TypeScript**.
- TickUp does **not** ship a data vendor: **you** load JSON/REST/WebSocket data and map it to **`Interval[]`**.
- TickUp does **not** replace your **risk** or **order** systems; it is a **visualization and interaction** layer.

---

## Standard Tier guardrails

The library enforces predictable behavior on typical hardware:

| Topic | Behavior |
|--------|-----------|
| **Series length** | At most **5,000** candles are kept; older bars drop from the tail. |
| **Live updates** | Standard shells **throttle** rapid merges to about **1 per second**. |
| **Overlays** | At most **three** simultaneous indicator overlays; a fourth is rejected with messaging. |

Details: [Data & live updates](./07-data-and-live-updates.md), [Interval schema & debugging](./17-interval-schema-and-debugging.md).

---

## Documentation map

| If you want to… | Read |
|-----------------|------|
| Install and render your first chart | [Getting started](./00-getting-started.md) |
| Look up every host prop and chart field | [API reference](./16-api-reference.md) |
| Understand OHLC and fix blank charts | [Interval schema & debugging](./17-interval-schema-and-debugging.md) |
| Compare Core vs Prime in the browser | [Comparison showcase](./18-comparison-showcase.md) |
| Use the ref for streaming | [Imperative API](./06-imperative-api.md) |

---

## Tier comparison: TickUp Prime

For **WebGL** throughput, **unlimited** history (product-dependent), **unlimited** indicators, and premium workflows beyond the **5,000**-candle Standard baseline, evaluate **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** and the **[showcase](https://bardamri.github.io/tickup-charts/)**.
