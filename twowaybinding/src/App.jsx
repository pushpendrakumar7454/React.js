import React, { useState } from 'react'
import Form from './components/Form'
import UserCard from './components/UserCard'
import Navvar from './components/Navar'

const App = () => {
   const [formData, setformData] = useState('')
   const [cards, setCards] = useState([])

  const [toggle, settoggle] = useState(true)


  const deleteNote=(idx)=>{
    const newCards=cards.filter((card,i)=>i!==idx)
    setCards(newCards)

  }

  return (
    <div className='p-6'>
      <Navvar settoggle={settoggle}/>
     {toggle?<Form formData={formData} setCards={setCards} settoggle={settoggle} setformData={setformData}/>:cards.map((elem,idx)=>{
      return <UserCard key={idx} deleteNote={deleteNote} idx={idx} elem={elem}/>
     })}
    </div>
  )
}

export default App
