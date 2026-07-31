import React from 'react'
import { NavLink } from 'react-router'

const Navvar = () => {
    return (
        <div className='bg-black flex justify-between items-center text-white p-7 text-xl'>
            <div>Lobo</div>
            <div className='flex gap-6'>
                <NavLink to="/">Home</NavLink>
             <NavLink to="/about">About</NavLink>
              <NavLink to="/product">Product</NavLink>
            </div>
            <div className='flex gap-5 items-center'>
                <div>Hey<span className='text-yellow-600 font-bold'> Arun</span></div>
                <div><NavLink>Cart</NavLink></div>
                <div><NavLink to="/login">Logout</NavLink></div>
            </div>
        </div>
    )
}

export default Navvar
