import React from 'react'
import { NavLink } from 'react-router'

const Navvar = () => {
    return (
        <div className='w-full bg-black flex justify-between items-center p-4 text-2xl text-white'>
            <div><h2>Lobo</h2></div>
           <div className='flex gap-4'> <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/services"}>Services</NavLink></div>
            <div><NavLink to={"/login"}>Login</NavLink></div>
        </div>
    )
}

export default Navvar;
