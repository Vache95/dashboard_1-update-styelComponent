import { configureStore } from "@reduxjs/toolkit";
import { useDispatch,useSelector,TypedUseSelectorHook } from "react-redux";
import ui from "./slices/ui/uiSlice";

export const store = configureStore({
  reducer: {
    ui,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;