import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BookingModal from "../../components/BookingModal/BookingModal";
import Spinner from "../Shared/Spinner/Spinner";
import FurnitureCategoryCard from "./FurnitureCategoryCard";

const FurnitureCategory = () => {
  const { id } = useParams();
  const [furniture, setFurniture] = useState(null);

  const { data: furnitureCategory = [] } = useQuery({
    queryKey: ["furnitureCategory"],
    queryFn: async () => {
      const res = await fetch(`https://assignment-12-resale-product-server.vercel.app/category/${id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  if (furnitureCategory.length === 0) {
    return (
      <div className="text-center">
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-10">
        {furnitureCategory?.length &&
          furnitureCategory.map((category) => (
            <FurnitureCategoryCard
              key={category._id}
              category={category}
              setFurniture={setFurniture}
            ></FurnitureCategoryCard>
          ))}
      </div>
      {furniture && <BookingModal furniture={furniture} setFurniture={setFurniture}></BookingModal>}
    </section>
  );
};

export default FurnitureCategory;
