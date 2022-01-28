import React from "react";
import ProductList from "../components/ProductList";
import CategorySection from "../components/CategorySection"

const Home = () => {
  return (
    <div className="container">
      <CategorySection />
      <ProductList />
    </div>
  );
};

export default Home;