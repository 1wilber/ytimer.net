import { createSlice } from "@reduxjs/toolkit";
import { generateScrambleSync } from "@/utils";

const initialState = {
  currentScramble: ""
}

export const scrambleSlice = createSlice({
  name: 'scramble',
  initialState,
  reducers: {
    generate: (state) => {
      state.currentScramble = generateScrambleSync(20, 3).scramble
    }
  }
})

export const {generate} = scrambleSlice.actions
export default scrambleSlice.reducer
