import React from "react";
import Fade from "react-reveal/Fade";

import { PhotoProvider, PhotoView } from "react-photo-view";
import useVerified from "../../../hooks/useVerified";
import tickmark from "../../../assets/tickmark.png";
import { FaRegCircle } from "react-icons/fa";

const AdvertiseFurnitureCard = ({ furniture }) => {
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
    seller_name,
    seller_img,
    location,
    mobile,
    email,
  } = furniture;

  const [isVerified] = useVerified(email);

  return (
    <Fade bottom>
      <div className="card w-96 bg-neutral shadow mx-auto my-5">
        <figure>
          <PhotoProvider>
            <PhotoView src={image}>
              <img
                src={image}
                alt="furniture"
                className="w-96 h-80  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <div className="flex items-center">
            <div className="w-12 h-12 avatar mr-2">
              <img src={seller_img} alt="seller" className="rounded-full" />
            </div>
            <div>
              <div className="flex justify-start">
                <div className="flex items-center">
                  <p className="badge rounded font-semibold ">{seller_name}</p> <br />
                  {isVerified && <img src={tickmark} alt="tickmark" className="w-5" />}
                </div>
              </div>
              <p className="badge  rounded">
                {location} <FaRegCircle className="bg-secondary rounded-full mr-1 ml-1" />
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
            Original price: <span className="text-error font-semibold">{original_price}</span>
            <br />
            Resale price: <span className="text-success font-semibold">{resale_price}</span>
            <br />
            Description: {description}
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default AdvertiseFurnitureCard;
