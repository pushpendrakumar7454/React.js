import React from 'react'
import Navvar from './components/Navvar'
import Form from './components/Form'
import UserCard from './components/UserCard'
import { useState } from 'react'

const App = () => {
  const [toggle, settoggle] = useState(false)
  const [users, setUsers] = useState(()=>{
    return JSON.parse(localStorage.getItem('users')) || []
  })
  
  const [updateUser, setUpdateUser] = useState(null)

   
  const detetUser=(idx)=>{
   let newUser= users.filter((user,i)=>i!==idx)
   setUsers(newUser)
   localStorage.setItem('users',JSON.stringify(newUser))
   console.log(newUser);
  }

  return (

    <div className='w-full h-full min-h-screen bg-slate-950 p-4'>
      <Navvar settoggle={settoggle}/>

     {toggle ? (
  <Form users={users}  setUpdateUser={setUpdateUser} updateUser={updateUser} settoggle={settoggle} setUsers={setUsers} />
) : (
  <div className="flex h-full min-h-screen flex-wrap gap-5">
    {users.map((elem, idx) => (
      <UserCard
        key={idx}
        idx={idx}
        detetUser={detetUser}
        elem={elem}
        setUpdateUser={setUpdateUser}
        settoggle={settoggle}
      />
    ))}
  </div>
)}
    </div>
  )
}

export default App
