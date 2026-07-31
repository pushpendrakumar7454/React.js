import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from '../../layout/Layout'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/auth/authSlice'
import ProtectedRouter from './ProtectedRouter'
import PublicProtected from './PublicProtected'

const AppRoutes = () => {

    const dispatch=useDispatch()


    const hydrateUser=()=>{
        const loggedUser=JSON.parse(localStorage.getItem("currentUser"))||null
        if(!loggedUser){
            alert("invalid user")
            return 
        }
        dispatch(addUser(loggedUser))
        
    }

    useEffect(()=>{
        hydrateUser()
    },[])

    const router = createBrowserRouter([
       {
        element:<ProtectedRouter/>,
        children:[
            {
                path:"/",
                element:<Layout/>,
                children:[{
                    path:'',
                    element:<Home/>
                }]
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

    return <RouterProvider router={router} />
}

export default AppRoutes
