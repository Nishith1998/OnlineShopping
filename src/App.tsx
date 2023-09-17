import { useSelector } from "react-redux";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Products from "./components/Shop/Products";
import { GlobalState } from "./store";

function App() {
  const showCart = useSelector((state: GlobalState) => state.ui.showCart);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
