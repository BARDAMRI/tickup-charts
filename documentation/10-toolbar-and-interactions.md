# Toolbar & interactions

## Compact symbol strip (no top bar)

When **`showTopBar`** is **`false`**, there is no symbol field in the toolbar. If **`symbol`** (trimmed) or **`defaultSymbol`** (when `symbol` omitted) is non-empty, a **read-only strip** appears above the plot. Styling follows **`chartOptions.base.style.axes`** and **`base.style.backgroundColor`**.

- Automatic on **`TickUpPulse`** with `symbol` / `defaultSymbol`.  
- Same for **`TickUpHost`** / **`TickUpStage`** with `showTopBar={false}`.

## Floating settings (no top bar)

With **`showTopBar: false`** and **`showSettingsBar: true`**, a **floating gear** opens the settings modal. Pulse defaults omit the gear unless you enable it on a custom host.

## Top bar (Flow, Command, Desk)

| Control | Action |
|---------|--------|
| **Symbol** | Edit ticker; search runs `onSymbolSearch`. |
| **Interval** | Dropdown; `onIntervalSearch` for async loads. |
| **Chart type** | Candlestick, line, area, bar. |
| **Settings** | Opens [settings modal](./09-settings-modal.md). |
| **Snapshot** | PNG export. |
| **Range** | `fitVisibleRangeToData`. |
| **Export** | CSV of series (trimmed to Standard Tier length). |
| **Refresh** | `onRefreshRequest`. |
| **Theme** | Shell light/dark; sync **`themeVariant`** with **`onThemeVariantChange`**. Align **`chartOptions.base.theme`** for plot readability. |

## Interval search flow

1. User picks a new interval.  
2. Chart may enter a searching state.  
3. **`onIntervalSearch(newTf)`** runs if provided.  
4. Return **`true`** (or resolve `true`) to commit; **`false`** or reject to revert.

```tsx
<TickUpHost
  onIntervalSearch={async (tf) => {
    try {
      await myDataFeed.switchTo(tf);
      return true;
    } catch {
      return false;
    }
  }}
/>
```

## Pan & zoom

In default navigation mode, wheel and drag pan/zoom the plot. **Select** / **edit** avoid pan-on-drag for hit-testing. Drawing modes use tool-specific cursors.

## Crosshair & tooltip

When enabled: crosshair lines, optional value labels, candle tooltip (OHLC / change / volume).

**Watermark:** low-opacity TickUp mark in plot/histogram (bundled assets), unless disabled via **`showAttribution`** (**Desk** forces on).

## Keyboard

- **Escape** — Clear in-progress polyline, exit draw tools toward navigation.

## Canvas stack (conceptual)

Main OHLC (grid, sessions, watermark), histogram, drawings, hover/crosshair.

## Copy

Selected text may be normalized for clipboard-friendly numbers (shell integration).

---

## Tier comparison: TickUp Prime

**TickUp Prime** adds commercial interaction and rendering upgrades. **TickUp Core** covers the behaviors above. **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** · **[Showcase](https://bardamri.github.io/tickup-charts/)**
