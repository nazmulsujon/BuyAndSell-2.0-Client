import React from "react";

const AllBuyersList = ({ buyer, i, handleDelete }) => {
  const { email, name, _id } = buyer;
  return (
    <>
      <tr>
        <th>{i + 1}</th>
        <td className="font-semibold">{name}</td>
        <td>{email}</td>
        <td className=" font-semibold">
          <button
            onClick={() => handleDelete(_id, name)}
            className="btn bg-red-700 hover:bg-red-600 font-bold text-white rounded-lg"
          >
            X
          </button>
        </td>
      </tr>
    </>
  );
};

export default AllBuyersList;
