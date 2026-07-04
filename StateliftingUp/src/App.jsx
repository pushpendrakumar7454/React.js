import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import UserCard from './components/UserCard'

const App = () => {
  const [Users, setUsers] = useState([]);
  const [toggle, settoggle] = useState(false)
  
  return (
    <div>
      <Register setUsers={setUsers} settoggle={settoggle}/>
       <div className='flex gap-4 p-8'>
        {Users.map((elem)=>{
        return <UserCard user={elem}/>
       })}
       </div>
      
    </div>
  )
}

export default App
