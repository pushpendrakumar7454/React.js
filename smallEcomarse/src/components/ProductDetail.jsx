import React from "react";
import {
  Star,
  Heart,
  ShoppingCart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Minus,
  Plus,
  ArrowRight,
} from "lucide-react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../features/cart/cartSlice";

const ProductDetail = () => {

  const {id}=useParams()
  const {products}=useSelector((state)=>state.product)

  const singleProduct=products.find((item)=>item.id==Number(id))

  const relatedProduct=products.filter((item)=>{
    return item.category===singleProduct.category &&
    item.id!==singleProduct.id
  })


  const dispatch=useDispatch()

  return (
    <div className="min-h-screen bg-slate-950 text-white py-10 px-4 ">
      <div className="max-w-7xl mx-auto">

        {/* Product Section */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div className="sticky top-24">

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

              <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-purple-600/20 blur-3xl"></div>

              <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-pink-600/20 blur-3xl"></div>

              <img
                src={singleProduct.image}
                alt=""
                className="w-full h-[520px] object-contain p-10 hover:scale-105 duration-500"
              />

            </div>

          </div>

          {/* Right */}

          <div>

            <span className="inline-flex px-4 py-1 rounded-full bg-purple-600/20 text-purple-300 text-sm border border-purple-500/30">
              {singleProduct.brand}
            </span>

            <h1 className="text-4xl font-bold mt-5 leading-tight">
              {singleProduct.title}
            </h1>

            <div className="flex items-center gap-3 mt-5">

              <div className="flex text-yellow-400">
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
                <Star size={18} fill="currentColor" />
              </div>

              <span className="text-gray-400">
                4.9 (1,285 Reviews)
              </span>

            </div>

            <div className="flex items-center gap-5 mt-6">

              <h2 className="text-4xl font-bold text-purple-400">
                ${singleProduct.price}
              </h2>

              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                15% OFF
              </span>

            </div>

            <p className="text-gray-400 mt-8 ">
              {singleProduct.description.slice(0,170)}
            </p>

            {/* Quantity */}

            <div className="flex items-center gap-6 mt-10">

              <div className="flex items-center border border-white/10 rounded-xl overflow-hidden">

                <button className="px-5 py-3 hover:bg-white/10">
                  <Minus size={18} />
                </button>

                <span className="px-6">1</span>

                <button className="px-5 py-3 hover:bg-white/10">
                  <Plus size={18} />
                </button>

              </div>

              <button className="p-4 rounded-xl bg-white/10 hover:bg-red-500 duration-300">
                <Heart />
              </button>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <button onClick={()=>dispatch(addtoCart(singleProduct))}  className="flex-1 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 font-semibold flex justify-center items-center gap-3 duration-300">
                <ShoppingCart size={20} />
                Add To Cart
              </button>

              <button className="flex-1 py-4 rounded-xl border border-purple-500 hover:bg-purple-600 font-semibold duration-300">
                Buy Now
              </button>

            </div>

            {/* Features */}

           

          </div>

        </div>

        {/* Related Products */}

        <div className="mt-24">

          <div className="flex items-center justify-between mb-10">

            <h2 className="text-3xl font-bold">
              Related Products
            </h2>

            <button className="flex items-center gap-2 text-purple-400 hover:gap-3 duration-300">
              View All
              <ArrowRight size={18} />
            </button>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {/* Card 1 */}

           {relatedProduct.map((product)=>{
            return  <div key={product.id} className="group bg-slate-900 rounded-3xl border border-white/10 overflow-hidden hover:-translate-y-2 duration-300">

              <div className="overflow-hidden bg-slate-800">

                <img
                  src={product.image}
                  className="w-full h-64 object-contain p-6 group-hover:scale-110 duration-500"
                  alt=""
                />

              </div>

              <div className="p-5">

                <h3 className="font-semibold">
                  {product.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                 {product.brand}
                </p>

                <div className="flex justify-between items-center mt-5">

                  <span className="text-purple-400 font-bold">
                    ${product.price}
                  </span>

                  <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
                    View
                  </button>

                </div>

              </div>

            </div>
           })}

            {/* Card 2 */}

          

            {/* Card 3 */}


            {/* Card 4 */}

           

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
