import type {ChartTheme, TickUpChartEngine} from 'tickup/full';

export const TickUpPrime: TickUpChartEngine = {
    id: 'prime-shim',
    getChartOptionsPatch: () => ({}),
};

export function createTickUpPrimeEngine(_theme: ChartTheme): TickUpChartEngine {
    return TickUpPrime;
}

export function getTickUpPrimeThemePatch(_theme: ChartTheme): Record<string, unknown> {
    return {};
}
