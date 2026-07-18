import React from 'react'
import Navbar from './Navvar'

import Footer from '../Pages/Footer'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;
