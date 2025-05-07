import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
const Register = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { createUser, updateUserProfile, setUser, handleloginWithGoogle } =
    use(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.PhotoURL.value;

    //   create user
    createUser(email, password)
      .then((result) => {
        Swal.fire({
          title: "Account Created!",
          icon: "success",
          draggable: true,
        });

        const userData = result.user;
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...userData, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            setUser(userData);
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Already have a account in this",
        });
        return;
      });
  };

  const googleLogIn = () => {
    handleloginWithGoogle();
  };

  return (
    <div>
      <div className="w-full mx-auto max-w-md mt-10 mb-10 p-8 space-y-3 rounded-xl card-bg">
        <h1 className="text-2xl font-bold text-center font">Register Now</h1>
        <form onSubmit={handleSignUp} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block  paragraph">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              required
            />
            <label htmlFor="username" className="block paragraph">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              required
            />

            <label htmlFor="username" className="block paragraph">
              PhotoURL
            </label>
            <input
              type="text"
              name="PhotoURL"
              id="username"
              placeholder="Enter Your Image URL"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              required
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block paragraph">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              required
            />
            <div className="absolute top-10 right-8 hover:cursor-pointer">
              <div
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? <FaEye /> : <FaRegEyeSlash />}
              </div>
            </div>

            <div className="flex justify-end text-xs dark:text-gray-600"></div>
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm font main-btns"
          >
            Register
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm paragraph">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={googleLogIn}
            aria-label="Log in with Google"
            className="p-3 btn w-full btn-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>

            <span>Sign Up With Google</span>
          </button>
        </div>
        <p className="text-lg text-center sm:px-6 font ">
          Already have an account?
          <Link to={"/login"} className="underline font">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
