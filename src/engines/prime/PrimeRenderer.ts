import type { DeepRequired } from '../../types/types';
import { TickUpRenderEngine } from '../../types/chartOptions';
import type { ChartOptions } from '../../types/chartOptions';

/** Core-only helper kept for compatibility with existing chart rendering checks. */
export function isPrimeEngine(options: DeepRequired<ChartOptions>): boolean {
    return options.base.engine === TickUpRenderEngine.prime;
}
