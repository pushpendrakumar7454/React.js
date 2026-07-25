import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicProtected = () => {


    const currentUser=useSelector((state)=>state.auth.currentUser)
    if(currentUser){
        return <Navigate to="/" replace/>
    }

    return <Outlet/>
}

export default PublicProtected
