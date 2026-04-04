# Installation

**First time integrating?** Follow the step-by-step **[Getting started — Grand Tour](./00-getting-started.md)** (project setup + Hello World), then return here for peer details.

## Requirements

- **React** 18 or 19  
- **react-dom** 18 or 19  
- **styled-components** 6.x  

These are **peer dependencies**; your app must install them.

## npm (open-source package)

```bash
npm install tickup
```

With peers in one command:

```bash
npm install tickup react react-dom styled-components
```

The **`tickup`** package on npm is **TickUp Core** (Standard Edition, MIT).

## TypeScript

Types ship with the package (`dist/index.d.ts`). Enable `strict` as usual; import types from `tickup` or `tickup/full`.

## Bundler notes

- **ESM** — `tickup` → `dist/tickup.es.js` (per your build config)  
- **CJS** — `dist/tickup.cjs.js`  

Vite, Webpack, and Next.js usually resolve the correct format automatically.

## Styled-components

TickUp uses styled-components for layout and themed UI. Your app can use a global `ThemeProvider`; TickUp does not require a specific theme object for its internal styled components.

## Verify

```tsx
import { TickUpCommand } from 'tickup/full';

export function SmokeTest() {
  return <TickUpCommand style={{ height: 400 }} intervalsArray={[]} />;
}
```

See [Quick start](./03-quick-start.md) for a full data example.

---

## Tier comparison: TickUp Prime

**TickUp Prime** is a **separate** commercial product. Documentation and install paths are on **[github.com/BARDAMRI/tickup-prime](https://github.com/BARDAMRI/tickup-prime)**. Try the **[showcase](https://bardamri.github.io/tickup-charts/)** before committing.
