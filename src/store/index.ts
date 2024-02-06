import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@/reducers";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { TimerReducerState } from "@/modules/times/shared/times";
import { ScrambleReducerState } from "@/modules/scramble/shared/scramble";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
export { store, persistor };

export type StoreState = {
  timer: TimerReducerState;
  scramble: ScrambleReducerState;
};

export type AppDispatch = typeof store.dispatch;
