import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "./UI-slice";
import cartSliceReducer from "./Cart-slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: { ui: uiSliceReducer, cart: cartSliceReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
