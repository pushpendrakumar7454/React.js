import React, { useState, useEffect } from "react";
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
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

const ProductDetail = () => {


  


  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  const singleProduct = products.find((product) => product.id === Number(id));

  const relatedProducts = products.filter((product) => {
    return (
      product.category === singleProduct.category &&
      product.id !== singleProduct.id
    );
  });

  if (loading) {
    return <h1 className="text-center py-20">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-center py-20">{error}</h1>;
  }

  if (!singleProduct) {
    return null;
  }

  const { cartItems } = useSelector((state) => state.cart);
  const isAdded = cartItems.some((item) => item.id === singleProduct.id);

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
            <div className="group lg:h-120 h-55 overflow-hidden bg-gradient-to-br from-violet-600/10 to-slate-900 rounded-3xl border border-white/10 p-8 flex justify-center items-center overflow-hidden">
              <img
                src={singleProduct.images[0]}
                alt=""
                className="w-full lg:h-103 h-60 cursor-pointer rounded-lg max-w-md object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex flex-col justify-center">
            <span className="bg-violet-600/20 text-violet-300 w-fit px-3 py-1 rounded-full text-xs">
              {singleProduct.category}
            </span>

            <h1 className="lg:text-2xl text-lg font-small lg:font-semibold lg:mt-4 mt-2 leading-tight">
              {singleProduct.title}
            </h1>

            {/* Rating */}

            <div className="flex items-center gap-2 mt-2 lg:mt-4">
              <div className="flex text-yellow-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>

              <span className="text-gray-400 text-sm">
                {singleProduct.rating}
              </span>
              <span className="text-gray-400 text-sm">
                ({singleProduct.reviews?.length} Reviews)
              </span>
            </div>

            <div className="flex items-end gap-3 mt-2 lg:mt-5">
              <h2 className="lg:text-3xl text-xl font-semibold lg:font-bold text-violet-400">
                ${singleProduct.price}
              </h2>

              <span className="text-green-400 text-xs bg-green-500/10 px-2 py-1 rounded-full">
                {singleProduct.discountPercentage} OFF
              </span>
            </div>

            <p className="text-gray-400 text-sm mt-2  lg:mt-5">
              {singleProduct.description}
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

                  <p className="text-xs text-gray-400">
                    {singleProduct.returnPolicy}
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-3">
                <ShieldCheck className="text-violet-400" size={20} />

                <div>
                  <h4 className="text-sm">Warranty</h4>

                  <p className="text-xs text-gray-400">
                    {singleProduct.warrantyInformation}
                  </p>
                </div>
              </div>
            </div>

            {/* Quantity */}

            <div className="flex flex-wrap items-center gap-5 mt-8">
             
              <span className="text-green-400 text-sm">In Stock</span>
            </div>

            {/* Buttons */}

            <div
              className="flex flex-wrap gap-4 mt-8"
            >
              {isAdded ? (
                <button
                  onClick={() => dispatch(addtoCart(singleProduct))}
                  className="flex cursor-pointer active:scale-95 items-center gap-2 bg-green-600 hover:bg-green-700 duration-300 px-6 py-3 rounded-xl text-sm font-medium"
                >
                  <ShoppingCart size={18} />
                  Added
                </button>
              ) : (
                <button
                  onClick={() => {dispatch(addtoCart(singleProduct)),
                    toast.success("product added Successfully")
                  }}
                  className="flex cursor-pointer active:scale-95 items-center gap-2 bg-violet-600 hover:bg-violet-700 duration-300 px-6 py-3 rounded-xl text-sm font-medium"
                >
                  <ShoppingCart size={18} />
                  Add To Cart
                </button>
              )}

             

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

          <div className="grid grid-cols-2  lg:grid-cols-4 gap-5">
            {/* Card 1 */}

            {relatedProducts.map((p) => {
              const isAdded = cartItems.some((item) => item.id === p.id);
              return (
                <div
                  key={p.id}
                  
                  className="group cursor-pointer lg:h-74  bg-white/5 h-62 border border-white/10 rounded-2xl overflow-hidden hover:border-violet-500/40 hover:-translate-y-2 duration-300"
                >
                  <div className="bg-gradient-to-br  from-violet-600/10 to-slate-900 p-2 flex justify-center overflow-hidden">
                    <img
                    onClick={() => navigate(`/productdetail/${p.id}`)}
                      src={p.images[0]}
                      className="lg:h-30 h-23 object-cover rounded group-hover:scale-110 duration-500"
                      alt=""
                    />
                  </div>

                  <div className="lg:p-4 p-2">
                    <h3 className="lg:text-lg text-[12px] lg:font-semibold">{p.title}</h3>

                    <p className="text-xs text-gray-400 lg:mt-2 mt-1">
                      {p.description.slice(0, 45)}
                    </p>

                    <div className="flex justify-between items-center lg:mt-4 mt-1">
                      <span className="text-violet-400 font-semibold">
                        ${p.price}
                      </span>

                      <button
                        onClick={(e) => {
                          dispatch(addtoCart(p));
                          toast.success("Product added Successfully")
                        }}
                        
                        className={`text-xs px-3  py-2 rounded-lg duration-300 ${
                          isAdded
                            ? "bg-green-600 cursor-not-allowed"
                            : "bg-violet-600 hover:bg-violet-700"
                        }`}
                      >
                        {isAdded ? "Added" : "Add"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
