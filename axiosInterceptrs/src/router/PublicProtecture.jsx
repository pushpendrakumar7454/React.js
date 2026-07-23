import React, { useContext } from 'react'
import { MyContext } from '../components/context/MyContext'
import { Navigate, Outlet } from 'react-router'

const PublicProtecture = () => {

    const {currentUser}=useContext(MyContext)
    if(currentUser){
        return <Navigate to="/" replace/>
    }

    return <Outlet/>
}

export default PublicProtecture
