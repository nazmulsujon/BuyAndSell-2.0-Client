import React from "react";
import { useLoaderData } from "react-router-dom";
import Spinner from "../Shared/Spinner/Spinner";
import FurnitureCategoryCard from "./FurnitureCategoryCard";

const FurnitureCategory = () => {
  const furnitureCategory = useLoaderData();

  if (furnitureCategory.length === 0) {
    return (
      <div className="text-center">
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-10">
      {furnitureCategory.map((category) => (
        <FurnitureCategoryCard key={category._id} category={category}></FurnitureCategoryCard>
      ))}
    </div>
  );
};

export default FurnitureCategory;
