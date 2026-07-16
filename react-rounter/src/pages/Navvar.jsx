import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router'

const Navvar = () => {

  
    return (


        <div>
            <div className='w-full p-4 h-20 cursor-pointer  bg-black text-white flex justify-between text-xl items-center'>
                <div>Lobo</div>
                <div className='flex gap-4'>
                   <NavLink to="/"  className='active:scale-95'>Home</NavLink>
                   <NavLink to="/about"  className='active:scale-95'>About</NavLink>
                   <NavLink to="/contect">Contect</NavLink>
                   <NavLink to="/services">Serrvices</NavLink>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Navvar
