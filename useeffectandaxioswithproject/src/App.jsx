import React, { useContext, useState } from 'react'
import Navavar from './components/Navavr'
import UserCrad from './components/UserCrad'
import Cart from './components/Cart'
import { MyStore } from './context/MyStore'

const App = () => {

  let{toggle, settoggle,carts, setcarts}=useContext(MyStore)
  return (
    <div>
      <div className='p-3'>
        <Navavar />
      </div>
      <div>{toggle?<UserCrad/>:<Cart />}</div>
    </div>
  )
}

export default App
