import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import AllBuyersList from "./AllBuyersList";

const AllBuyers = () => {
  const { data: allBuyers = [], refetch } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/allBuyers`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id, buyer) => {
    const procced = window.confirm("Are you sure to delete?");
    console.log(alert);
    if (procced) {
      fetch(`http://localhost:5000/buyer/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          if (data.deletedCount > 0) {
            toast.success(`deleted seller ${buyer} successfully`);
            refetch();
          }
        });
    }
  };
  return (
    <div>
      <section className="w-11/12	mx-auto shadow-lg p-5 rounded-b">
        <h2 className="uppercase text-2xl font-bold mt-1 mb-2">All Buyers</h2>
        <hr />
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="text-info">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allBuyers.map((buyer, i) => (
                <AllBuyersList key={buyer._id} buyer={buyer} i={i} handleDelete={handleDelete}></AllBuyersList>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AllBuyers;
