import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Spinner from "../../Shared/Spinner/Spinner";
import CategoriesCard from "./CategoriesCard";
import axios from "axios";

const FurnitureCategories = () => {
  const [categories, setCategories] = useState([]);

  // use axios get method
  useEffect(() => {
    axios({
      method: "get",
      url: "https://assignment-12-resale-product-server.vercel.app/categories",
    }).then((res) => {
      setCategories(res.data);
    });
  }, []);

  if (categories.length === 0) {
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );
  }
  return (
    <section className="my-10">
      <Fade left>
        <h2 className="text-2xl font-bold text-primary my-5 text-center uppercase">Shop by categories</h2>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {categories.map((category) => (
          <CategoriesCard key={category._id} category={category}></CategoriesCard>
        ))}
      </div>
    </section>
  );
};

export default FurnitureCategories;
