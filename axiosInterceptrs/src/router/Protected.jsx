import React, { useContext } from 'react'
import { MyContext } from '../components/context/MyContext'
import { Navigate, Outlet } from 'react-router'

const Protected = () => {

    const{currentUser}=useContext(MyContext)
    if(!currentUser){
        return <Navigate to="/login" replace/>
    }
    return <Outlet/>
}

export default Protected

