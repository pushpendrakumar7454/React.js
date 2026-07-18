import React from "react";
import {
  Heart,
  ShoppingCart,
  Star,
  Eye,
  ArrowUpRight,
} from "lucide-react";

const ProductCart = ({product}) => {
  return (
   
     <div className="group relative overflow-hidden cursor-pointer rounded-[28px] border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-[0_20px_60px_rgba(139,92,246,.25)]">

      {/* Top */}
      <div className="relative h-60  overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">

        {/* Category */}
        <span className="absolute left-4 top-4 z-20 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          Electronics
        </span>

        {/* Icons */}
        <div className="absolute right-4 top-4 z-20 flex flex-col gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:scale-110">
            <Heart size={18} />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:scale-110">
            <Eye size={18} />
          </button>

        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt=""
          className="h-full w-full object-contain p-8 transition duration-700 group-hover:scale-110 group-hover:rotate-3"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-4 ">

        <div>
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            Premium Audio
          </p>

          <h2 className="mt-1 text-lg font-semibold text-white transition group-hover:text-violet-400">
            {product.title.slice(0,25)}
          </h2>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between mb-10">

          <div className="flex items-center gap-1 text-yellow-400">
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />
            <Star fill="currentColor" size={16} />

            <span className="ml-2 text-sm text-zinc-400">
              (120 Reviews)
            </span>
          </div>

        </div>

        {/* Price */}


          <div className="flex gap-16 items-center justify-between">
            <div>
            <h3 className="text-2xl font-semibold text-white  ">
              $129
            </h3>

            <p className="text-sm text-zinc-500 line-through">
              $169
            </p>
            </div>
           <div>
             <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-4 py-3 cursor-pointer active:scale-95  font-semibold text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(168,85,247,.45)]">

          <ShoppingCart size={20} />

          Add

          <ArrowUpRight size={18} />

        </button>
        
           </div>
        
           

        </div>

        {/* Button */}
     

      </div>

      {/* Glow */}
      <div className="absolute -left-24 top-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20"></div>

    </div>

  );
};

export default ProductCart;
