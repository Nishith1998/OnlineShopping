import { createSlice } from "@reduxjs/toolkit";

export type CartItem = {
  id: number;
  title: string;
  quantity: number;
  total: number;
  price: number;
};
export type CartState = {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
};

const initialCartState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.total += existingItem.price;
      } else {
        state.items.push(newItem);
      }
      state.totalAmount += newItem.price;
      state.totalQuantity++;
    },
    removeFromCart: (state, action) => {
      const removeItemId = action.payload;
      const existingItem = state.items.find((item) => item.id === removeItemId);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== removeItemId);
        } else {
          existingItem && existingItem.quantity--;
          existingItem.total -= existingItem.price;
        }
        state.totalAmount -= existingItem.price;
        state.totalQuantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
