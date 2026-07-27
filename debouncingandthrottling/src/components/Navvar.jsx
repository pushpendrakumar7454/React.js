import React from 'react' 
import {NavLink, Outlet} from 'react-router'




const Navvar = () => {
    return (
        <div className='flex justify-between p-3 items-center bg-black text-white text-xl'>
            <div>
                Lobo
            </div>
            <div className=' flex gap-4'>
               <NavLink to="/">App</NavLink>
               <NavLink to="/about">About</NavLink>
               <NavLink to="/contact">Coontect</NavLink>
            </div>
            <div></div>
            
        </div>
    )
}

export default Navvar
