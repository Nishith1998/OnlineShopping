import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { UIActions } from "../../store/UI-slice";
import { GlobalState } from "../../store";

const CartButton = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state:GlobalState) => state.cart.totalQuantity)

  const myCartHandler = () => {
    dispatch(UIActions.toggleShowCart());
  };
  return (
    <button onClick={myCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
