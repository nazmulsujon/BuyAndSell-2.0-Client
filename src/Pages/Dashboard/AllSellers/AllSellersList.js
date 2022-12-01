import React from "react";

const AllSellersList = ({ seller, i, handleDelete }) => {
  const { name, email, _id } = seller;
  return (
    <>
      <tr>
        <th>{i + 1}</th>
        <td className="font-semibold">{name}</td>
        <td>{email}</td>
        <td className=" font-semibold">
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-red-700 hover:bg-red-600 font-bold text-white rounded-lg"
          >
            X
          </button>
        </td>
        <td className=" font-semibold">
          <button className="btn font-bold rounded-lg">Verify</button>
        </td>
      </tr>
    </>
  );
};

export default AllSellersList;
