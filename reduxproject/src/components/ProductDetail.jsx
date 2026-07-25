import React, { useState,useEffect } from "react";
import {
  Star,
  Heart,
  ShoppingCart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Minus,
  Plus,
} from "lucide-react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../features/product/productSlice";


const ProductDetail = () => {
  const [qty, setQty] = useState(1);

  const { id } = useParams();

  const dispatch = useDispatch();

  const { singleProduct, loading, error } = useSelector(
    (state) => state.product
  );

   useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);


  
  if (loading) {
  return <h1 className="text-center py-20">Loading...</h1>;
}

if (error) {
  return <h1 className="text-center py-20">{error}</h1>;
}

if (!singleProduct) {
  return null;
}



  return (
    <div className="min-h-screen bg-[#060816] text-white overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-violet-700/20 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/20 blur-[130px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main Card */}
        <div className="grid lg:grid-cols-2 gap-10 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl p-5 md:p-8">
          {/* LEFT */}
          <div>
            {/* Big Image */}
            <div className="group h-120 overflow-hidden bg-gradient-to-br from-violet-600/10 to-slate-900 rounded-3xl border border-white/10 p-8 flex justify-center items-center overflow-hidden">
              <img
               src={singleProduct.images}
                alt=""
                className="w-full h-103 cursor-pointer rounded-lg max-w-md object-cover transition duration-500 group-hover:scale-110"
              />
            </div>           
          </div>

          {/* RIGHT */}

          <div className="flex flex-col justify-center">
            <span className="bg-violet-600/20 text-violet-300 w-fit px-3 py-1 rounded-full text-xs">
              Premium Collection
            </span>

            <h1 className="text-2xl md:text-3xl font-bold mt-4 leading-tight">
              Nike Air Max Running Shoes
            </h1>

            {/* Rating */}

            <div className="flex items-center gap-2 mt-4">
              <div className="flex text-yellow-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>

              <span className="text-gray-400 text-sm">4.9 (248 Reviews)</span>
            </div>

            <div className="flex items-end gap-3 mt-5">
              <h2 className="text-3xl font-bold text-violet-400">$149</h2>

              <span className="line-through text-gray-500 text-sm">$199</span>

              <span className="text-green-400 text-xs bg-green-500/10 px-2 py-1 rounded-full">
                25% OFF
              </span>
            </div>

            <p className="text-gray-400 text-sm leading-7 mt-5">
              Lightweight premium running shoes with breathable mesh, responsive
              cushioning and durable outsole for everyday comfort.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-3 gap-3 mt-7">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
                <Truck className="text-violet-400" size={20} />

                <div>
                  <h4 className="text-sm">Free Delivery</h4>
                  <p className="text-xs text-gray-400">2-4 Days</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
                <RotateCcw className="text-violet-400" size={20} />

                <div>
                  <h4 className="text-sm">Easy Return</h4>

                  <p className="text-xs text-gray-400">7 Days</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
                <ShieldCheck className="text-violet-400" size={20} />

                <div>
                  <h4 className="text-sm">Warranty</h4>

                  <p className="text-xs text-gray-400">1 Year</p>
                </div>
              </div>
            </div>

            {/* Quantity */}

            <div className="flex flex-wrap items-center gap-5 mt-8">
              <div className="flex items-center bg-white/5 border border-white/10 rounded-xl">
                <button
                  onClick={() => qty > 1 && setQty(qty - 1)}
                  className="p-3 hover:bg-white/10 duration-300"
                >
                  <Minus size={16} />
                </button>

                <span className="px-5 text-sm">{qty}</span>

                <button
                  onClick={() => setQty(qty + 1)}
                  className="p-3 hover:bg-white/10 duration-300"
                >
                  <Plus size={16} />
                </button>
              </div>

              <span className="text-green-400 text-sm">In Stock</span>
            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 duration-300 px-6 py-3 rounded-xl text-sm font-medium">
                <ShoppingCart size={18} />
                Add To Cart
              </button>

              <button className="px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 duration-300 text-sm">
                Buy Now
              </button>

              <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex justify-center items-center hover:bg-red-500 duration-300">
                <Heart size={18} />
              </button>
            </div>
          </div>
        </div>
        {/* Description & Specifications */}

      
        {/* Reviews */}

        <div className="mt-5 bg-white/5 border border-white/10 rounded-3xl p-6">
          <h2 className="text-xl font-small mb-6">Customer Reviews</h2>

          <div className="space-y-5">
            <div className="bg-[#0f172a]/70 border border-white/10 rounded-2xl p-3 hover:border-violet-500/40 duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-small">Rahul Sharma</h3>

                <div className="flex text-yellow-400">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-1">
                Amazing quality, very comfortable and looks premium. Worth
                buying.
              </p>
            </div>

            <div className="bg-[#0f172a]/70 border border-white/10 rounded-2xl p-3 hover:border-violet-500/40 duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-small">Aman Verma</h3>

                <div className="flex text-yellow-400">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} />
                </div>
              </div>

              <p className="text-xs text-gray-400 mt-1">
                Delivery was fast and the product quality is excellent.
              </p>
            </div>
          </div>
        </div>
        {/* ================= Related Products ================= */}

        <div className="mt-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Related Products</h2>

            <button className="text-sm text-violet-400 hover:text-violet-300 duration-300">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1 */}

            <div className="group bg-white/5 h-69 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/40 hover:-translate-y-2 duration-300">
              <div className="bg-gradient-to-br  from-violet-600/10 to-slate-900 p-2 flex justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
                  className="h-30 object-cover rounded group-hover:scale-110 duration-500"
                  alt=""
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold">Nike Air Zoom</h3>

                <p className="text-xs text-gray-400 mt-2">
                  Lightweight Running Shoes
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-violet-400 font-semibold">$129</span>

                  <button className="text-xs cursor-pointer bg-violet-600 hover:bg-violet-700 px-3 py-2 rounded-lg duration-300">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}

            <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/40 hover:-translate-y-2 duration-300">
              <div className="bg-gradient-to-br from-violet-600/10 to-slate-900 p-5 flex justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500"
                  className="h-36 object-contain group-hover:scale-110 duration-500"
                  alt=""
                />
              </div>

              <div className="p-4">
                <h3 className="text-sm font-medium">Adidas Ultra</h3>

                <p className="text-xs text-gray-400 mt-2">Sports Collection</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-violet-400 font-semibold">$159</span>

                  <button className="text-xs bg-violet-600 hover:bg-violet-700 px-3 py-2 rounded-lg duration-300">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}

            <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/40 hover:-translate-y-2 duration-300">
              <div className="bg-gradient-to-br from-violet-600/10 to-slate-900 p-5 flex justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500"
                  className="h-36 object-contain group-hover:scale-110 duration-500"
                  alt=""
                />
              </div>

              <div className="p-4">
                <h3 className="text-sm font-medium">Puma Velocity</h3>

                <p className="text-xs text-gray-400 mt-2">
                  Daily Comfort Shoes
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-violet-400 font-semibold">$118</span>

                  <button className="text-xs bg-violet-600 hover:bg-violet-700 px-3 py-2 rounded-lg duration-300">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}

            <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/40 hover:-translate-y-2 duration-300">
              <div className="bg-gradient-to-br from-violet-600/10 to-slate-900 p-5 flex justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500"
                  className="h-36 object-contain group-hover:scale-110 duration-500"
                  alt=""
                />
              </div>

              <div className="p-4">
                <h3 className="text-sm font-medium">Reebok Runner</h3>

                <p className="text-xs text-gray-400 mt-2">Premium Edition</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-violet-400 font-semibold">$139</span>

                  <button className="text-xs bg-violet-600 hover:bg-violet-700 px-3 py-2 rounded-lg duration-300">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
