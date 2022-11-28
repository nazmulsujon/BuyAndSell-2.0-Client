import React from "react";

const CategoriesCard = ({ category }) => {
  console.log(category);
  const { name, image } = category;
  return (
    <div className="card w-96 bg-neutral mx-auto rounded">
      <figure className="px-10 pt-10">
        <img src={image} alt="categoriesIMG" className="rounded-xl w-72 h-72" />
      </figure>
      <div className="card-body items-center text-center">
        <div className="card-actions w-72">
          <button className="btn btn-info w-full rounded">{name}</button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
