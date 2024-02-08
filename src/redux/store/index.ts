import { configureStore, } from "@reduxjs/toolkit";
import { rootReducer } from "@/redux/reducers";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { TimerState } from "../states/timer.state";
import { ScrambleState } from "@/redux/states";
import { changeEventMiddleware } from "@/redux/middleware";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(changeEventMiddleware),
});

const persistor = persistStore(store);
export { store, persistor };

export type StoreState = {
  timer: TimerState;
  scramble: ScrambleState;
};

export type AppDispatch = typeof store.dispatch;
