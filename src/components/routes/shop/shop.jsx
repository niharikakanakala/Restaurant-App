import { useContext } from "react";

import { ProductContext } from "../../../contexts/products.contexts";
import ProductCard from "../../product-card/product-card";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map(({ id, title, image, price, servings }) => (
        <ProductCard id={id} title={title} price={price} image={image} />
      ))}
    </div>
  );
};

export default Shop;
