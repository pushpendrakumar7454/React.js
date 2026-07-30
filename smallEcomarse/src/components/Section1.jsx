import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../features/products/productApi";
import {useNavigate} from 'react-router'



const Section1 = () => {

    const dispatch=useDispatch()

  const {products,loading}= useSelector((state)=>state.product)
  
   const navigate=useNavigate()
  useEffect(()=>{
    dispatch(getData())
  },[])



  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Products
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Card 1 */}
      {products.map((product)=>{
        return   <div key={product.id} className="bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden hover:shadow-2xl duration-300">
          <img
         onClick={() => navigate(`/productdetail/${product.id}`)}
            src={product.image}
            alt=""
            className="w-full h-40 object-contain"
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-gray-600 mt-2">
              {product.description.slice(0,60)}
            </p>
            <div className="flex justify-between items-center mt-5">
              <span className="text-2xl font-semibold text-green-600">
                ${product.price}
              </span>
              <button className="bg-black cursor-pointer active:scale-95 text-white px-5 py-2 rounded-lg hover:bg-gray-800">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      })}

        {/* Card 2 */}
        

      </div>
    </div>
  );
};

export default Section1;
