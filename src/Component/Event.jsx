import React from "react";

const Event = ({ event }) => {
  const { name, thumbnail, category, date, location, entry_fee, description } =
    event;
  return (
    <div className=" rounded-2xl  bg-base-300 ">
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
          <button className="btn  bg-green-400">View More Details</button>
        </div>
      </div>
    </div>
  );
};

export default Event;
