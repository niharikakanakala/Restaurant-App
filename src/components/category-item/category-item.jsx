import "./category-item.styles.scss";

const CategoryItem = ({ image, title, price }) => {
  return (
    <div className="category-container">
      <img src={image} alt={title} />
      <div className="category-body-container">
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default CategoryItem;
