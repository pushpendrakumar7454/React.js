import React, { useContext, useEffect,useState } from 'react'

import { MyContext } from '../components/context/MyContext'
import UserCard from '../components/UserCard'
import { axiosIntance } from '../config/axiosInstance'

const About = () => {

     const {usersData, setUsersData,isLoading, setisLoading}=useContext(MyContext)
       

    const getUserData=async()=>{
        try {
            
            const res= await axiosIntance.get('/users')
            setUsersData(res.data)
            setisLoading(false)

        } catch (error) {

            console.log(error);
            
        }
    }

   useEffect(()=>{
    getUserData()

   },[])
   
   if(isLoading) return <h1>Loading</h1>


    return (
        <div>
           <div className='grid grid-cols-4 gap-5 p-5'>
                 {usersData.map((user)=>{
                    return <UserCard key={user.id} user={user}/>
                 })}
           </div>
        </div>
    )
}

export default About
