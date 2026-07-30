import React from 'react'
import { NavLink } from 'react-router'

const Navvar = () => {
    return (
        <div className='bg-black text-white p-7 flex justify-between items-center text-xl'>
           <div>Lobo</div>
           <div className=' flex gap-5'>
           <NavLink  to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
             <NavLink to="/product">Product</NavLink>
             
           </div>
           <div className='flex gap-5'>
            <div>
                 <NavLink to="/cart">Cart</NavLink>
            </div>
            <div>
                 <NavLink to="/login">Logout</NavLink>
            </div>
           </div>
        </div>
    )
}

export default Navvar
