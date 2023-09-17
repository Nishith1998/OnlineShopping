import { Dispatch, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UIActions } from "./UI-slice";

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
  changed: boolean;
};

const initialCartState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  changed: false
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    setCartItems: (state, action: PayloadAction<CartState>) => {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
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
      state.changed = true;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
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
        state.changed = true;
      }
    },
  },
});

export const sendCartData = (cart: CartState) => {
  return async (dispatch: Dispatch) => {
    dispatch(
      UIActions.setNotification({
        status: "pending",
        title: "Adding to cart",
        message: "pending",
      })
    );
    async function addToCartApi() {
      const response = await fetch(
        "https://real-time-emp-8518f-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("response not ok");
      }
    }

    try {
      await addToCartApi();
      dispatch(
        UIActions.setNotification({
          status: "success",
          title: "Added to cart",
          message: "success",
        })
      );
    } catch {
      dispatch(
        UIActions.setNotification({
          status: "error",
          title: "Failed to add",
          message: "error",
        })
      );
    }
  };
};

export const getCartData = () => {
  return async (dispatch: Dispatch) => {
    dispatch(
      UIActions.setNotification({
        status: "pending",
        title: "Getting cart items",
        message: "pending",
      })
    );
    async function getCartApi() {
      const response = await fetch(
        "https://real-time-emp-8518f-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("response not ok");
      }
      return await response.json();
    }

    try {
      const cartItems = await getCartApi();
      console.log("cartItems: ", cartItems);
      cartItems.changed = false;
      dispatch(cartActions.setCartItems(cartItems ?? initialCartState));
      dispatch(
        UIActions.setNotification(null)
      );
    } catch {
      dispatch(
        UIActions.setNotification({
          status: "error",
          title: "Failed to load cart",
          message: "error",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
