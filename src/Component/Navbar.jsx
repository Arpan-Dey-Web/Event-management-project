import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/myprofile"}>My Profile</NavLink>
      </li>
    </>
  );
  const { user, signOutUser } = use(AuthContext);

  // logout function
  const handleLogOut = () => {
    signOutUser();
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <img className="w-8" src="/public/subscription_4172162.png" alt="" />
          <Link to={"/"} className="text-2xl font-bold">
            Eventure
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="tooltip" data-tip={user ? user.displayName : ""}>
          <div className="avatar">
            <div className=" rounded-full w-10 ">
              <img
                className="w-6"
                src={`${
                  user
                    ? user.photoURL
                    : "https://cdn-icons-png.flaticon.com/128/16998/16998906.png"
                }`}
              />
            </div>
          </div>
        </div>

        {user ? (
          <button onClick={handleLogOut} className="btn">
            LogOut
          </button>
        ) : (
          <NavLink to={"/login"}>LogIn</NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
