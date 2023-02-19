import { createSlice } from "@reduxjs/toolkit";
import { saveTimes, removeAllTime, getTimes } from "@/services/LocalStorage";

const initialState = {
  currentTimes: getTimes() || [],
  avgClicked: 5,
  currentAvgs: {
  },
}

const timerReducer = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    addTime: (state, {payload}) => {
      payload.id = state.currentTimes.length + 1
      state.currentTimes.unshift(payload)
      saveTimes((state.currentTimes))
    },

    removeTime: (state, {payload}) => {
      const newCurrentTimes = state.currentTimes.filter(currentTime => currentTime.created_at != payload.created_at)
      saveTimes(newCurrentTimes)
      return {...state, currentTimes: newCurrentTimes}
    },

    removeAll:(state) => {
      state.currentTimes = []
      removeAllTime()
    },

    setAvgCliked: (state, {payload}) => {
      return {...state, avgClicked: payload}
    },

    setCurrentAvgs: (state, {payload}) => {
      const newCurrentAvgs = {...state.currentAvgs, ...payload}
      return {...state, currentAvgs: newCurrentAvgs}
    }
  }
})

export const {addTime, removeAll, removeTime, setAvgCliked, setCurrentAvgs} = timerReducer.actions
export default timerReducer.reducer
