import { getAvgCurrentTimes } from "@/utils";
import { createSelector } from "@reduxjs/toolkit";

export const timesByEvent = createSelector(
  state => state.timer.currentTimes,
  state => state.timer.currentEvent,
  (times, currentEvent) => {
    return times.filter(time => time.event === currentEvent).sort((a, b) => b.created_at - a.created_at);
  }
)

export const getCurrentAvgTimes = createSelector(
  [
    state => timesByEvent(state),
    (state, avgTarget) => avgTarget,
  ],
  (currentTimes, avgTarget) => {
    return getAvgCurrentTimes(currentTimes, avgTarget)
  }
)
