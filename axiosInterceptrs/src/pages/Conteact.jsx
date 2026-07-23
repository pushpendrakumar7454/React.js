import React, { useContext, useEffect } from 'react'

import { MyContext } from '../components/context/MyContext'
import ProductCard from '../components/ProductCard'
import { axiosIntance } from '../config/axiosInstance'

const Conteact = () => {

    const{productData, setproductData,isLoading, setisLoading}=useContext(MyContext)

    const getData=async ()=>{
        try {
            let res= await axiosIntance.get("/products")
            setproductData(res.data)
            setisLoading(false)
        } catch (error) {

            console.log(error);
            
            
        }
    }


    useEffect(()=>{
       getData()
    },[])

    if(isLoading) return <h1 className='text-2xl'>Loading Products</h1>
    return (
        <div className='p-4 grid grid-cols-4 gap-5'>
           {productData.map((product)=>{
            return <ProductCard key={product.id} product={product}/>
           })}
        </div>
    )
}

export default Conteact
