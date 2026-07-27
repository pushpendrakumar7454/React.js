import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Navvar from '../components/Navvar'
import App from '../App'
const About=lazy(()=>import('../pages/About'))
const Contect=lazy(()=>import('../pages/Contect'))
import Layout from '../layout/Layout'


const AppRouts = () => {
    const router=createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                path:"",
                element:<App/>
              },{
                path:"about",
                element:<Suspense fallback={<h1>Loading</h1>}>
                    <About/>
                </Suspense>
              },{
                path:"contact",
                element:<Contect/>
              }
        ]
        }
    ])


    return <RouterProvider router={router}/>
}

export default AppRouts
