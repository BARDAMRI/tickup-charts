import type { DeepPartial } from '../../types/types';
import { ChartTheme } from '../../types/types';
import type { ChartOptions } from '../../types/chartOptions';
import type { TickUpChartEngine } from '../TickUpEngine';

/**
 * Core-only distribution stub: premium renderer internals are not bundled here.
 * Consumers can still compile against the public Prime API names.
 */
export const TICKUP_PRIME_PRIMARY = '#3EC5FF';
export const TICKUP_PRIME_SECONDARY = '#5A48DE';
export const TICKUP_PRIME_TEXT = '#e7ebff';

const darkPatch: DeepPartial<ChartOptions> = {
    base: {
        theme: ChartTheme.dark,
    },
};

const lightPatch: DeepPartial<ChartOptions> = {
    base: {
        theme: ChartTheme.light,
    },
};

export function getTickUpPrimeThemePatch(theme: ChartTheme = ChartTheme.dark): DeepPartial<ChartOptions> {
    return theme === ChartTheme.light ? lightPatch : darkPatch;
}

export function createTickUpPrimeEngine(theme: ChartTheme = ChartTheme.dark): TickUpChartEngine {
    return {
        id: `tickup-prime-stub-${theme}`,
        getChartOptionsPatch: () => getTickUpPrimeThemePatch(theme),
    };
}

export const TickUpPrime: TickUpChartEngine = createTickUpPrimeEngine(ChartTheme.dark);

export const TickUpStandardEngine: TickUpChartEngine = {
    id: 'tickup-standard-engine',
    getChartOptionsPatch: () => ({}),
};
