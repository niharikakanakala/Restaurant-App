import "./category-item.styles.scss";

const CategoryItem = ({ image, title, price, servingSize }) => {
  return (
    <div className="container">
      <img src={image} alt={title} />
      <div className="category-container">
        <h2>{title}</h2>
        <h3>{servingSize}</h3>
      </div>
      <div className="category-body-container">
        <p>${price}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
