# Comparison showcase — audit Core vs Prime

The **TickUp Charts** example app (in this repo under **`example/`**) includes a **Live Comparison** view so you can **audit performance and tier limits** before choosing **Standard (Core)** vs **Prime**.

---

## How to open it

When running the showcase locally or on the hosted site:

- Use the navigation control **“Core vs Prime”**, or  
- Open the URL fragment **`#/compare`** (hash route), e.g.  
  `https://<host>/<base>/#/compare`

Some deployments also honor a pathname ending in **`/compare`** when the server is configured for SPA fallback.

---

## What you see

| Column | What it represents |
|--------|--------------------|
| **Left — TickUp Core (Standard)** | **Canvas 2D**, **5,000-bar** cap, **~1 Hz** live-update behavior on Standard shells, standard attribution. |
| **Right — TickUp Prime** | **Prime product shell** with licensed/eval features when **`@tickup/prime`** is linked; **WebGL** path when the real Prime bundle is present and **`setEngine`** is applied. |

The page loads a **high-volume mock stream** (thousands of bars) so the **Standard cap** is visible next to Prime’s presentation.

**Performance & troubleshooting:** If you are evaluating **TickUp Core** (Standard Tier), assume **5,000** bars max and **~1 Hz** live merge cadence on Standard shells — the comparison view is meant to make those limits obvious. See [Data & live updates](./07-data-and-live-updates.md) and [API reference](./16-api-reference.md).

**Telemetry** on the page shows:

- Mock **feed size** vs **rendered series length** (you should see Core clamp at **5,000**).
- **~1 Hz** heartbeat messaging on Core vs higher **FPS-style** telemetry on Prime when the real engine is active.

---

## Why this matters for product decisions

- **Capacity planning:** If you need **more than 5,000** visible bars or **faster than ~1 Hz** merge cadence on Standard shells, you are outside **Standard Tier** comfort zone.
- **Visual & UX expectations:** Prime adds **premium chrome**, **VWAP** and other pro overlays in the demo, and (with license) **evaluation watermark** removal.
- **Technical proof:** The showcase can be configured so the comparison view resolves **published `dist/` bundles** (not TypeScript sources), matching what integrators ship.

---

## Related links

- [Getting started](./00-getting-started.md) — first integration.
- [Data & live updates](./07-data-and-live-updates.md) — guardrails in depth.
- [API reference](./16-api-reference.md) — props and `chartOptions`.
- **Live site:** [TickUp Charts showcase](https://bardamri.github.io/tickup-charts/).

---

## Tier comparison: TickUp Prime

Commercial **TickUp Prime** details: **[TickUp Prime repository](https://github.com/BARDAMRI/tickup-prime)**.
