import React from 'react'
import Navvar from './pages/Navvar'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Contect from './components/Contect'
import Services from './components/Services'
import Man from './components/Man'
import Woman from './components/Woman'

const App = () => {
  return (
    <div>
    <div>
      <Navvar/>
    </div>

    <div>
    <Routes>
      <Route path='/' element={<Home/>}>
      <Route path="man" element={<Man/>}/>
      <Route path='woman' element={<Woman/>}/>
      </Route>
      <Route path='/about' element={<About/>}/>
      <Route path='/contect' element={<Contect/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    </div>
    </div>
  )
}

export default App
