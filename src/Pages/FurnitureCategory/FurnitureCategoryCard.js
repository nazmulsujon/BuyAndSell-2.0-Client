import React from "react";
import { FaRegCircle } from "react-icons/fa";

const FurnitureCategoryCard = ({ category }) => {
  const {
    name,
    image,
    company,
    condition,
    original_price,
    resale_price,
    description,
    use_time,
    published_date,
    seller,
  } = category;
  const { seller_name, seller_img, location, mobile } = seller;
  return (
    <div className="card w-96 bg-neutral shadow mx-auto">
      <figure>
        <img
          src={image}
          alt="furniture"
          className="w-96 h-80  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center">
          <div className="w-12 h-12 avatar mr-2">
            <img src={seller_img} alt="seller" className="rounded-full" />
          </div>
          <div>
            <p className="badge rounded mr-1">{location}</p> <br />
            <p className="badge  rounded">
              {seller_name} <FaRegCircle className="bg-secondary rounded-full mr-1 ml-1" />
              {mobile}
            </p>
          </div>
        </div>
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{condition}</div>
        </h2>
        <p>
          Company: {company}
          <br />
          Post date: {published_date}
          <br />
          Used time: {use_time}
          <br />
          Original price: <span className="text-red-500 font-semibold">{original_price}</span>
          <br />
          Resale price: <span className="text-red-500 font-semibold">{resale_price}</span>
          <br />
          Description: {description}
        </p>
      </div>
      <div className="card-actions w-64 mx-auto mb-3">
        <button className="btn btn-info w-full rounded">Book Now</button>
      </div>
    </div>
  );
};

export default FurnitureCategoryCard;
