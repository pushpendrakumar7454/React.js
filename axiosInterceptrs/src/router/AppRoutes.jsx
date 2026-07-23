import React from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import Protected from './Protected'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Conteact from '../pages/Conteact'
import Login from '../components/Login'
import Register from '../components/Register'
import PublicProtecture from './PublicProtecture'




const AppRoutes = ({children}) => {


  const router=createBrowserRouter([{
    element:<Protected/>,
    children:[
      {
        path:"",
        element:<Layout/>,
        children:[{
          index:true,
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },{
          path:"contact",
          element:<Conteact/>
        }
      ]
      }
    ]
  },
  {
    element:<PublicProtecture/>,
    children:[{
      path:"/login",
      element:<Login/>
    },{
      path:"/register",
      element:<Register/>
    }
  ]
  }
])

  return <RouterProvider router={router}/>
  
}

export default AppRoutes
