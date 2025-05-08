import React, { use } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Context/AuthContext";
import { NavLink } from "react-router";
import Swal from "sweetalert2";

const ForgottPassword = () => {
  const { loginEmail } = use(AuthContext);

  const handleforgottPassword = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Redirecting to Your Email!",
      icon: "success",
      draggable: true,
    });
    window.location.href = "https://mail.google.com";
  };
  return (
    <div>
      <Helmet>
        <title>Eventure | Forgott Password</title>
      </Helmet>
      <div className="flex flex-col mx-auto w-full max-w-md p-12 space-y-4 text-center card-bg mb-10 mt-10 rounded-2xl">
        <h1 className="text-3xl font-semibold font">Forgott Password</h1>

        <form onSubmit={handleforgottPassword} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              defaultValue={loginEmail}
              required
              placeholder="Email address"
              className=" rounded-2xl dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 p-4"
            />
            {/* <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="text"
              name="password"
              placeholder="Password"
              className=" rounded-2xl dark:border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 p-4 mt-2 "
            /> */}
            <span className="paragraph hover:underline flex justify-end underline  mt-2 ">
              <NavLink to={"/login"}>
                <p>Back To Login Page</p>
              </NavLink>
            </span>
          </div>
          <div className="flex justify-between"></div>
          <button
            type="submit"
            className="px-8 py-3 space-x-2 font-semibold rounded-2xl  main-btns font"
          >
            Forgott Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgottPassword;
