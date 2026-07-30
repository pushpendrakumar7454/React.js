import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from '../../layout/Layout'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
               {
                path:"",
                element:<Home/>
               }
            ]
        },{
            path:"/login",
            element:<Login/>
        },{
            path:"/register",
            element:<Register/>
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRoutes
