import React from 'react'

const UserCard = ({elem,deleteNote,idx}) => {
    return (
        <div className='flex flex-wrap gap-5 p-6'>
            <div className='w-80 bg-black min-h-40 text-white flex flex-col justify-between p-5 items-center rounded-lg'>
                <h1 className='text-2xl font-semibold'>{elem.text}</h1>
                <p className='text-center'>{elem.detail}</p>
                <button className='text-white w-full bg-red-600 p-2 cursor-pointer active:scale-95 text-xl rounded-lg border-none ' onClick={()=>deleteNote(idx)}>Delete</button>
            </div>

        </div>
    )
}

export default UserCard
