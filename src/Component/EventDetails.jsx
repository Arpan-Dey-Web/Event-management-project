import React from "react";
import { Helmet } from "react-helmet-async";
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
    <div className="py-10   ">
        <Helmet>
              <title>Eventure | Event Details</title>
            </Helmet>
      <div className=" rounded-2xl  bg-base-300 ">
        <div className="text-center">
          <img
            className="w-full rounded-2xl object-cover "
            src={thumbnail}
            alt=""
          />
        </div>
        <div className="p-4 card-bg  rounded-2xl">
          <h1 className="text-4xl font-bold font">{name}</h1>
          <p className="font-semibold text-lg paragraph">Date: {date}</p>
          <p className="text-lg  paragraph">{location}</p>
          <p className="text-lg font-bold paragraph">{category}</p>
          <p className="font-medium paragraph">
            Entree Fee: {entry_fee} Doller
          </p>
          <p className="paragraph font-medium ">{description}</p>
          <div className="mt-5">
            <NavLink to={"/"}>
              <button className="btn main-btns">Back to Home Page</button>
            </NavLink>
          </div>

          <div className="p-5 shadow-sm bg-[#2F2F3B]  flex flex-col max-w-3xl mx-auto justify-center items-center mt-10 rounded-2xl">
            <div>
              <h1 className="font-extrabold mb-5 text-4xl font">
                Reserve Your Seat
              </h1>
            </div>
            <form
              onSubmit={handleReserveSeat}
              className="bg-[#454154] p-6 rounded-xl  space-y-4 shadow-md"
            >
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-[#CFCFCF] text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-lg bg-[#292933] text-[#F5F5F5] placeholder-[#B0B0B0] border border-[#292933] focus:border-[#9C27B0]"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-[#CFCFCF] text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-lg bg-[#292933] text-[#F5F5F5] placeholder-[#B0B0B0] border border-[#292933] focus:border-[#9C27B0]"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn bg-[#3A324A] hover:bg-[#625170] text-white  transition-colors duration-200"
                >
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
