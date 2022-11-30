import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const BookingModal = ({ furniture, setFurniture }) => {
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const location = form.location.value;
    const phone = form.phone.value;
    const order = {
      customer: user?.displayName,
      email: user?.email,
      product: furniture?.name,
      image: furniture?.image,
      price,
      location,
      phone,
    };
    console.log(order);
    fetch(`http://localhost:5000/bookingOrders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          toast.success("Booking confirmed");
          setFurniture(null);
        } else {
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box rounded-lg relative ">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <form onSubmit={handleBooking}>
            <h2 className="font-bold mt-3 text-xl">{furniture?.name}</h2>
            <input
              type="text"
              name="customer"
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
              required
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
