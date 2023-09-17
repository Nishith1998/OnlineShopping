import { createSlice } from "@reduxjs/toolkit";

export type UIState = { showCart: boolean };

const initialUIState: UIState = { showCart: false };

const UISlice = createSlice({
  name: "UI",
  initialState: initialUIState,
  reducers: {
    toggleShowCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const UIActions = UISlice.actions;
export default UISlice.reducer;
