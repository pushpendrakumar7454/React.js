import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router'
import { removeUser } from '../features/auth/authSlice'

const Navvar = () => {
    

    const {user}=useSelector((state)=>state.auth)
    const dispatch=useDispatch()


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
                 <NavLink to="/login" onClick={()=>dispatch(removeUser())}>Logout</NavLink>
            </div>
           </div>
        </div>
    )
}

export default Navvar
