import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicProtected = () => {


    const user=useSelector((state)=>state.auth.currentUser)
    if(user){
        return <Navigate to="/" replace/>

    }

    return <Outlet/>
}

export default PublicProtected
