import { CartItem, cartActions } from "../../store/Cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useAppDispatch } from "../../store";

const ProductItem = (props: {
  id: number;
  title: string;
  price: number;
  description: string;
}) => {
  const dispatch = useAppDispatch();
  const { id, title, price, description } = props;

  const addToCartHandler = () => {
    const newItem: CartItem = {
      id: id,
      title: title,
      quantity: 1,
      total: price,
      price: price,
    };
    dispatch(cartActions.addItemToCart(newItem));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
