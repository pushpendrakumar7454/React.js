import axios from 'axios'
import React, { useEffect, useState } from 'react'


const App = () => {


  const [products, setproducts] = useState([])
  const [allProductsData, setAllProductsData] = useState([])
  const [seacrhData, setSeacrhData] = useState("")

  const getData=async()=>{
    try {

      let res=await axios.get("https://fakestoreapi.com/products")
      setproducts(res.data)
      setAllProductsData(res.data)
      
    } catch (error) {
      console.log(error);
      
    }
  }


  const filterData=()=>{
    let result=allProductsData.filter((product)=>{
      return product.title.toLowerCase().includes(seacrhData.toLowerCase())

    })
    setproducts(result)
  }


  useEffect(()=>{
    if(!seacrhData) return
    filterData()
  },[seacrhData])

  useEffect(()=>{
    getData()

  },[])


  return (

    <div className='p-5'>
      <div className='mb-5'>
        <input
        onChange={(e)=>{
          setSeacrhData(e.target.value)

        }}
         type="text" placeholder='Search Here...' className='border-2 border-blue-600 p-2' />
      </div>
      {products.map((data)=>{
        return <h2 key={data.id}>{data.title}</h2>
      })}
    </div>
  )
}

export default App



