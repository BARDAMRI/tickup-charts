# Drawings & shapes

## Supported shape types (`ShapeType`)

| Type | Points / usage |
|------|----------------|
| **Line** | 2 points: start and end (time/price). |
| **Rectangle** | 2 corners (diagonal). |
| **Circle** | 2 points: center and rim. |
| **Triangle** | 3 vertices. |
| **Angle** | Vertex + two rays (two-phase placement in UI). |
| **Arrow** | 2 points: tail and head. |
| **Polyline** | Multiple vertices; double-click to finish in UI. |
| **CustomSymbol** | 1 anchor + `symbol` string + `size`. |

## Toolbar (Command / Desk / host with sidebar)

| Tool | Mode |
|------|------|
| Line | `drawLine` |
| Rectangle | `drawRectangle` |
| Circle | `drawCircle` |
| Triangle | `drawTriangle` |
| Angle | `drawAngle` |
| Select | `select` |
| Edit | `editShape` |

**Not on the default toolbar** (supported via code): **Arrow**, **Polyline**, **CustomSymbol**. Use `addShape` / `DrawingSpec`.

The enum may include **`Mode.drawText`** for future use; there is no text tool in the default toolbar today.

Click the active tool again to return to **`Mode.none`**.

### Mouse workflow

1. Choose a draw tool.  
2. Click (and drag or multi-click per tool).  
3. Shapes commit when enough points are placed.

**Polyline**: double-click finishes. **Angle**: two-step ray placement.

### Select & edit

- **Select** — Top-most hit wins.  
- **Edit** — Handles where implemented.  
- **Double-click** or **right‑click** (selected) opens **Shape properties** (`ShapePropertiesModal`): line, fill, selection styling; custom symbols: text + size.

The shell wires **`ShapePropertiesModal`** via `onRequestShapeProperties`.

Minimum points are enforced in `drawingFromSpec`.

```tsx
chartRef.current?.addShape({
  type: ShapeType.Rectangle,
  points: [{ time: t0, price: p0 }, { time: t1, price: p1 }],
  style: { lineColor: '#0af', fillColor: 'rgba(0,170,255,0.15)' },
});
```

## Programmatic tools

```tsx
import { Mode } from 'tickup/full';

chartRef.current?.setInteractionMode(Mode.drawRectangle);
chartRef.current?.setInteractionMode(Mode.none);
```

Use **`addShape(DrawingSpec)`** to insert without UI interaction.

## Selection API

- `selectShape(id)`, `unselectShape()`  
- `getSelectedDrawing()`, `getSelectedDrawingId()`  
- `updateSelectedShape(patch)`, `deleteSelectedDrawing()`

## Updates & deletion

- `updateShape`, `patchShape`, `deleteShape` by id.  
- `setDrawingsFromSpecs(specs)` — bulk replace.

## Query & persistence

`getDrawings(query?)`, `shapeToSnapshot`, `queryDrawingsToSnapshots` — export plain objects for storage.

## Coordinate space

`DrawingPoint` uses **time** (unix seconds) and **price**, not pixels.

---

## Tier comparison: TickUp Prime

Additional drawing and analysis tooling may ship with the commercial product. **TickUp Core** covers the shapes and APIs above. **[TickUp Prime](https://github.com/BARDAMRI/tickup-prime)** · **[Showcase](https://bardamri.github.io/tickup-charts/)**
