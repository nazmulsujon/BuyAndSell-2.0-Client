import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const FurnitureCategories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/categories`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-primary my-5 text-center uppercase">Shop by categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((category) => (
          <CategoriesCard key={category._id} category={category}></CategoriesCard>
        ))}
      </div>
    </section>
  );
};

export default FurnitureCategories;
