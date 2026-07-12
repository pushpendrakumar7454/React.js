import React from 'react'

const Navavar = ({settoggle}) => {
    return (
        <div className='flex w-full bg-black rounded justify-between items-center p-4'>
            <div className='text-white text-xl'>
                <h1>Lobo</h1>
            </div>
            <div className='flex gap-10 text-white text-xl '>
                <h2 className='cursor-pointer active:scale-95' onClick={()=>settoggle(false)}>Home</h2>
                <h2 className='cursor-pointer active:scale-95' onClick={()=>settoggle(true)}>Cart</h2>
            </div>
            <div className='text-white text-xl'>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Navavar
