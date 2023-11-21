import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { randomScrambleForEvent } from 'cubing/scramble'

const initialState = {
  currentScramble: "",
  loading: true,
}

const fetchScramble = createAsyncThunk('scrambler/generate', async (event, _) => {
  const scramble = await randomScrambleForEvent(event)
  return scramble.toString()
})

createAsyncThunk()
export const scrambleSlice = createSlice({
  name: 'scramble',
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchScramble.fulfilled, (state, action) => {
        state.currentScramble = action.payload
        state.loading = false
      })

    builder.addCase(fetchScramble.pending, (state, _) => {
      state.loading = true
    })
  }


})

// export const { generate } = scrambleSlice.actions
export { fetchScramble }
export const {setMode} = scrambleSlice.actions
export {
  initialState
}
export default scrambleSlice.reducer
