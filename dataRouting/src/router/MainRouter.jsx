import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Login from '../layout/Login'


const MainRouter = () => {
     
    let router=createBrowserRouter([{
        path:'/',
        element:<MainLayout/>,
        children:[{
            path:"",
            element:<Home/>,
        },
        
        {
            path:"about",
            element:<About/>
        },
        {
            path:"services",
            element:<Services/>
        }
    ],
    },
    {
         path:"/login",
    element:<Login/>
    }

])


    return <RouterProvider router={router}/>
}

export default MainRouter
