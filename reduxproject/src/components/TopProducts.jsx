import React, { useEffect } from "react";
import { Heart, ShoppingCart, Star, ArrowRight } from "lucide-react";
import { fetchProducts } from "../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const TopProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const topProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  return (
    <section className="relative overflow-hidden bg-[#050816] py-20 px-4 sm:px-6 lg:px-10">
      {/* Background Glow */}

      <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-purple-600/20 blur-[150px] animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[170px] animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-indigo-500/10 blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 border border-purple-500/30 bg-purple-500/10 text-purple-300 px-4 py-2 rounded-full text-xs">
            ✨ Best Collection
          </span>

          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-white">
            Top
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Products
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Handpicked products with premium quality and modern design.
          </p>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8">
          {/* ================= Product 1 ================= */}

          {topProducts.map((product) => {
            return (
              <div
                key={product.id}
                  onClick={() => navigate(`/productdetail/${product.id}`)}
                
                className="cursor-pointer group lg:h-97 h-66 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-3"
              >
                <span className="absolute top-5 left-5 z-20 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  -30%
                </span>

                <button className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-pink-500 transition">
                  <Heart size={18} />
                </button>

                <div className="overflow-hidden">
                  <img
                  
                    src={product.images[0]}
                    alt=""
                    className="lg:h-50 h-30 object-contain w-full lg:object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />
                    <Star fill="currentColor" size={16} />

                    <span className="text-gray-400 text-xs ml-2">
                      (324 Reviews)
                    </span>
                  </div>

                  <h3 className="lg:text-xl text-[11px] font-small text-white mt-2">
                    {product.title}
                  </h3>

                  <p className="text-gray-400 text-[12px] mt-1">
                    {product.description.slice(0, 40)}
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <span className="text-xl font-semibold text-white">
                        ${product.price}
                      </span>
                    </div>

                    <button className="flex cursor-pointer active:scale-95 items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1.5 rounded-xl text-white hover:scale-105 transition">
                    
                      View
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
