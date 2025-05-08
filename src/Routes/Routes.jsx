import { createBrowserRouter, RouterProvider } from "react-router";

import Login from "../Component/Login";
import MyProfile from "../Component/MyProfile";
import Home from "../Pages/Home";
import Root from "../Pages/Root";
import Register from "../Component/Register";
import EventDetails from "../Component/EventDetails";
import PrivateRoute from "./PrivateRoute";
import Error from "../Component/Error";
import Loading from "../Component/Loading";
import About from "../Pages/About";
import ForgottPassword from "../Component/ForgottPassword";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <Loading></Loading>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/events.json"),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: Register,
      },
      {
        path: "about",
        Component: About,

      },
      {
        path: "myprofile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/event-details/:id",
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/events.json"),
      },
      {
        path: "/fogottpassword",
        Component:ForgottPassword
      }
    ],
  },
]);
