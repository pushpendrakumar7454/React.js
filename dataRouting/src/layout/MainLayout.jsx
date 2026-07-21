import React from 'react'
import Navvar from '../components/Navvar'
import { Outlet } from 'react-router'
import Footer from '../pages/Footer'

const MainLayout = () => {
    return (
        <div>
            <Navvar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default MainLayout
