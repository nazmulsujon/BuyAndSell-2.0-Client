import React from "react";

const MyOrdersList = ({ myOrder, i }) => {
  const { product, image, price } = myOrder;
  return (
    <>
      <tr>
        <th>{i + 1}</th>
        <td>
          {" "}
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20">
              <img src={image} alt="productImg" />
            </div>
          </div>
        </td>
        <td>{product}</td>
        <td className="text-success font-semibold">{price}</td>
        <td className="text-success font-semibold">
          <button className="btn btn-primary font-semibold rounded-lg">Pay Now</button>
        </td>
      </tr>
    </>
  );
};

export default MyOrdersList;
