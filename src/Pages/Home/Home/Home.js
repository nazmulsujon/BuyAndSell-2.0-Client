import React from "react";
import AdvertiseFurniture from "../AdvertiseFurniture/AdvertiseFurniture";
import Banner from "../Banner/Banner";
import FurnitureCategories from "../FurnitureCategories/FurnitureCategories";
import RecommendToBuy from "../RecommedToBuy/RecommendToBuy";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AdvertiseFurniture></AdvertiseFurniture>
      <FurnitureCategories></FurnitureCategories>
      <RecommendToBuy></RecommendToBuy>
    </div>
  );
};

export default Home;
