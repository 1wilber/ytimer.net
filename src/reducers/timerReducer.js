import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTimes: [],
  currentEvent: '333'
}

const timerReducer = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTimerStatus: (state, { payload }) => {
      return { ...state, timerStatus: payload }
    },
    addTime: (state, { payload }) => {
      const newCurrentTimes = [payload, ...state.currentTimes]

      return Object.assign({}, state, { currentTimes: newCurrentTimes})
    },

    removeTime: (state, { payload }) => {
      const newCurrentTimes = state.currentTimes.filter(currentTime => currentTime.id != payload.id)
      return Object.assign({}, state, { currentTimes: newCurrentTimes })
    },

    removeAll: (state) => {
      const newCurrentTimes = state.currentTimes.filter(t => t.event !== state.currentEvent)
      return Object.assign({}, state, { currentTimes: newCurrentTimes })
    },

    setCurrentEvent: (state, action) => {
      return Object.assign({}, state, { currentEvent: action.payload })
    }
  }
})

export const { setTimerStatus, addTime, removeAll, removeTime, setCurrentAvgs, setCurrentEvent } = timerReducer.actions
export {
  initialState
}
export default timerReducer.reducer
