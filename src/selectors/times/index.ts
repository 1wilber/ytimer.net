import type { StoreState } from "@/store";
import { msToTime } from "@/utils";
import { createSelector } from "@reduxjs/toolkit";

export const timesByEvent = createSelector(
  [(state: StoreState) => state.timer],
  ({ results, event }) => {
    return results.filter((time) => time.event === event);
  },
);

export const getAverageOf = createSelector(
  [timesByEvent, (_, avgOf) => avgOf],
  (times, avgOf) => {
    let lastNTimes = times.slice(0, avgOf);
    if (lastNTimes.length < avgOf) return msToTime(0);

    // sort by time
    lastNTimes = lastNTimes.sort((a, b) => a.time - b.time);

    // remove highest and lowest
    lastNTimes = lastNTimes.slice(1, lastNTimes.length - 1);

    // get average
    const result =
      lastNTimes.reduce((acc, curr) => acc + curr.time, 0) / (avgOf - 2);
    return msToTime(result);
  },
);
