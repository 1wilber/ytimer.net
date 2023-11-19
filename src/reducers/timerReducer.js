import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTimes: [],
  currentEvent: '333',
  avgClicked: 5,
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

    setAvgCliked: (state, { payload }) => {
      return Object.assign({}, state, { avgClicked: payload })
    },

    setCurrentEvent: (state, action) => {
      return Object.assign({}, state, { currentEvent: action.payload })
    }
  }
})

export const { setTimerStatus, addTime, removeAll, removeTime, setAvgCliked, setCurrentAvgs, setCurrentEvent } = timerReducer.actions
export {
  initialState
}
export default timerReducer.reducer
