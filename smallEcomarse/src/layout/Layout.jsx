import React from 'react'
import Navvar from '../components/Navvar'
import {Outlet} from  'react-router'
const Layout = () => {
    return (
        <div>
            <Navvar/>
            <Outlet/>
        </div>
    )
}

export default Layout
