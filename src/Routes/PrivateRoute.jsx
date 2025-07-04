import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, Navigate, useLocation } from "react-router";
import Loading from "../Component/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
