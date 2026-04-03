# Internationalization, axes, and sessions

## Locale and language

Axis labels and many strings follow **`chartOptions.base.style.axes`**:

| Field | Role |
|-------|------|
| `locale` | BCP 47 tag (e.g. `en-US`, `he-IL`). |
| `language` | UI language key for built-in labels. |

**Settings → Regional** updates these fields. The library ships locale presets (separators, date patterns, default currency, **RTL** vs LTR).

### RTL

When the active locale specifies `direction: 'rtl'`, toolbar and modal layout flip (`dir` on containers).

## Numeric and currency display

Axes support fraction digits, significant digits, `tickSize`, `autoPrecision`, `currency`, `useCurrency`, `currencyDisplay`, `numberNotation`, `unit` / `unitPlacement`, optional **`displayCurrency`** / **`conversionRate`** (host-defined).

## Time axis

- **`timezone`** — e.g. `UTC`, `America/New_York`.  
- **`dateFormat`** — formatting pattern.  
- **`initialTimeFormat12h`** and settings toggle — 12h vs 24h.  
- **`TimeDetailLevel`** — tick density (`initialTimeDetailLevel`).

## Trading sessions and holidays

- **`tradingSessions`** — `{ dayOfWeek, start, end }` with `HH:mm`; **shades** off-session periods.  
- **`holidays`** — ISO `YYYY-MM-DD` where integrated.  
- **`exchange`** — display/metadata.

## Grid and background

- **`base.style.showGrid`**  
- **`base.style.backgroundColor`**

## Y axis layout

- **`axes.yAxisPosition`** — left or right.  
- **`axes.numberOfYTicks`**  
- **`initialYAxisWidth`** / **`initialXAxisHeight`**

## Clipboard (shell)

Copying selected text may normalize numbers for spreadsheets (formatting integration).

---

## Tier comparison: TickUp Prime

Commercial Prime offerings may bundle additional locale or layout packages. **TickUp Core** behavior is as documented above. **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** · **[Showcase](https://bardamri.github.io/tickup-charts/)**
