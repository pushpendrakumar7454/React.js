
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCart from './ProductCart'

const Product = () => {

    const [data, setData] = useState([])
     
  let getData=async ()=>{
    try {
        let res=await axios.get('https://fakestoreapi.com/products')
        console.log(res.data);
        setData(res.data)
        
    } catch (error) {
        console.log("Data is not found",error);
        
    }
  }

  useEffect(()=>{
    getData()

  },[])

    return (
        <div>
           <div>
             {data.map((product)=>{
                return <div key={product.id}><ProductCart product={product}/></div>
            })}
           </div>
        </div>
    )
}

export default Product

