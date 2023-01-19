import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { authThunk, loginThunk } from "./thunk";

export const authSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(loginThunk.pending, (state) => {
        state.loading = true;
      })
      .addMatcher(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = localStorage.getItem("token");
        state.refreshToken = localStorage.getItem("refreshtoken");
      })
      .addMatcher(loginThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
