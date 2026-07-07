
import Form from './components/Form'
import RHF from './components/RHF'
import UserCard from './components/Usercard'


import { useState } from 'react'


const App = () => {
   const [product, setProduct] = useState([])
  
  return (
    <div>
      <RHF setProduct={setProduct}/>

      <div className='flex flex-wrap'>
        {product.map((item,idx)=>{
          return <UserCard key={idx} item={item}/>

        })}
      </div>
     
    </div>
  )
}

export default App
