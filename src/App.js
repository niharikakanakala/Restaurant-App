import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Categories from "./components/categories/categories";
import Navigation from "./components/routes/navigation/navigation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Categories />} />
      </Route>
    </Routes>
  );
};

export default App;
