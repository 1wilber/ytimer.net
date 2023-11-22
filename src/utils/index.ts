import { TimeResult } from "@/modules/times/shared/times";
import sum from "lodash/sum";

export const msToSeconds = (ms: number) => {
  return ms / 1000;
};

export const secondsToMs = (seconds: number) => {
  return seconds * 1000;
};

export const msToTime = (duration: number) => {
  const milliseconds = Math.floor((duration % 1000) / 10);
  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);

  const displayMilliseconds =
    milliseconds < 10 ? `0${milliseconds}` : milliseconds;

  if (duration <= 60000) {
    return `${seconds}.${milliseconds}`;
  }

  if (duration > 60000) {
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${displaySeconds}.${displayMilliseconds}`;
  }
};

export const calculateAvg = (
  currentAvgTimes: TimeResult[],
  avgTarget: number,
) => {
  if (currentAvgTimes.length < avgTarget) return 0;
  if (!currentAvgTimes.length) return 0;

  const currentAvg = currentAvgTimes
    .sort((a, b) => a.time - b.time)
    .slice(1, -1)
    .map((t) => msToSeconds(t.time));

  const result = sum(currentAvg) / (avgTarget - 2);
  return secondsToMs(result);
};
