
import React from 'react'
import Section1 from '../components/Section1'
import StatsSection from '../components/StatsSection'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import Seaction from '../components/Seaction'


const Home = () => {
    return (
        <div className='bg-black'>
            <Section1/>
            <StatsSection/>
            <Categories/>
            <FeaturedProducts/>
            <Seaction/>
        </div>
    )
}

export default Home