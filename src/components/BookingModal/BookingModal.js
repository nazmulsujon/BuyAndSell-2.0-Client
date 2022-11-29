import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const BookingModal = ({ furniture }) => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box rounded-lg relative ">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <form>
            <h2 className="font-bold mt-3 text-xl">{furniture?.name}</h2>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full rounded my-2 bg-neutral"
              defaultValue={user?.displayName}
              readOnly
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="input input-bordered w-full rounded my-2 bg-neutral"
              defaultValue={user?.email}
              readOnly
            />
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="input input-bordered w-full rounded my-2 bg-neutral"
              defaultValue={furniture?.resale_price}
              readOnly
            />
            <input
              type="text"
              placeholder="Meeting location"
              name="location"
              className="input input-bordered w-full rounded my-2"
            ></input>
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className="input input-bordered w-full rounded my-2"
              required
            />

            <input type="submit" className="btn btn-secondary w-full my-2 rounded" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
