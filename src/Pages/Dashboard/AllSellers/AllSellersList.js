import React from "react";
import useVerified from "../../../hooks/useVerified";

const AllSellersList = ({ seller, i, handleDelete, handleVarify }) => {
  const { name, email, _id } = seller;
  const [isVerified] = useVerified(email);
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
          {isVerified ? (
            <button className="btn bg-green-500 hover:bg-green-600 font-bold rounded-lg">Verifid</button>
          ) : (
            <button onClick={() => handleVarify(_id, name)} className="btn font-bold rounded-lg">
              Verify
            </button>
          )}
        </td>
      </tr>
    </>
  );
};

export default AllSellersList;
