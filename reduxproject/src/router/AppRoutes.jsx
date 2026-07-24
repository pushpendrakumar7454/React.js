
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from '../outlet/Layout'
import Login from '../components/Login'
import Register from '../components/Register'

const AppRoutes = () => {

  const router=createBrowserRouter([{
    path:"/",
    element:<Layout/>
  },
  {
    path:"Login",
    element:<Login/>
  },
  {
    path:"register",
    element:<Register/>
  }
])

    return <RouterProvider router={router}/>
}

export default AppRoutes
