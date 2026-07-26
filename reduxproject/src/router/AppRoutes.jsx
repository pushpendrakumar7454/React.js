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
import Cart from "../components/Cart";
import Electonic from "../components/Electonic";
import Fashion from "../components/Fashion";
import Furniture from "../components/Furniture";
import Sports from "../components/Sports";
import Accessories from "../components/Accessories";
import Product from "../pages/Product";

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
          {path:"/product",
          element:<Product/>},
          {
            path:"/cart",
            element:<Cart/>
          },{
            path:"/electronic",
            element:<Electonic/>
          },{
            path:"/fashion",
            element:<Fashion/>
          },{
            path:"/kitchen",
            element:<Furniture/>
          },{
            path:"/sports",
            element:<Sports/>
          },{
            path:"/accessories",
            element:<Accessories/>
          }
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