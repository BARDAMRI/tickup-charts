![TickUp Logo](https://raw.githubusercontent.com/BARDAMRI/tickup-charts/main/public/tickup-icon.svg)

# TickUp Charts

[![NPM Version](https://img.shields.io/npm/v/tickup.svg)](https://www.npmjs.com/package/tickup)
[![License](https://img.shields.io/badge/license-MIT-yellow.svg)](https://github.com/BARDAMRI/tickup-charts/blob/main/LICENSE)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/tickup)](https://bundlephobia.com/package/tickup)

## Standard Edition vs TickUp Prime (Pro)

| | **TickUp Core (Standard Edition)** | **TickUp Prime (Pro)** |
| :--- | :--- | :--- |
| **Rendering** | HTML5 Canvas 2D | WebGL 2.0 |
| **Live updates** | 1 Hz (1 second) throttling | ~60 FPS pipeline |
| **History depth** | Up to **5,000** candles (generous Standard cap) | Unlimited (product-dependent) |
| **Indicators** | Up to **3** overlays | Unlimited |
| **Advanced UX** | — | Magnetic snapping, VWAP Pro, premium visuals |
| **License** | MIT (this repo) | Commercial |

TickUp **Core** is the MIT **Standard Edition**: a production-quality charting stack for **dashboards**, **internal tools**, and **simple market UIs**. It uses a **generous but limited** history window (currently **5,000** candles) so performance stays predictable while Prime remains the path for boundless scale.

**Power users** and **trading-grade products** should evaluate **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** for WebGL throughput, deep history, and professional interaction tooling. Try it live in the **[Prime Showcase](https://bardamri.github.io/tickup-charts/)**.

![TickUp Interaction Demo](https://raw.githubusercontent.com/BARDAMRI/tickup-charts/main/assets/showcase/interaction-demo.gif)

## What you get in Standard Edition

- Canvas 2D OHLCV charts (candlestick, line, area, bar) with pan, zoom, crosshair, and drawings.
- TypeScript-first APIs and an imperative ref for live data and snapshots.
- **Standard Tier guardrails** built into the library: **5,000-bar** series cap, **1 Hz** live-update throttling (unless you use the licensed Prime shell path), and **three** simultaneous overlay indicators—with clear in-app messaging when a limit applies.
- “**Powered by TickUp**” attribution enforced in Standard layouts (visibility guarded in the host).

## Why upgrade to Prime?

- You need **more than 5,000** bars, **faster** than 1 Hz updates, or **more than three** studies without caps.
- You want **WebGL**-class density and Prime-only interaction and analysis features.

## How to upgrade

1. Read the **[TickUp Prime documentation](https://github.com/BARDAMRI/tickup-prime)**.
2. Explore the **[Prime Showcase](https://bardamri.github.io/tickup-charts/)**.
3. Use the **[Prime repository](https://github.com/BARDAMRI/tickup-prime)** for licensing and integration.

## Prime evaluation (separate product)

The **`TickUpPrimeTier`** shell in this package is for **evaluating** the Prime product shape: evaluation chrome when no license key is set. **Standard Tier guardrails** in this open-source core (including the **5,000**-candle cap) still apply to data throughput and indicator counts unless you run against a fully licensed Prime deployment.

## Pricing & Licensing

| Plan | License | Best For | Price |
| :--- | :--- | :--- | :--- |
| Community | MIT | Open Source & Hobby Projects | Free |
| Professional | Commercial | Solo Founders & Small Teams | $99/yr |
| Enterprise | Custom | HFT Platforms, Brokerages, and Banks | Contact |

## Quick Start

```bash
npm install tickup react react-dom styled-components
```

```tsx
import { TickUpStage } from 'tickup';

export function App() {
  return <TickUpStage intervalsArray={[]} />;
}
```

## Documentation

- **[Getting started — Grand Tour](./documentation/00-getting-started.md)** — Install from scratch + copy-paste Hello World (no prior charting experience assumed).
- **[Documentation hub](./documentation/README.md)** — Full index (guides 00–18).
- **[API reference](./documentation/16-api-reference.md)** — `TickUpHost` props, `TickUpRenderEngine`, and `chartOptions` tables.
- **[OHLC schema & debugging](./documentation/17-interval-schema-and-debugging.md)** — Data format and common “chart not showing” fixes.
- **[Comparison showcase](./documentation/18-comparison-showcase.md)** — **`#/compare`** to audit Core vs Prime before choosing a tier.
- [Quick start](./documentation/03-quick-start.md) · [Imperative API](./documentation/06-imperative-api.md) · [Data & live updates](./documentation/07-data-and-live-updates.md)

## TickUp Prime

Interested in **TickUp Prime**? Start with the **[Prime documentation](https://github.com/BARDAMRI/tickup-prime)** and try the **[Showcase](https://bardamri.github.io/tickup-charts/)**.

## Legacy support

**npm versions below `1.0.36` are deprecated and unsupported.** That line predates the current **Generous Standard** architecture (clean **TickUp Core** vs **Prime** separation, documented Standard Tier guardrails, and security fixes). Do not build new integrations on older tarballs.

**Standard Tier stability:** From **1.0.36** onward, the **5,000-bar** history cap and the **~1 Hz** live-update throttle on Standard shells are **mandatory** parts of the supported Standard Tier model—they keep dashboards predictable and are not optional “suggestions” for production use.

**Deprecate older releases on npm** (run while logged in as a maintainer; repeats are safe):

```bash
npm deprecate tickup@"< 1.0.36" "Legacy architecture. Please upgrade to v1.0.36+ for stable Core/Prime separation and security patches."
```

Optional: confirm what npm will match:

```bash
npm view tickup versions --json
```
