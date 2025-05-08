import React, { use, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    setUser,
    setLoading,
    signInUser,
    handleloginWithGoogle,
    setLoginEmail,
  } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const handleSignInUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
   
    signInUser(email, password)
      .then((result) => {
        setUser(result);
        setLoading(true);

        Swal.fire({
          title: "Sign in Successfully!",
          icon: "success",
          draggable: true,
        });

        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        Swal.fire({
          title: "Sign in Failed!",
          text: error.message,
          icon: "error",
        });
      });
  };

  const googleLogIn = () => {
    handleloginWithGoogle().then(() => {
      navigate(`${location.state ? location.state : "/"}`);
    });
  };

  return (
    <div>
      <Helmet>
        <title>Eventure | LogIn</title>
      </Helmet>
      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl mt-10 mb-10 card-bg ">
        <h1 className="text-2xl font-bold text-center font">Login</h1>
        <form onSubmit={handleSignInUser} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block paragraph">
              Email
            </label>
            <input onChange={(e)=>{setLoginEmail(e.target.value)}}
              type="email"
              required
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block paragraph">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              required
              placeholder="Your Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <div className="absolute top-10 right-8 hover:cursor-pointer">
              <div
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <FaEye /> : <FaRegEyeSlash />}
              </div>
            </div>

            <div className="flex justify-end text-xs dark:text-gray-600">
              <Link to={"/fogottpassword"}>
                <span className="font text-lg hover:underline">
                  {" "}
                  Forgot Password?
                </span>
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm main-btns font"
          >
            Log In
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
            <span>Log In With Google</span>
          </button>
        </div>
        <p className="text-lg text-center sm:px-6 font">
          Don't have an account?
          <NavLink to={"/signup"} className="underline font">
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
