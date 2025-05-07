import React from "react";
import { NavLink, useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const EventDetails = () => {
  const allEvents = useLoaderData();

  const params = useParams();
  const id = params.id;

  const event = allEvents.find((events) => events.id == id);

  const { name, thumbnail, category, date, location, entry_fee, description } =
    event;
  const handleReserveSeat = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    Swal.fire({
      title: `Mr/Mrs ${name} succesfully reserved a seat. Your email is ${email} `,
      icon: "success",
      draggable: true,
    });
  };

  return (
    <div className="py-10">
      <div className=" rounded-2xl  bg-base-300 ">
        <div className="text-center">
          <img className="w-full object-cover" src={thumbnail} alt="" />
        </div>
        <div className="p-4">
          <h1 className="text-4xl font-bold ">{name}</h1>
          <p className="font-semibold text-lg">Date: {date}</p>
          <p className="text-lg  text-blue-800">{location}</p>
          <p className="text-lg font-bold">{category}</p>
          <p className="font-medium">Entree Fee: {entry_fee} Doller</p>
          <p className="text-emerald-500 font-medium ">{description}</p>
          <div className="mt-5">
            <NavLink to={"/"}>
              <button className="btn btn-primary">Back to Home Page</button>
            </NavLink>
          </div>

          <div className="p-5 shadow-sm bg-white w-2xl flex flex-col justify-center items-center mt-10 rounded-2xl">
            <div>
              <h1 className="font-extrabold text-4xl">Reserve Your Seat</h1>
            </div>
            <form onSubmit={handleReserveSeat}>
              <div className="flex items-center gap-1 mt-5">
                <label htmlFor="url" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-lg input-success"
                  required
                />
              </div>

              <div className="flex items-center gap-2 mt-2 ">
                <label className="block text-sm font-medium">Email</label>

                <input
                  className="input validator input-lg "
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div className="flex justify-center items-center">
                <button type="submit" className="btn-accent btn mt-4 ">
                  Reserve a Seat
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
