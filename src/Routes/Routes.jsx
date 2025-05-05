import { createBrowserRouter, RouterProvider } from "react-router";

import Login from "../Component/Login";
import MyProfile from "../Component/MyProfile";
import Home from "../Pages/Home"
import Root from "../Pages/Root";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: <h1>loading.......</h1>,
    children: [
      {
        index: true,
        Component:Home ,
        loader: ()=>fetch("/public/events.json")
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "myprofile",
        Component: MyProfile,
      },
    ],
  },
]);
