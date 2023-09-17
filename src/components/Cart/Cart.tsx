import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { GlobalState } from "../../store";

const Cart = () => {
  const cartItems = useSelector((state: GlobalState) => state.cart.items);
  const totalAmount = useSelector((state: GlobalState) => state.cart.totalAmount);
  const totalQuantity = useSelector((state: GlobalState) => state.cart.totalQuantity);
  // const [totalAmount, totalQuantity] = useSelector((state: GlobalState) => [
  //   state.cart.totalAmount,
  //   state.cart.totalQuantity,
  // ]); // this is wrong way because destructuring will give new reference every time.
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <div className={classes.footer}>
        <div>Total Amount: {totalAmount}</div>
        <div>Total Quantity: {totalQuantity}</div>
      </div>
    </Card>
  );
};

export default Cart;
