import React from 'react'
import Navbar from './components/Navvar'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './Pages/Home'
import ProductCart from './components/ProductCart'
import Product from './components/Product'
import Login from './form/Login'
import Register from './form/Register'
import Electronic from './components/Electronic'
import Fashion from './components/Fashion'
import Furniture from './components/Furniture'
import Sports from './components/Sports'
import Accessories from './components/Accessories'


const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product/>}/>
          <Route path='/electronic' element={<Electronic/>}/>
          <Route path='/fashion' element={<Fashion/>}/>
          <Route path='/furniture' element={<Furniture/>}/>
          <Route path='/sports' element={<Sports/>}/>
          <Route path='/accessories' element={<Accessories/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App
