import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const repoRoot = path.resolve(__dirname, '..');
const primeEnabled = process.env.VITE_TICKUP_PRIME === '1';
const useLocalSrc = process.env.VITE_USE_LOCAL_SRC === '1';

export default defineConfig({
    base: '/tickup-charts/',
    publicDir: path.resolve(repoRoot, 'public'),
    plugins: [react()],
    /**
     * Tarball/npm simulation mode should resolve from node_modules.
     * Set `VITE_USE_LOCAL_SRC=1` only when you explicitly want local source aliases.
     */
    define: {
        __TICKUP_USE_LOCAL_SRC__: JSON.stringify(useLocalSrc),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        // Default: npm-like resolution from node_modules. Opt-in local alias when needed.
        alias: useLocalSrc
            ? [
                {find: 'tickup/full', replacement: path.join(repoRoot, 'src/full.ts')},
                {find: 'tickup', replacement: path.join(repoRoot, 'src/index.ts')},
                ...(primeEnabled
                    ? []
                    : [{find: '@tickup/prime', replacement: path.join(__dirname, 'src/mocks/primeShim.ts')}]),
                {find: '@brand', replacement: path.join(repoRoot, 'src/assets/brand')},
            ]
            : [
                ...(primeEnabled
                    ? []
                    : [{find: '@tickup/prime', replacement: path.join(__dirname, 'src/mocks/primeShim.ts')}]),
                {find: '@brand', replacement: path.join(repoRoot, 'src/assets/brand')},
            ],
    },
    server: {
        fs: {
            allow: [path.resolve(__dirname, '..')],
        },
    },
    build: {
        target: 'esnext',
        minify: false,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    const normalized = id.replaceAll('\\', '/');
                    const normalizedRepoRoot = repoRoot.replaceAll('\\', '/');
                    const tickupSrcRoot = `${normalizedRepoRoot}/src/`;

                    if (normalized.includes('/node_modules/lucide-react/')) {
                        return 'vendor-lucide';
                    }
                    if (normalized.includes('/node_modules/styled-components/')) {
                        return 'vendor-styled';
                    }
                    if (
                        normalized.startsWith(tickupSrcRoot) ||
                        normalized.includes('/dist/tickup.es.js') ||
                        normalized.includes('/dist/tickup-full.es.js')
                    ) {
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
    /** Default entry: project `index.html` → `/src/main.tsx` (do not override `rollupOptions.input`). */
});