import React from "react";
import Banner from "../Banner/Banner";
import FurnitureCategories from "../FurnitureCategories/FurnitureCategories";
import RecommendToBuy from "../RecommedToBuy/RecommendToBuy";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FurnitureCategories></FurnitureCategories>
      <RecommendToBuy></RecommendToBuy>
    </div>
  );
};

export default Home;
