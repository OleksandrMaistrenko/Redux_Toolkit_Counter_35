import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_COUNTER_VALUE = 0;

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: INITIAL_COUNTER_VALUE,
  },
  reducers: {
    incrementCounter: (state) => {
      state.value += 1;
    },
    decrementCounter: (state) => {
      state.value -= 1;
    },
    resetCounter: (state) => {
      state.value = INITIAL_COUNTER_VALUE;
    },
  },
});
export default counterSlice.reducer;
export const { incrementCounter, decrementCounter, resetCounter } =
  counterSlice.actions;
