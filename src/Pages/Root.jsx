import React from "react";
import { Outlet, useLoaderData } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Root = () => {


  return (
    <div className="bg-[#1E1E2F]">
      <div className="w-11/12 mx-auto py-3 md:py-5 lg:py-7 ">
        {/* navvar with header section */}
        <header >
          <Navbar />
        </header>
        {/* main section with dynamically display */}
        <main>
          <Outlet />
        </main>
        {/* footer section  */}
        <Footer />
      </div>
    </div>
  );
};

export default Root;
