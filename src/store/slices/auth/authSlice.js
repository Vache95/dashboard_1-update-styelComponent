import { createSlice, isAllOf } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { authThunk, loginThunk } from "./thunk";

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isAllOf(loginThunk.pending, authThunk.pending), (state) => {
        state.loading = true;
      })
      .addMatcher(isAllOf(loginThunk.fulfilled, authThunk.fulfilled), (state, action) => {
        console.log(action.payload, "payload");
        state.loading = false;
        state.user = action.payload;
        state.token = localStorage.getItem("token");
        state.refreshToken = localStorage.getItem("refreshtoken");
      })
      .addMatcher(isAllOf(loginThunk.rejected, authThunk.rejected), (state) => {
        state.loading = false;
      });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
