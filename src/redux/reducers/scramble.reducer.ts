import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { randomScrambleForEvent } from "cubing/scramble";
import { WCAEvent } from "@/models";
import { ScrambleState } from "../states";

const initialState: ScrambleState = {
  current: "",
  loading: true,
};

const fetch = createAsyncThunk(
  "scramble/fetch",
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
    builder.addCase(fetch.fulfilled, (state, action) => {
      state.current = action.payload as WCAEvent;
      state.loading = false;
    });

    builder.addCase(fetch.pending, (state) => {
      state.loading = true;
    });
  },
});

const { reducer } = scrambleSlice;
export { reducer, fetch, initialState };
