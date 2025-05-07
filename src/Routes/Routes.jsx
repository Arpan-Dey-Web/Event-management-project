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
        loader: () => fetch("/public/events.json"),
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
        loader: () => fetch("/public/events.json"),
      },
    ],
  },
]);
