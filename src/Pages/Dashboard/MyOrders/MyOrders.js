import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Spinner from "../../Shared/Spinner/Spinner";
import MyOrdersList from "./MyOrdersList";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: myOrders = [] } = useQuery({
    queryKey: ["myOrders"],
    queryFn: async () => {
      const res = await fetch(`https://assignment-12-resale-product-server.vercel.app/myOrders/${user?.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  //   console.log(myOrders);

  if (myOrders.lenght === 0) {
    return (
      <div className="text-center">
        <Spinner></Spinner>
      </div>
    );
  }

  return (
    <section className="w-11/12	mx-auto shadow-lg p-5 rounded-b">
      <h2 className="uppercase text-2xl font-bold mt-1 mb-2">my orders</h2>
      <hr />
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-info">
              <th></th>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {myOrders.map((myOrder, i) => (
              <MyOrdersList key={myOrder._id} myOrder={myOrder} i={i}></MyOrdersList>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyOrders;
