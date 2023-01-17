import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    changeTeme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { changeTeme } = uiSlice.actions;

export default uiSlice.reducer;
