import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  TimeResult,
  TimerReducerState,
  TimerStatuses,
} from "@/modules/times/shared/times";
import { WCAEvent } from "@/models";

const initialState: TimerReducerState = {
  results: [],
  event: "333",
  status: "stopped",
};

const timerReducer = createSlice({
  name: "timer",
  initialState,
  reducers: {
    // result actions
    addResult: (state, action: PayloadAction<TimeResult>) => {
      const results = [action.payload, ...state.results];

      return Object.assign({}, state, { results });
    },

    removeResult: (state, action: PayloadAction<TimeResult>) => {
      const results = state.results.filter(
        (currentTime) => currentTime.id != action.payload.id,
      );
      return Object.assign({}, state, { results });
    },

    removeAllResults: (state) => {
      const results = state.results.filter(
        (timeResult) => timeResult.event !== state.event,
      );
      return Object.assign({}, state, { results });
    },

    // timer-status actions
    updateStatus: (state, action: PayloadAction<TimerStatuses>) => {
      return Object.assign({}, state, { status: action.payload });
    },

    // event actions
    updateEvent: (state, action: PayloadAction<WCAEvent>) => {
      return Object.assign({}, state, { event: action.payload });
    },
  },
});

const { reducer, actions } = timerReducer;
export const {
  updateStatus,
  addResult,
  removeResult,
  removeAllResults,
  updateEvent,
} = actions;
export { initialState, reducer as timerReducer };
