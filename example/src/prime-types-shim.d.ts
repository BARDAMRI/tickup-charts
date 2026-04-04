/**
 * Ambient types for `@tickup/prime` so `tsc` succeeds in the Core repo when the real
 * Prime package is optional. Vite still resolves the module at build/dev time.
 *
 * Names in the mission spec map to Core exports: `TickUpChartEngine` (not `TickUpEngine`),
 * `ChartTheme` (not `TickUpTheme`).
 */
declare module '@tickup/prime' {
    import type {ChartOptions, TickUpChartEngine} from 'tickup/full';
    import type {ChartTheme} from 'tickup/full';

    export const TickUpPrime: TickUpChartEngine;
    export const TickUpStandardEngine: TickUpChartEngine;
    export const createTickUpPrimeEngine: (theme?: ChartTheme) => TickUpChartEngine;
    export const getTickUpPrimeThemePatch: (theme?: ChartTheme) => Partial<ChartOptions>;

    export const validateLicense: (
        key: string | null | undefined,
        userIdentifier?: string | null,
    ) => Promise<boolean>;

    export const isWebGL2Supported: () => boolean;

    export const TICKUP_PRIME_PRIMARY: string;
    export const TICKUP_PRIME_SECONDARY: string;
    export const TICKUP_PRIME_TEXT: string;
}
