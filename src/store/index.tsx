import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer, { UIState } from "./UI-slice";
import cartSliceReducer, { CartState } from "./Cart-slice";

export type GlobalState = {
    ui: UIState,
    cart: CartState
}

const store = configureStore({ reducer: { ui: uiSliceReducer, cart: cartSliceReducer } });

export default store;
