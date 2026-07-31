import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { addUser } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";


const AppRoute = () => {
const dispatch=useDispatch()

  const hydredUser=()=>{
   const loggedInuser= JSON.parse(localStorage.getItem('loggedUser'))||null
   if(!loggedInuser){
    alert("invlaid user")
    return
   }
   dispatch(addUser(loggedInuser))

  }

  useEffect(()=>{
    hydredUser()
  },[])

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "product",
        element: <Product />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

  return <RouterProvider router={router} />;
};

export default AppRoute;