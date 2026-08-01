import React, { useEffect, useState } from 'react'
import ProduductCart from '../components/ProduductCart'
import ProductCardSkeleton from '../components/ProductCardSkeleton'
import { useapiProductData } from '../hooks/apiProduct'

const Product = () => {

   const{isPending,data}= useapiProductData()
     
        
    return (
        <div>
            <div className="max-w-7xl mx-auto px-6 py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {isPending
      ? Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))
      : data.map((item) => (
          <ProduductCart key={item.id} product={item} />
        ))}
  </div>
</div>
            
        </div>
    )
}

export default Product
