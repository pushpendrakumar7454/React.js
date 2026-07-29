import React from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import {NavLink, useNavigate} from 'react-router'
import { logoutUser } from '../features/auth/authUser'

const Navvar = () => {



     

    const dispatch=useDispatch()
const navigate=useNavigate()


const logoutUserpage=()=>{
    dispatch(logoutUser())
    alert("user logout")
    navigate("/login")
}


    return (
        <div className='flex justify-between items-center p-4 bg-black text-white text-xl'>
            <div>
                <h2>Lobo</h2>
            </div>
            <div className='flex gap-5 text-xl '>
                <NavLink to="/" className={({isActive})=>isActive?"text-red-500":"text-white"}>Home</NavLink>
                <NavLink to="/about" className={({isActive})=>isActive?"text-red-500":"text-white"}>About</NavLink>
                <NavLink to="product" className={({isActive})=>isActive?"text-red-500":"text-white"}>Product</NavLink>
            </div>
            <div>
               <NavLink to="/login" onClick={()=>logoutUserpage()}>Logout</NavLink>
            </div>
        </div>
    )
}

export default Navvar
