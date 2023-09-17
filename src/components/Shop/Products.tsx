import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const PRODUCTS = [
  { id: 1, title: "Amazing", price: 10, description: "Amazing product" },
  { id: 2, title: "Best", price: 20, description: "Best product" },
  { id: 3, title: "Cool", price: 30, description: "Cool product" },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
