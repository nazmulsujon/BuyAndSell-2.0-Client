import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Fade } from "react-reveal";
import Spinner from "../../Shared/Spinner/Spinner";
import AdvertiseFurnitureCard from "./AdvertiseFurnitureCard";

const AdvertiseFurniture = () => {
  const { data: advertiseFurniture = [] } = useQuery({
    queryKey: ["advertiseFurniture"],
    queryFn: async () => {
      const res = await fetch(`https://assignment-12-resale-product-server.vercel.app/advertiseCategory`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  if (advertiseFurniture.length === 0) {
    return <div></div>;
  }

  return (
    <section>
      <Fade left>
        <h2 className="uppercase text-2xl font-bold mt-10 mb-2 text-center">Advertised Items</h2>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-5">
        {advertiseFurniture?.length &&
          advertiseFurniture.map((furniture) => (
            <AdvertiseFurnitureCard key={furniture._id} furniture={furniture}></AdvertiseFurnitureCard>
          ))}
      </div>
    </section>
  );
};

export default AdvertiseFurniture;
