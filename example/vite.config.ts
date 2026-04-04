import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'node:fs';

const repoRoot = path.resolve(__dirname, '..');
/** Set `VITE_TICKUP_PRIME_SHIM=1` to force the local stub (CI without a built Prime sibling). */
const forcePrimeShim = process.env.VITE_TICKUP_PRIME_SHIM === '1';
const useLocalSrc = process.env.VITE_USE_LOCAL_SRC === '1';

const tickupFullDist = path.join(repoRoot, 'dist', 'tickup-full.es.js');

const primePackageRoot = process.env.VITE_TICKUP_PRIME_PACKAGE_ROOT
    ? path.resolve(process.env.VITE_TICKUP_PRIME_PACKAGE_ROOT)
    : path.resolve(repoRoot, '../tickup-prime-final');

function firstExistingFile(...candidates: string[]): string | null {
    for (const p of candidates) {
        try {
            if (fs.existsSync(p)) return p;
        } catch {
            /* ignore */
        }
    }
    return null;
}

const primeDistEntry =
    firstExistingFile(
        path.join(primePackageRoot, 'dist', 'tickup.es.js'),
        path.join(primePackageRoot, 'dist', 'index.js'),
        path.join(primePackageRoot, 'dist', 'index.mjs'),
        path.join(primePackageRoot, 'dist', 'esm', 'index.js')
    ) ?? null;

const primeShim = path.join(__dirname, 'src/mocks/primeShim.ts');

const fsAllow = [
    path.resolve(__dirname, '..'),
    ...(primeDistEntry ? [primePackageRoot] : []),
];

const primeAlias =
    !forcePrimeShim && primeDistEntry
        ? {find: '@tickup/prime', replacement: primeDistEntry}
        : {find: '@tickup/prime', replacement: primeShim};

function comparisonLabUsesPublishedDist(importer?: string): boolean {
    if (!importer) return false;
    const n = importer.replaceAll('\\', '/');
    return n.includes('/ComparisonLab.') || n.includes('\\ComparisonLab.');
}

export default defineConfig(({mode}) => ({
    base: '/tickup-charts/',
    publicDir: path.resolve(repoRoot, 'public'),
    plugins: [
        react(),
        {
            name: 'tickup-comparison-lab-published-dist',
            enforce: 'pre',
            resolveId(id, importer) {
                if (!comparisonLabUsesPublishedDist(importer)) {
                    return undefined;
                }
                if (id === 'tickup/full' || id === 'tickup\\full') {
                    return tickupFullDist;
                }
                if (id === 'tickup' || id === 'tickup/index') {
                    return path.join(repoRoot, 'dist', 'tickup.es.js');
                }
                if (
                    (id === '@tickup/prime' || id === '@tickup\\prime') &&
                    primeDistEntry &&
                    !forcePrimeShim
                ) {
                    return primeDistEntry;
                }
                return undefined;
            },
        },
        {
            name: 'tickup-dist-exists-guard',
            buildStart() {
                if (!fs.existsSync(tickupFullDist)) {
                    this.warn(
                        `\n  Missing ${tickupFullDist}\n  Run:  npm run build  (repo root) before example dev/build.\n`
                    );
                }
                if (forcePrimeShim) {
                    this.info('  @tickup/prime → showcase shim (VITE_TICKUP_PRIME_SHIM=1)\n');
                } else if (!primeDistEntry) {
                    this.warn(
                        `\n  No Prime bundle at ${primePackageRoot}/dist/tickup.es.js\n  Build TickUp Prime (npm run build there) or set VITE_TICKUP_PRIME_SHIM=1 for stub engine.\n`
                    );
                }
            },
        },
    ],
    define: {
        __TICKUP_USE_LOCAL_SRC__: JSON.stringify(useLocalSrc),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: useLocalSrc
            ? [
                {find: 'tickup/full', replacement: path.join(repoRoot, 'src/full.ts')},
                {find: 'tickup', replacement: path.join(repoRoot, 'src/index.ts')},
                primeAlias,
                {find: '@brand', replacement: path.join(repoRoot, 'src/assets/brand')},
            ]
            : [primeAlias, {find: '@brand', replacement: path.join(repoRoot, 'src/assets/brand')}],
    },
    server: {
        fs: {
            allow: fsAllow,
        },
    },
    build: {
        target: 'esnext',
        /** Prime + styled-components: esbuild minify can corrupt bundled SC; keep false — obfuscation ships in package dist. */
        minify: false,
        sourcemap: mode !== 'production',
        rollupOptions: {
            output: {
                manualChunks(id) {
                    const normalized = id.replaceAll('\\', '/');
                    const normalizedRepoRoot = repoRoot.replaceAll('\\', '/');
                    const normalizedPrimeRoot = primePackageRoot.replaceAll('\\', '/');
                    const tickupSrcRoot = `${normalizedRepoRoot}/src/`;

                    if (normalized.includes('/node_modules/lucide-react/')) {
                        return 'vendor-lucide';
                    }
                    if (normalized.includes('/node_modules/styled-components/')) {
                        return 'vendor-styled';
                    }
                    if (
                        primeDistEntry &&
                        (normalized.startsWith(`${normalizedPrimeRoot}/dist/`) ||
                            normalized === primeDistEntry.replaceAll('\\', '/'))
                    ) {
                        return 'vendor-tickup-prime';
                    }
                    if (normalized.startsWith(tickupSrcRoot) || normalized.startsWith(`${normalizedRepoRoot}/dist/`)) {
                        return 'vendor-tickup-core';
                    }
                    if (normalized.includes('/node_modules/@tickup/prime/')) {
                        return 'vendor-tickup-prime';
                    }
                    if (
                        normalized.includes('/node_modules/react/') ||
                        normalized.includes('/node_modules/react-dom/')
                    ) {
                        return 'vendor-react';
                    }
                    return undefined;
                },
            },
        },
    },
}));
