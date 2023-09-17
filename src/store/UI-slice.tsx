import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Notification = {
  status: string;
  title: string;
  message: string;
};

export type UIState = { showCart: boolean; notification: Notification | null };

const initialUIState: UIState = { showCart: false, notification: null };

const UISlice = createSlice({
  name: "UI",
  initialState: initialUIState,
  reducers: {
    toggleShowCart: (state) => {
      state.showCart = !state.showCart;
    },
    setNotification: (state, action: PayloadAction<Notification | null>) => {
      state.notification = action.payload;
    },
  },
});

export const UIActions = UISlice.actions;
export default UISlice.reducer;
