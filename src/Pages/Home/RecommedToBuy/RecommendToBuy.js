import React from "react";
import { Link } from "react-router-dom";
import bedImg from "../../../assets/bed.svg";

const RecommendToBuy = () => {
  return (
    <div className="hero py-10 ">
      <div className="hero-content flex-col lg:flex-row shadow-lg py-10 rounded">
        <div className="md:w-2/5 mx-auto">
          <img
            src={bedImg}
            alt="bedImg"
            className="rounded-lg mx-auto max-w-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          />
        </div>

        <div className="md:w-3/5 mx-auto  md:text-left">
          <h1 className="text-3xl font-bold text-secondary">Why shop for secondhand furniture first?</h1>
          <p className="py-6">
            We’re shouting it from the rooftops—secondhand furniture should be your first choice! In fact, well-made
            used furniture can last through generations. Furniture holds memories. We gather around it in times of joy
            and celebration; we curl up with our loved ones on it; we use it to store our most-prized possessions.
            Buying pre-loved furniture adds character to your home through its imperfections and the stories it carries.
            We’re here to continue those stories and create a world where furniture is circular, sustainable, and here
            to stay.
          </p>
          <Link to={`/category/01`} className="btn btn-secondary rounded">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecommendToBuy;
