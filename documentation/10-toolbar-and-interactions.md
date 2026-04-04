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
| **Export** | CSV of series (**trimmed** to the **5,000**-bar Standard Tier window). |
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

## Standard Tier: what you feel in the UI

**TickUp Core** caps in-memory history at **5,000** bars and applies about **1 Hz** throttling to rapid live updates on Standard shells, so pan/zoom always works against that window and merge-driven repaints stay bounded. Licensed Prime can opt out of the throttle; the **5,000**-bar cap remains a Core baseline unless you adopt a Prime data path. Details: [Data & live updates](./07-data-and-live-updates.md), [API reference](./16-api-reference.md).

## Mouse & touch — main chart interactions

Behavior below matches the **`usePanAndZoom`** hook and **`ChartCanvas`** handlers in **TickUp Core**. It applies when the stage is in **navigation** mode (`Mode.none` / pan-zoom enabled). In **select**, **edit**, or **draw** modes, **primary-button drag** is reserved for selection and shape placement, not pan.

### Primary button (left click)

| Gesture | Effect |
|---------|--------|
| **Drag** | **Pan** along the time axis (horizontal or dominant axis movement). The visible window slides; clamped to the loaded series. |

### Scroll wheel

| Gesture | Effect |
|---------|--------|
| **Wheel** (no modifier) | **Pan** — same as dragging, using vertical or dominant wheel delta (trackpads often scroll horizontally). |
| **Ctrl + wheel** or **⌘ + wheel** (meta) | **Zoom** — shrinks or expands the visible **time** range, anchored roughly under the cursor. Minimum span is a few bar widths. |

There is **no** separate “Y-axis zoom” from the wheel; price scale follows visible candles.

### Right click (context menu)

There is **no** general-purpose browser context menu for the chart surface.

| Condition | Effect |
|-----------|--------|
| A **drawing is selected**, the host wires **shape properties**, and the pointer is **on that shape** | **Prevent default** menu and open **shape properties** (same flow as double-click on a shape). |
| Otherwise | Default browser / OS context menu may appear (not chart-specific). |

### Double click

**Double-click does not reset the visible time range** to full data.

| Mode / target | Effect |
|---------------|--------|
| **Polyline** draw tool | **Finish** the polyline and commit the shape. |
| **Navigation / select / edit** and pointer **on a drawing** (with shape properties wired) | **Select** that shape and open **shape properties**. |

To **fit** or **reset** the view, use the toolbar **Range** control (e.g. fit-to-data), or the imperative API **`fitVisibleRangeToData()`** on the host ref (see [Imperative API](./06-imperative-api.md)).

### Touch & mobile readiness

Pan/zoom on the plot is implemented with **mouse** and **wheel** DOM events (`mousedown` / `mousemove` / `mouseup`, `wheel`). There are **no** dedicated **`touchstart` / `touchmove` / pinch-to-zoom** handlers on the chart canvas.

- **Desktop / laptop** with mouse or trackpad is the **primary** supported interaction model (including **Ctrl/⌘+wheel** zoom).
- **Phones and tablets** may get **inconsistent** behavior: some browsers synthesize wheel or pan from touch, but **TickUp Core** does not claim full **pinch-to-zoom** or multi-touch chart navigation. For mobile-first apps, plan on **external** controls (buttons, range presets) or a **custom touch layer** if you need reliable gestures.

## Pan & zoom (summary)

In default navigation mode: **primary drag** and **plain wheel** **pan**; **Ctrl/⌘ + wheel** **zooms** time. **Select** / **edit** / **draw** modes change drag behavior as above.

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
