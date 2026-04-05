# Contributing to TickUp Charts

TickUp Charts is **open source** (MIT). Maintainers treat contributors as **peers**: we review code and docs in good faith, prefer small incremental PRs when possible, and are happy to help you get your first contribution merged—whether that is a one-line doc fix or a careful feature behind a clear issue discussion.

## How to participate

Pick what fits your style; all of these are legitimate on-ramps:

- **GitHub** — Open an [issue](https://github.com/BARDAMRI/tickup-charts/issues) (bug, idea, question) or a **pull request** on **[TickUp Charts](https://github.com/BARDAMRI/tickup-charts)**. That is where public review and project history live.
- **Email (maintainer)** — **[Bar Damri](mailto:bardamri1702@gmail.com)** — [bardamri1702@gmail.com](mailto:bardamri1702@gmail.com). Use this for **security disclosures**, **private coordination**, or when you are unsure whether an idea fits the roadmap and want a quick human answer before investing in a long GitHub thread.
- **Website** — [bardamri.com](https://bardamri.com)

## Before you open a PR

1. **Discuss** larger changes via an issue first when possible.
2. **Build and test** locally: `npm run build` and `npm test`.
3. **Match existing style** (TypeScript, React patterns, formatting used in `src/`).

## Package layout

- Default import **`tickup`** — canvas-focused API (`TickUpStage`, overlays, live data helpers, …).
- **`tickup/full`** — product shells (`TickUpHost`, `TickUpCommand`, …) and extended exports.

The example app under `example/` uses `tickup/full` for demos that include the full UI.

## Maintainers (repo collaborators)

Step-by-step **internal** runbooks live under **[`docs/internal/`](./docs/internal/README.md)**. That folder is **not** included in the npm package (see root `package.json` `"files"` and `.npmignore`). If the repository is **public** on GitHub, those files are still visible on the web—use a private repo or duplicate sensitive process docs elsewhere if required.

## License

By contributing, you agree that your contributions will be licensed under the same terms as the project ([MIT](./LICENSE)).
