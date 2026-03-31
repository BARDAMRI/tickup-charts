# TickUp Charts — example playground

Local Vite app that exercises **`tickup/full`**: interactive **`TickUpDemo`** (theme System/Light/Dark, Prime + standard engines aligned via **`createTickUpPrimeEngine`**, live data from `data-generator.ts`) and a multi-tier showcase in `App.tsx`.

## Run locally

From the repository root:

```bash
npm install
npm run build
cd example
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

## Prime CI-mock behavior

This public core demo includes **CI-mock logic** for Prime integration:

- `VITE_TICKUP_PRIME` is required before any optional Prime import is attempted.
- If Prime is not linked, the UI safely stays on the standard engine and shows upgrade messaging.
- This keeps CI and public builds deterministic without requiring private Pro artifacts.

To preview Prime locally (when available):

```bash
npm run dev:prime
```

## Build

From the repository root (library must be built first):

```bash
npm run build:example
```

Output is `example/dist/`. Vite resolves `tickup` / `tickup/full` via aliases to `../dist/*.es.js` when needed; `public/` assets are read from the root `public/` folder.
