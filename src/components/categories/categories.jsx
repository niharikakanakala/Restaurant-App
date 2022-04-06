import { meals } from "../../data";
import { Outlet } from "react-router";
import CategoryItem from "../category-item/category-item";
import "./categories.styles.scss";

const Categories = () => {
  return (
    <div>
      <Outlet />
      <div className="categories-container">
        {meals.map((meal) => (
          <CategoryItem
            key={meal.id}
            title={meal.title}
            image={meal.image}
            price={meal.price}
            servingSize={meal.servingSize}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
