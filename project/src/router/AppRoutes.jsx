import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useDispatch } from "react-redux";

import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { addUser } from "../features/auth/authSlice";
import PublicRoute from "./public/PublicRoute";
import ProtectedRouter from "./provider/ProtectedRouter";
import CreateStartup from "../pages/CreateStartup";
import StartupDetails from "../components/StartupDetails";
import MyStartups from "../components/MyStartups";



const AppRoutes = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    const loggedInUser =
      JSON.parse(localStorage.getItem("loggedinUser")) || null;

    if (loggedInUser) {
      dispatch(addUser(loggedInUser));
    }

  }, [dispatch]);


  const router = createBrowserRouter([
    {

      element: <ProtectedRouter />,
      children: [{
        path: "/",
        element: <Layout />,
        children: [
          {
            path: '',
            element: <Home />
          }, {
            path: "/create-startup",
            element: <CreateStartup />
          },{
            path:"productdetail/:id",
            element:<StartupDetails/>
            
          },{
            path:'my-startups',
            element:<MyStartups/>
          },
        ]
      }
      ]
    }, {
      element: <PublicRoute />,
      children: [
        {
          path: '/login',
          element: <Login />
        }, {
          path: '/register',
          element: <Register />
        }
      ]
    }
  ])



  return <RouterProvider router={router} />;

};

export default AppRoutes;