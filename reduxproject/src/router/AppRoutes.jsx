import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import Layout from "../outlet/Layout";
import Main from "../components/Main";
import ProductDetail from "../components/ProductDetail";

import Login from "../components/Login";
import Register from "../components/Register";

import ProtectedRouter from "./ProtectedRouter";
import PublicProtected from "./PublicProtected";

const router = createBrowserRouter([
  {
    element: <ProtectedRouter />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Main />,
          },
          {
            path: "/productdetail/:id",
            element: <ProductDetail />,
          },
        ],
      },
    ],
  },

  {
    element: <PublicProtected />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;