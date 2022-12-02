import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Spinner from "../../Shared/Spinner/Spinner";
import MyProductsCard from "./MyProductsCard";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: MyProducts = [], refetch } = useQuery({
    queryKey: ["MyProducts"],
    queryFn: async () => {
      const res = await fetch(`https://assignment-12-resale-product-server.vercel.app/category/seller/${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteProduct = (id) => {
    const procced = window.confirm("Are you sure to delete?");
    console.log(alert);
    if (procced) {
      fetch(`https://assignment-12-resale-product-server.vercel.app/category/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          if (data.deletedCount > 0) {
            toast.success(`deleted successfully`);
            refetch();
          }
        });
    }
  };
  //   console.log(MyProducts);
  if (!MyProducts.length) {
    return (
      <div className="text-center">
        <Spinner></Spinner>
      </div>
    );
  }
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-10">
        {MyProducts.length &&
          MyProducts.map((product) => (
            <MyProductsCard
              key={product._id}
              product={product}
              handleDeleteProduct={handleDeleteProduct}
            ></MyProductsCard>
          ))}
      </div>
    </section>
  );
};

export default MyProducts;
