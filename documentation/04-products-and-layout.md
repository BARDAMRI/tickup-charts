# Products & layout

## Product components

Import from **`tickup/full`**:

| Export | `productId` | Side drawing bar | Top bar | Settings entry |
|--------|-------------|------------------|---------|----------------|
| `TickUpPulse` | `pulse` | No | No | No |
| `TickUpFlow` | `flow` | No | Yes | Yes |
| `TickUpCommand` | `command` | Yes | Yes | Yes |
| `TickUpDesk` | `desk` | Yes | Yes | Yes (branding on) |

Product components **omit** `showSidebar`, `showTopBar`, and `showSettingsBar` from public props; those are fixed per tier.

A **`TickUpPrimeTier`** shell exists for **evaluating** the separate Prime product (license/evaluation chrome). Standard Tier data and indicator guardrails in this open-source package still apply unless you integrate a fully licensed Prime deployment.

## Symbol on Pulse (no top bar)

**Pulse** has no symbol field in the toolbar. If you pass a non-empty **`symbol`** (controlled) or **`defaultSymbol`**, the stage shows a **compact read-only symbol strip** above the plot. If both resolve to empty after trim, the strip is hidden.

The same strip appears for **`TickUpHost`** / **`TickUpStage`** when **`showTopBar`** is `false` and a symbol string is available.

## Custom layout: `TickUpHost`

Use **`TickUpHost`** **without** `productId`:

```tsx
import { TickUpHost } from 'tickup/full';

<TickUpHost
  showSidebar
  showTopBar
  showSettingsBar
  intervalsArray={data}
/>;
```

You control which chrome appears. Settings from the modal still respect **locked** layout when `productId` is set on product variants.

## Desk specifics

- **Desk** — `showAttribution` (in-chart watermark) is forced **on**.

## Mode provider

The shell wraps children in **`ModeProvider`**. If you use **`TickUpStage`** alone, wrap with **`ModeProvider`** yourself. See [Exports & advanced](./11-exports-and-advanced.md).

---

## Tier comparison: TickUp Prime

**TickUp Prime** adds a commercial shell, WebGL-class rendering, and expanded limits. Details: **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** · **[Showcase](https://bardamri.github.io/tickup-charts/)**
