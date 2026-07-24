import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from '../pages/Home';
import Layout from '../layout/Layout';
import About from '../pages/About';
import  Login  from '../compononets/Login';

const AppRouter = () => {

   const router=createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[{
        index:true,
        element:<Home/>
    },
    {
        path:"about",
        element:<About/>
    }
]
   },
   {
    path:"/login",
    element:<Login/>
   }
])


  return <RouterProvider router={router}/>
}

export default AppRouter;