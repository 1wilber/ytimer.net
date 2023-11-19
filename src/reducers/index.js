import scramblerReducer from "@/reducers/scramblerReducer";
import timerReducer from "@/reducers/timerReducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const STORAGE_KEY = 'ytimer__storage'
const persistConfig = {
  key: STORAGE_KEY,
  storage,
  whitelist: ['currentTimes', 'currentEvent'],
}

const persistedTimerReducer = persistReducer(persistConfig, timerReducer)

export const rootReducer = ({
  scrambler: scramblerReducer,
  timer: persistedTimerReducer,
})
