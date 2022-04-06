import React from "react";
import { Route, Routes } from "react-router";
import Categories from "./components/categories/categories";
import Navigation from "./components/routes/navigation/navigation";
import Shop from "./components/routes/shop/shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Categories />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
