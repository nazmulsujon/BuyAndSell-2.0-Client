import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import useVerified from "../../../hooks/useVerified";
import tickmark from "../../../assets/tickmark.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MyProductsCard = ({ product, handleDeleteProduct }) => {
  const navigate = useNavigate();
  const {
    _id,
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
  } = product;
  const { seller_name, seller_img, location, mobile, email } = seller;
  const [isVerified] = useVerified(email);

  const handleAdvertiseFurniture = () => {
    const advertiseFurniture = {
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
    };
    // console.log(advertiseFurniture);
    fetch("https://assignment-12-resale-product-server.vercel.app/advertiseCategory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(advertiseFurniture),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success(`Advertized successfully`);
          navigate("/");
        }
      });
  };

  return (
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
      <div className="flex card-actions">
        <div className="w-56 mx-auto mb-3 flex">
          <button onClick={handleAdvertiseFurniture} className={`btn btn-sm btn-info w-full rounded`}>
            Advertise
          </button>
        </div>
        <button
          onClick={() => handleDeleteProduct(_id)}
          className="btn btn-sm btn-secondary rounded-lg mr-5 normal-case"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default MyProductsCard;
