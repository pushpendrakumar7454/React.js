import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from '../pages/Home';
import Layout from '../layout/Layout';
import About from '../pages/About';
import  Login  from '../compononets/Login';
import Register from '../compononets/Register';

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
   },{
    path:"/register",
    element:<Register/>
   }
])


  return <RouterProvider router={router}/>
}

export default AppRouter;