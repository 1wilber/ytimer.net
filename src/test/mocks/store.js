import configureStore from 'redux-mock-store' //ES6 modules
import { initialState as scramblerDefaultState } from '@/reducers/scramblerReducer'
import { initialState as timerDefaultState } from '@/reducers/timerReducer'
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk])

export const store = mockStore({
  timer: timerDefaultState,
  scrambler: scramblerDefaultState
})


