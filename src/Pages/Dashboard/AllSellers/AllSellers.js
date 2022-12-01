import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import AllSellersList from "./AllSellersList";

const AllSellers = () => {
  const { data: allSellers = [], refetch } = useQuery({
    queryKey: ["allSellers"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/allSellers`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id, seller) => {
    const procced = window.confirm("Are you sure to delete?");
    console.log(alert);
    if (procced) {
      fetch(`http://localhost:5000/seller/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          if (data.deletedCount > 0) {
            toast.success(`deleted seller ${seller} successfully`);
            refetch();
          }
        });
    }
  };

  const handleVarify = (id) => {
    fetch(`http://localhost:5000/seller/verify/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("verifid");
          refetch();
        }
      });
  };

  return (
    <div>
      <section className="w-11/12	mx-auto shadow-lg p-5 rounded-b">
        <h2 className="uppercase text-2xl font-bold mt-1 mb-2">All Sellers</h2>
        <hr />
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="text-info">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Manage</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {allSellers.map((seller, i) => (
                <AllSellersList
                  key={seller._id}
                  seller={seller}
                  i={i}
                  handleDelete={handleDelete}
                  handleVarify={handleVarify}
                ></AllSellersList>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AllSellers;
