import React from 'react'

const Navvar = ({settoggle}) => {
    return (
        <div>
            <div className='w-full h-20 bg-white flex justify-between p-4 items-center rounded-lg'>
                <div className='w-15 h-15 rounded-full overflow-hidden'>
                    <img src="https://img.freepik.com/vector-premium/lobo-dorado_1087929-1203.jpg" alt="img" className='w-full h-full object-cover rounded-full'/>
                </div>
                <div className='flex gap-4 text-xl cursor-pointer'>
                    <h4>Home</h4>
                    <h4>about</h4>
                    <h4>contact</h4>
                </div>
                <div>
                    <button className='w-35 text-xl text-center cursor-pointer active:scale-95 hover:bg-red-700 text-white p-2 rounded-lg bg-red-600' onClick={()=>settoggle(pre=>!pre)}>Create Card</button>
                </div>
            </div>
        </div>
    )
}

export default Navvar
