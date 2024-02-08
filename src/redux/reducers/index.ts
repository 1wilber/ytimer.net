import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";
import { reducer as scrambleReducer } from "@/redux/reducers/scramble.reducer";
import { reducer as timerReducer } from "@/redux/reducers/timer.reducer";
const STORAGE_KEY = "YTIMER__STORAGE";
const persistConfig = {
  key: STORAGE_KEY,
  storage,
  whitelist: ["results", "event"],
};

const persistedTimerReducer = persistReducer(persistConfig, timerReducer);

export const rootReducer = {
  scramble: scrambleReducer,
  timer: persistedTimerReducer,
};
