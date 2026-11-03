/**
 * android & ios only. returns a FFT doubleArray of the current playback, sample rate = 4096
 **/
export interface FFTUpdateEvent {
    data: number[];
    amplitude?: number;
}
