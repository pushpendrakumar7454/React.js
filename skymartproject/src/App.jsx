import React from 'react'
import Navbar from './components/Navvar'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './Pages/Home'
import ProductCart from './components/ProductCart'
import Product from './components/Product'


const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App
