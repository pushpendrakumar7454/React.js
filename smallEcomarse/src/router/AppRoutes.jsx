import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Product from "../pages/Product";
import Register from "../components/Register";
import Login from "../components/Login";
import ProtectedRouter from "./ProtectedRouter";
import PublicProtected from "./PublicProtected";
import ProductDetail from "../components/ProductDetail";

const router = createBrowserRouter([
    {
        element:<ProtectedRouter/>,
        children:[{
            path:"/",
            element:<Layout/>,
            children:[{
                path:"",
                element:<Home/>
            },{
                path:"/about",
                element:<About/>
            },{
                path:"/product",
                element:<Product/>
            },{
                path:"productdetail/:id",
                element:<ProductDetail/>
            }
        ]
        }
    ]
    },{
        element:<PublicProtected/>,
        children:[
            {
                path:"/login",
                element:<Login/>
            },{
                path:"/register",
                element:<Register/>
            }
        ]
    }
])

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
