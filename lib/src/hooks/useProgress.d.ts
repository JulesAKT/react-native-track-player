import type { Progress } from '../interfaces';
/**
 * Poll for track progress for the given interval (in miliseconds)
 * @param updateInterval - ms interval
 * @param background - if update state in background. default true. may severely affects performance.
 */
export declare function useProgress(updateInterval?: number, background?: boolean): Progress;
