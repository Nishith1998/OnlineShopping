import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import { GlobalState } from "./store";
import { useEffect } from "react";
import { UIActions } from "./store/UI-slice";

let appInitialized = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state: GlobalState) => state.ui.showCart);
  const cart = useSelector((state: GlobalState) => state.cart);

  // useEffect(() => {
  //   async function getCartItems() {
  //     const response = await fetch(
  //       "https://real-time-emp-8518f-default-rtdb.firebaseio.com/cart.json"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Something went wrong");
  //     }
  //     const cartItems = await response.json();
  //     dispatch(cartActions.setCartItems(cartItems));
  //   }

  //   getCartItems();
  // }, []);
  useEffect(() => {
    if (appInitialized) {
      appInitialized = false;
      return;
    }
    async function addToCartAPI() {
      dispatch(
        UIActions.setNotification({
          status: "pending",
          title: "Adding to cart",
          message: "pending",
        })
      );
      const response = await fetch(
        "https://real-time-emp-8518f-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("reponse not ok");
      }
      dispatch(
        UIActions.setNotification({
          status: "success",
          title: "Added to cart",
          message: "success",
        })
      );
    }

    addToCartAPI().catch(() => {
      dispatch(
        UIActions.setNotification({
          status: "error",
          title: "adding cart failed",
          message: "error",
        })
      );
    });
  }, [cart, dispatch]);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
