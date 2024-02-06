import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";
import { scrambleReducer } from "./scramblerReducer";
import { timerReducer } from "./timerReducer";
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
