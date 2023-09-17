import "./App.css";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import { RootState, useAppDispatch, useAppSelector } from "./store";
import { useEffect } from "react";
import { getCartData, sendCartData } from "./store/Cart-slice";

let appInitialized = true;

function App() {
  const dispatch = useAppDispatch();
  const showCart = useAppSelector((state: RootState) => state.ui.showCart);
  const cart = useAppSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(getCartData());
  }, []);
  useEffect(() => {
    if (appInitialized) {
      appInitialized = false;
      return;
    }
    if(cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

