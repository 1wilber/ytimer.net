import {
  createAction,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import { fetch as fetchScramble } from "../reducers/scramble.reducer";
import { updateEvent } from "../reducers/timer.reducer";

const REHYDRATE = createAction("persist/REHYDRATE");

const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(updateEvent.match, REHYDRATE),
  effect: async (action, listenerApi) => {
    const newEvent =  action.payload.event || action.payload;
    listenerApi.dispatch(fetchScramble(newEvent));
  },
});

export const { middleware: changeEventMiddleware } = listenerMiddleware;
