![TickUp Logo](https://raw.githubusercontent.com/BARDAMRI/tickup-charts/main/public/tickup-icon.svg)

# TickUp Charts

[![NPM Version](https://img.shields.io/npm/v/tickup.svg)](https://www.npmjs.com/package/tickup)
[![License](https://img.shields.io/badge/license-MIT-yellow.svg)](https://github.com/BARDAMRI/tickup-charts/blob/main/LICENSE)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/tickup)](https://bundlephobia.com/package/tickup)

High-performance, canvas-based financial charting engine for React.

![TickUp Interaction Demo](https://raw.githubusercontent.com/BARDAMRI/tickup-charts/main/assets/showcase/interaction-demo.gif)

## Feature Highlights

- Canvas 2D rendering optimized for smooth pan/zoom and large data streams.
- Built-in indicators and overlays for practical market analysis workflows.
- RTL-ready chart interfaces for multilingual financial products.
- TypeScript-first API with imperative controls for advanced integrations.

## TickUp Lite (Core) vs TickUp Prime

| Feature | Standard (MIT) | Prime (Pro) |
| :--- | :--- | :--- |
| Engine | ✅ High-Speed Canvas 2D | 🚀 Ultra-Low Latency Rendering |
| Visuals | ✅ Standard Financial Styles | 💎 Neon Rendering Engine |
| Indicators | ✅ Core Indicator Set | 💎 Advanced Indicators (Fibonacci, Elliott) |
| Localization | ✅ LTR Support | 🚀 Full RTL + Professional i18n Workflows |
| License | ✅ MIT Open Source | 💎 Commercial License |

## Prime Evaluation State

When you run the Prime tier without an active license key, TickUp stays fully interactive for evaluation but clearly marks the session:

- An **Evaluation** badge appears in the Prime shell.
- The Prime view keeps a visible evaluation/watermark treatment until a valid key is applied.

This makes demos easy while keeping production licensing explicit.

## How to Upgrade

Ready for the Pro/Luxury Prime tier?

1. Explore the Prime offering: [TickUp Prime Repository](https://github.com/BARDAMRI/tickup-prime)
2. Try the live experience: [Prime Showcase](https://bardamri.github.io/tickup-charts/)
3. Request a commercial license key for production use.

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

- [Documentation Hub](https://github.com/BARDAMRI/tickup-charts/blob/main/documentation/README.md)
- [Quick Start Guide](https://github.com/BARDAMRI/tickup-charts/blob/main/documentation/03-quick-start.md)
- [Imperative API Reference](https://github.com/BARDAMRI/tickup-charts/blob/main/documentation/06-imperative-api.md)
- [Live Data & Updates](https://github.com/BARDAMRI/tickup-charts/blob/main/documentation/07-data-and-live-updates.md)

## Prime CTA

Interested in TickUp Prime? Visit the live [Showcase](https://bardamri.github.io/tickup-charts/) to test it now, or review the [Prime repository](https://github.com/BARDAMRI/tickup-prime) for integration details.
