export interface Chronometer {
  start: () => void;
  stop: () => void;
  reset: () => void;
  currentTimeMs: number;
}
