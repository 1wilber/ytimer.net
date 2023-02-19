import {configureStore} from '@reduxjs/toolkit'
import scramblerReducer from "@/reducers/scramblerReducer"
import timerReducer from "@/reducers/timerReducer"

export default configureStore({
  reducer: {
    scrambler: scramblerReducer,
    timer: timerReducer
  }
})
