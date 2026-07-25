import React from "react";
import { Heart, ShoppingCart, Star, ArrowRight } from "lucide-react";

const TopProducts = () => {
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

          <div className="group h-110 relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-3">
            <span className="absolute top-5 left-5 z-20 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              -30%
            </span>

            <button className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-pink-500 transition">
              <Heart size={18} />
            </button>

            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700"
                alt=""
                className="h-50 w-full object-cover transition duration-700 group-hover:scale-110"
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

              <h3 className="text-xl font-semibold text-white mt-4">
                iPhone 15 Pro
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Premium flagship smartphone with titanium design.
              </p>

              <div className="flex items-center justify-between mt-6">
                <div>
                  <span className="text-2xl font-bold text-white">$999</span>

                  <span className="text-gray-500 line-through ml-2">$1299</span>
                </div>

                <button className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-xl text-white hover:scale-105 transition">
                  <ShoppingCart size={18} />
                  Cart
                </button>
              </div>
            </div>
          </div>

          {/* ================= Product 2 ================= */}

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-3">
            <span className="absolute top-5 left-5 z-20 bg-green-500 text-white text-xs px-3 py-1 rounded-full">
              NEW
            </span>

            <button className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-pink-500 transition">
              <Heart size={18} />
            </button>

            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"
                alt=""
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
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
                  (210 Reviews)
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mt-4">
                Nike Air Max
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Lightweight running shoes with premium comfort.
              </p>

              <div className="flex items-center justify-between mt-6">
                <div>
                  <span className="text-2xl font-bold text-white">$189</span>

                  <span className="text-gray-500 line-through ml-2">$249</span>
                </div>

                <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-xl text-white hover:scale-105 transition">
                  <ShoppingCart size={18} />
                  Cart
                </button>
              </div>
            </div>
          </div>
          {/* ================= Product 3 ================= */}

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-emerald-500/40 transition-all duration-500 hover:-translate-y-3">
            <span className="absolute top-5 left-5 z-20 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">
              HOT
            </span>

            <button className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-pink-500 transition">
              <Heart size={18} />
            </button>

            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700"
                alt=""
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-2"
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
                  (412 Reviews)
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mt-4">
                Sony Headphones
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Noise cancelling premium wireless headphones.
              </p>

              <div className="flex items-center justify-between mt-6">
                <div>
                  <span className="text-2xl font-bold text-white">$279</span>

                  <span className="text-gray-500 line-through ml-2">$349</span>
                </div>

                <button className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 rounded-xl text-white hover:scale-105 transition">
                  <ShoppingCart size={18} />
                  Cart
                </button>
              </div>
            </div>
          </div>

          {/* ================= Product 4 ================= */}

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-orange-500/40 transition-all duration-500 hover:-translate-y-3">
            <span className="absolute top-5 left-5 z-20 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
              SALE
            </span>

            <button className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-pink-500 transition">
              <Heart size={18} />
            </button>

            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=700"
                alt=""
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
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
                  (188 Reviews)
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mt-4">
                Smart Watch
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Fitness tracking with AMOLED display.
              </p>

              <div className="flex items-center justify-between mt-6">
                <div>
                  <span className="text-2xl font-bold text-white">$229</span>

                  <span className="text-gray-500 line-through ml-2">$299</span>
                </div>

                <button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-xl text-white hover:scale-105 transition">
                  <ShoppingCart size={18} />
                  Cart
                </button>
              </div>
            </div>
          </div>

          {/* ================= Product 5 ================= */}

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-pink-500/40 transition-all duration-500 hover:-translate-y-3">
            <span className="absolute top-5 left-5 z-20 bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
              -20%
            </span>

            <button className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-pink-500 transition">
              <Heart size={18} />
            </button>

            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
                alt=""
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
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
                  (276 Reviews)
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mt-4">
                Luxury Watch
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                Elegant stainless steel premium watch.
              </p>

              <div className="flex items-center justify-between mt-6">
                <div>
                  <span className="text-2xl font-bold text-white">$499</span>

                  <span className="text-gray-500 line-through ml-2">$599</span>
                </div>

                <button className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-xl text-white hover:scale-105 transition">
                  <ShoppingCart size={18} />
                  Cart
                </button>
              </div>
            </div>
          </div>
          {/* ================= Product 6 ================= */}

          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl hover:border-violet-500/40 transition-all duration-500 hover:-translate-y-3">
            <span className="absolute top-5 left-5 z-20 bg-violet-500 text-white text-xs px-3 py-1 rounded-full">
              BEST
            </span>

            <button className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-pink-500 transition-all duration-300 hover:scale-110">
              <Heart size={18} />
            </button>

            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=700"
                alt="Premium Sneakers"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />

                <span className="text-xs text-gray-400 ml-2">
                  (542 Reviews)
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mt-4">
                Premium Sneakers
              </h3>

              <p className="text-gray-400 text-sm mt-2 leading-6">
                Comfortable sneakers for everyday style and performance.
              </p>

              <div className="flex items-center justify-between mt-6">
                <div>
                  <span className="text-2xl font-bold text-white">$159</span>

                  <span className="text-gray-500 line-through ml-2">$199</span>
                </div>

                <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30">
                  <ShoppingCart size={18} />
                  Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Button */}

        <div className="mt-16 flex justify-center">
          <button className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/30">
            <span className="relative z-10 flex items-center gap-3">
              View All Products
              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </span>

            <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-700 group-hover:translate-x-0"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
