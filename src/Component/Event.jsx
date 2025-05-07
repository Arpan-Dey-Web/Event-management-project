import React from "react";
import { Link } from "react-router";

const Event = ({ event }) => {
  const { id, name, thumbnail, category, date, location, entry_fee } = event;
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      className=" rounded-2xl  bg-base-300  "
    >
      <div className=" text-center">
        <img className="w-full object-cover h-60" src={thumbnail} alt="" />
      </div>
      <div className="p-4">
        <h1 className="text-lg font-bold ">{name}</h1>
        <p className="font-semibold">Date: {date}</p>
        <p className="text-sm ">{location}</p>
        <p className="text-sm font-bold">{category}</p>
        <p className="font-medium">Entree Fee: {entry_fee}</p>
        <div className="text-center py-2">
          <Link to={`/event-details/${id}`} className="btn  bg-green-400">
            View More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;
