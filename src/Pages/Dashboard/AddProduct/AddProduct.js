import { format } from "date-fns";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const date = format(new Date(), "PPPP");
  const navigate = useNavigate();

  const handleAddProduct = (data, e) => {
    let category_id = "";
    if (data.categories === "HOME") {
      category_id = "01";
    } else if (data.categories === "OFFICE") {
      category_id = "02";
    } else if (data.categories === "RESTAURENT") {
      category_id = "03";
    }

    const product = {
      categories: data.categories,
      category_id,
      name: data.name,
      image: data.image,
      published_date: date,
      original_price: data.original_price,
      resale_price: data.resale_price,
      use_time: data.use_time,
      condition: data.condition,
      company: data.company,
      seller: {
        seller_name: data.seller_name,
        email: user?.email,
        seller_img: data.seller_img,
        location: data.location,
        mobile: data.mobile,
      },
      description: data.description,
    };
    console.log(product);

    fetch("http://localhost:5000/category", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success(`${data.name} is added successfully`);
          // navigate("/");
        }
      });
  };

  return (
    <section className="w-10/12 mx-auto shadow-lg rounded-b">
      <div className="p-7">
        <h2 className="uppercase text-2xl font-bold mt-1 mb-2 text-center">Add A Product</h2>
        <hr />
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <div className="flex w-10/12 mx-auto">
            <div className="form-control w-full max-w-sm mr-5">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is Required",
                })}
                className="input input-bordered rounded w-full max-w-xs"
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text">Select Categories</span>
              </label>
              <select
                type="text"
                {...register("categories", {
                  required: "categories is Required",
                })}
                className="select select-bordered rounded w-full max-w-xs"
              >
                <option value="HOME">HOME</option>
                <option value="OFFICE">OFFICE</option>
                <option value="RESTAURENT">RESTAURENT</option>
              </select>
              {errors.categories && <p className="text-red-500">{errors.categories.message}</p>}
            </div>
          </div>
          <div className="flex w-10/12 mx-auto">
            <div className="form-control w-full max-w-sm mr-5">
              <label className="label">
                <span className="label-text">Product Image URL</span>
              </label>
              <input
                type="text"
                {...register("image", {
                  required: "Product Image URL is Required",
                })}
                className="input input-bordered rounded w-full max-w-xs"
              />
              {errors.image && <p className="text-red-500">{errors.mobile.message}</p>}
            </div>
            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text">Product Description</span>
              </label>
              <input
                type="text"
                {...register("description", {
                  required: "Product Description is Required",
                })}
                className="input input-bordered rounded w-full max-w-xs"
              />
              {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            </div>
          </div>
          <div className="flex w-10/12 mx-auto">
            <div className="form-control w-full max-w-sm mr-5">
              <label className="label">
                <span className="label-text">Original Price</span>
              </label>
              <input
                type="number"
                {...register("original_price", {
                  required: "Original Price is Required",
                })}
                className="input input-bordered rounded w-full max-w-xs"
              />
              {errors.original_price && <p className="text-red-500">{errors.original_price.message}</p>}
            </div>
            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text">Resale Price</span>
              </label>
              <input
                type="number"
                {...register("resale_price", {
                  required: "Resale Price is Required",
                })}
                className="input input-bordered rounded w-full max-w-xs"
              />
              {errors.resale_price && <p className="text-red-500">{errors.resale_price.message}</p>}
            </div>
          </div>
          <div className="flex w-10/12 mx-auto">
            <div className="form-control w-full max-w-sm mr-5">
              <label className="label">
                <span className="label-text">Used Time</span>
              </label>
              <input
                type="text"
                {...register("use_time", {
                  required: "Used Time is Required",
                })}
                className="input input-bordered rounded w-full max-w-xs"
              />
              {errors.use_time && <p className="text-red-500">{errors.use_time.message}</p>}
            </div>
            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text">Condition Type</span>
              </label>
              <select
                type="text"
                {...register("condition", {
                  required: "Condition is Required",
                })}
                className="select select-bordered rounded w-full max-w-xs"
              >
                <option value="Good">Good</option>
                <option value="Excelent">Excelent</option>
                <option value="Fair">Fair</option>
              </select>
              {errors.condition && <p className="text-red-500">{errors.condition.message}</p>}
            </div>
          </div>
          <div className="flex w-10/12 mx-auto">
            <div className="form-control w-full max-w-sm mr-5">
              <label className="label">
                <span className="label-text">Company Name</span>
              </label>
              <input
                type="text"
                {...register("company", {
                  required: "Company Name is Required",
                })}
                className="input input-bordered rounded w-full max-w-xs"
              />
              {errors.company && <p className="text-red-500">{errors.company.message}</p>}
            </div>
            <div className="form-control w-full max-w-sm"></div>
          </div>
          <div className="flex w-10/12 mx-auto">
            <div className="form-control w-full max-w-sm mr-5">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                {...register("seller_name", {
                  required: "Seller Name is Required",
                })}
                className="input input-bordered rounded w-full max-w-xs"
              />
              {errors.seller_name && <p className="text-red-500">{errors.seller_name.message}</p>}
            </div>
            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text">Seller Image URL</span>
              </label>
              <input
                type="text"
                {...register("seller_img", {
                  required: "Photo is Required",
                })}
                className="input input-bordered rounded w-full max-w-xs"
              />
              {errors.seller_img && <p className="text-red-500">{errors.seller_img.message}</p>}
            </div>
          </div>
          <div className="flex w-10/12 mx-auto">
            <div className="form-control w-full max-w-sm mr-5">
              <label className="label">
                <span className="label-text">Mobile</span>
              </label>
              <input
                type="text"
                {...register("mobile", {
                  required: "Mobile number is Required",
                })}
                className="input input-bordered rounded w-full max-w-xs"
              />
              {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
            </div>
            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                {...register("location", {
                  required: "Location is Required",
                })}
                className="input input-bordered rounded w-full max-w-xs"
              />
              {errors.location && <p className="text-red-500">{errors.location.message}</p>}
            </div>
          </div>

          <input className="btn btn-accent w-full mt-4" value="Add Product" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
