import React, { useContext, useEffect } from 'react'
import ProductCart from './ProductCart'
import { MyStore } from '../constext/MyContext'
import { Search,ChevronDown } from 'lucide-react'
import axios from 'axios'

const Electronic = () => {


let {electronicData,setElectronicData}=useContext(MyStore)

    const getData=async()=>{
        try {
            let res=await axios.get("https://fakestoreapi.com/products/category/electronics")
            console.log(res.data);
            setElectronicData(res.data)
            
        } catch (error) {
            console.log("Data not found",error);
            
            
        }
    }

    useEffect(()=>{
        getData()
    },[])


    return (
        <div className='bg-black'>
            <div className="mb-10 bg-black p-6">
        <h1 className="text-3xl font-semibold text-white">All Products</h1>

        <p className="mt-2 text-zinc-500">
          {/* {data.length} products found */}
        </p>

        <div className="mt-8 rounded-3xl border border-zinc-700 p-4">
          <div className="flex flex-col gap-4 lg:flex-row">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                type="text"
                placeholder="Search products..."
                className="h-14 w-full rounded-2xl border border-lime-700 bg-zinc-900 pl-14 pr-4 text-white outline-none placeholder:text-zinc-500 focus:border-violet-500"
              />
            </div>

            {/* Category */}
            <button className="flex h-14 min-w-[170px] items-center justify-between rounded-2xl border border-zinc-700 bg-zinc-900 px-5 text-white transition hover:border-violet-500">
              <span>All Categories</span>
              <ChevronDown size={18} />
            </button>

            {/* Sort */}
            <button className="flex h-14 min-w-[180px] items-center justify-between rounded-2xl border border-zinc-700 bg-zinc-900 px-5 text-white transition hover:border-violet-500">
              <span>Featured</span>
              <ChevronDown size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6 bg-black'>
        {electronicData.map((product)=>{
            return <ProductCart key={product.id} product={product} />
        })}
      </div>
        </div>
    )
}

export default Electronic;
