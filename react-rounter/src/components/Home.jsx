import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const Home = () => {
    let navigate=useNavigate()

    return (
        <div className='w-full p-3 '> 
        <div className='flex gap-5'>
            <button onClick={()=>navigate('/man')} className='bg-amber-600 px-5 py-2 cursor-pointer active:scale-95 text-white rounded text-xl'>Man</button>
        <button onClick={()=>navigate('/woman')} className='bg-amber-600 px-5 py-2 cursor-pointer active:scale-95 text-white rounded text-xl'>Woman</button>
        </div>

        <Outlet/>  
        </div>
    )
}

export default Home
