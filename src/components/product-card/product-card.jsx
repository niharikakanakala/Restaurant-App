import "./product-card.styles.scss";

import Button from "../button/button";

const ProductCard = ({ id, image, title, price }) => {
  return (
    <div key={id} className="product-card-container">
      <img src={image} alt={title} />
      <div className="footer">
        <span className="title">{title}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
};

export default ProductCard;
