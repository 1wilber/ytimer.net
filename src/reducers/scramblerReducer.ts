import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { randomScrambleForEvent } from "cubing/scramble";
import { ScrambleReducerState } from "@/modules/scramble/shared/scramble";
import { WCAEvent } from "@/models";

const initialState: ScrambleReducerState = {
  currentScramble: "",
  loading: true,
};

const fetchScramble = createAsyncThunk(
  "scramble/generate",
  async (event: WCAEvent) => {
    const scramble = await randomScrambleForEvent(event);
    return scramble.toString();
  },
);

const scrambleSlice = createSlice({
  name: "scramble",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchScramble.fulfilled, (state, action) => {
      state.currentScramble = action.payload as WCAEvent;
      state.loading = false;
    });

    builder.addCase(fetchScramble.pending, (state) => {
      state.loading = true;
    });
  },
});

const { reducer } = scrambleSlice;
export { initialState };
export { reducer as scrambleReducer, fetchScramble };
