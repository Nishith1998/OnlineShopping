import classes from "./CartButton.module.css";
import { UIActions } from "../../store/UI-slice";
import { RootState, useAppDispatch, useAppSelector } from "../../store";

const CartButton = () => {
  const dispatch = useAppDispatch();
  const totalQuantity = useAppSelector(
    (state: RootState) => state.cart.totalQuantity
  );

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
