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

const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Product Section */}

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div className="sticky top-24">

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900">

              <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-purple-600/20 blur-3xl"></div>

              <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-pink-600/20 blur-3xl"></div>

              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900"
                alt=""
                className="w-full h-[520px] object-contain p-10 hover:scale-105 duration-500"
              />

            </div>

          </div>

          {/* Right */}

          <div>

            <span className="inline-flex px-4 py-1 rounded-full bg-purple-600/20 text-purple-300 text-sm border border-purple-500/30">
              Premium Collection
            </span>

            <h1 className="text-4xl font-bold mt-5 leading-tight">
              Apple iPhone 16 Pro Max Titanium Black Edition
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
                $1299
              </h2>

              <span className="line-through text-gray-500 text-xl">
                $1499
              </span>

              <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                15% OFF
              </span>

            </div>

            <p className="text-gray-400 mt-8 leading-8">
              Experience unmatched performance with the latest flagship
              smartphone featuring an ultra-fast processor, pro camera system,
              premium titanium finish, all-day battery life and immersive
              display designed for professionals.
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

              <button className="flex-1 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 font-semibold flex justify-center items-center gap-3 duration-300">
                <ShoppingCart size={20} />
                Add To Cart
              </button>

              <button className="flex-1 py-4 rounded-xl border border-purple-500 hover:bg-purple-600 font-semibold duration-300">
                Buy Now
              </button>

            </div>

            {/* Features */}

            <div className="grid sm:grid-cols-3 gap-5 mt-12">

              <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 text-center">
                <Truck className="mx-auto text-purple-400" />
                <p className="mt-3 text-sm text-gray-400">
                  Free Shipping
                </p>
              </div>

              <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 text-center">
                <ShieldCheck className="mx-auto text-green-400" />
                <p className="mt-3 text-sm text-gray-400">
                  Secure Payment
                </p>
              </div>

              <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 text-center">
                <RotateCcw className="mx-auto text-pink-400" />
                <p className="mt-3 text-sm text-gray-400">
                  Easy Returns
                </p>
              </div>

            </div>

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

            <div className="group bg-slate-900 rounded-3xl border border-white/10 overflow-hidden hover:-translate-y-2 duration-300">

              <div className="overflow-hidden bg-slate-800">

                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
                  className="w-full h-64 object-contain p-6 group-hover:scale-110 duration-500"
                  alt=""
                />

              </div>

              <div className="p-5">

                <h3 className="font-semibold">
                  iPhone 15 Pro
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Premium Smartphone
                </p>

                <div className="flex justify-between items-center mt-5">

                  <span className="text-purple-400 font-bold">
                    $999
                  </span>

                  <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
                    View
                  </button>

                </div>

              </div>

            </div>

            {/* Card 2 */}

            <div className="group bg-slate-900 rounded-3xl border border-white/10 overflow-hidden hover:-translate-y-2 duration-300">

              <div className="overflow-hidden bg-slate-800">

                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
                  className="w-full h-64 object-contain p-6 group-hover:scale-110 duration-500"
                  alt=""
                />

              </div>

              <div className="p-5">

                <h3 className="font-semibold">
                  Nike Air Max
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Running Shoes
                </p>

                <div className="flex justify-between items-center mt-5">

                  <span className="text-purple-400 font-bold">
                    $189
                  </span>

                  <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
                    View
                  </button>

                </div>

              </div>

            </div>

            {/* Card 3 */}

            <div className="group bg-slate-900 rounded-3xl border border-white/10 overflow-hidden hover:-translate-y-2 duration-300">

              <div className="overflow-hidden bg-slate-800">

                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
                  className="w-full h-64 object-contain p-6 group-hover:scale-110 duration-500"
                  alt=""
                />

              </div>

              <div className="p-5">

                <h3 className="font-semibold">
                  Smart Watch
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Fitness Edition
                </p>

                <div className="flex justify-between items-center mt-5">

                  <span className="text-purple-400 font-bold">
                    $349
                  </span>

                  <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
                    View
                  </button>

                </div>

              </div>

            </div>

            {/* Card 4 */}

            <div className="group bg-slate-900 rounded-3xl border border-white/10 overflow-hidden hover:-translate-y-2 duration-300">

              <div className="overflow-hidden bg-slate-800">

                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
                  className="w-full h-64 object-contain p-6 group-hover:scale-110 duration-500"
                  alt=""
                />

              </div>

              <div className="p-5">

                <h3 className="font-semibold">
                  Wireless Headphones
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Noise Cancellation
                </p>

                <div className="flex justify-between items-center mt-5">

                  <span className="text-purple-400 font-bold">
                    $249
                  </span>

                  <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700">
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
