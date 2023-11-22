import type { StoreState } from "@/store";
import { createSelector } from "@reduxjs/toolkit";

export const timesByEvent = createSelector(
  [(state: StoreState) => state.timer],
  ({ results, event }) => {
    return results.filter((time) => time.event === event);
  },
);
