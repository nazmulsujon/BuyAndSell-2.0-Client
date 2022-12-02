import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import ReportedItemsCard from "./ReportedItemsCard";

const ReportedItems = () => {
  const { id } = useParams();

  const { data: reportedItems = [], refetch } = useQuery({
    queryKey: ["reportedItems"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/furniture/reported/${id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  //   console.log(reportedItems);

  const handleDeleteItem = (id) => {
    const procced = window.confirm("Are you sure to delete?");
    console.log(alert);
    if (procced) {
      fetch(`http://localhost:5000/reportedFurniture/${id}`, {
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

  if (reportedItems.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <h2 className="text-4xl font-semibold ">No Items Found!</h2>
      </div>
    );
  }
  return (
    <section>
      <h2 className="uppercase text-2xl font-bold mt-1 mb-2 text-center">Reported Items {reportedItems.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-10">
        {reportedItems?.length &&
          reportedItems.map((reportedItem) => (
            <ReportedItemsCard
              key={reportedItem._id}
              reportedItem={reportedItem}
              handleDeleteItem={handleDeleteItem}
            ></ReportedItemsCard>
          ))}
      </div>
    </section>
  );
};

export default ReportedItems;
