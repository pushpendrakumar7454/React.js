import React, { useContext } from "react";
import { Heart, ShoppingCart, Star, Eye, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router";
import { MyStore } from "../constext/MyContext";
import { toast } from "react-toastify";

const ProductCart1 = ({ product }) => {
  const naviagte = useNavigate();
  const { setCarts, carts } = useContext(MyStore);

  const isAdded = carts.find((item) => item.id == product.id);

  return (
    <div className="group relative overflow-hidden cursor-pointer rounded-2xl lg:rounded-[28px] border border-zinc-800 bg-zinc-900 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/50 hover:shadow-[0_20px_60px_rgba(139,92,246,.25)]">
      {/* Top */}
      <div
        onClick={() => naviagte(`/detailproduct/${product.id}`)}
        className="relative h-40 sm:h-52 lg:h-60 overflow-hidden bg-gradient-to-br from-zinc-800 via-zinc-900 to-black"
      >
        {/* Category */}
        <span className="absolute left-2 top-2 lg:left-4 lg:top-4 z-20 rounded-full bg-white/10 px-2 py-1 lg:px-3 text-[10px] sm:text-xs font-semibold text-white backdrop-blur-md">
          Electronics
        </span>

        {/* Icons */}
        <div className="absolute right-2 top-2 lg:right-4 lg:top-4 z-20 flex flex-col gap-2 opacity-100 lg:opacity-0 transition-all duration-300 lg:group-hover:opacity-100">
          <button className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:scale-110">
            <Heart size={16} className="lg:w-[18px] lg:h-[18px]" />
          </button>

          <button className="flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:scale-110">
            <Eye size={16} className="lg:w-[18px] lg:h-[18px]" />
          </button>
        </div>

        {/* Product Image */}
        <img
          src={product.thumbnail}
          alt=""
          className="h-full w-full object-contain p-4 sm:p-6 lg:p-8 transition duration-700 group-hover:scale-110 group-hover:rotate-3"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
      </div>

      {/* Content */}
      <div className="space-y-3 lg:space-y-4 p-3 lg:p-4">
        <div>
          <p className="text-[10px] sm:text-xs lg:text-sm uppercase tracking-widest text-zinc-500">
            Premium Audio
          </p>

          <h2 className="mt-1 text-sm sm:text-base lg:text-lg font-semibold text-white transition group-hover:text-violet-400 leading-snug">
            {product.title.slice(0, 25)}
          </h2>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-between lg:mb-10">
          <div className="flex items-center gap-1 text-yellow-400 text-xs sm:text-sm">
            <Star fill="currentColor" size={14} className="lg:w-4 lg:h-4" />

            {product.rating}

            <span className="ml-1 lg:ml-2 text-[10px] sm:text-xs lg:text-sm text-zinc-400">
              ({product.reviews?.length || 0} Reviews)
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between gap-2 lg:gap-13">
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
              ${product.price}
            </h3>
          </div>

          <div>
            {isAdded ? (
              <button
                onClick={() => {
                  setCarts((prev) => {
                    const exist = prev.find((item) => item.id === product.id);

                    if (exist) {
                      toast.success("", {
                        position: "top-center",
                        autoClose: 2000,
                      });
                      return prev.map((item) =>
                        item.id === product.id
                          ? { ...item, quantity: item.quantity + 1 }
                          : item,
                      );
                    }
                    toast.success("", {
                      position: "top-right",
                      autoClose: 2000,
                    });

                    return [...prev, { ...product, quantity: 1 }];
                  });
                }}
                className="flex items-center justify-center gap-1 lg:gap-1 rounded-xl lg:rounded-2xl bg-green-500 px-2 sm:px-3 lg:px-4 py-2 lg:py-3 cursor-pointer active:scale-95 font-semibold text-xs sm:text-sm lg:text-base text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(168,85,247,.45)]"
              >
                <ShoppingCart size={16} className="lg:w-5 lg:h-5" />
                Added
                <ArrowUpRight size={14} className="lg:w-[18px] lg:h-[18px]" />
              </button>
            ) : (
              <button
                onClick={() => {
                  setCarts((prev) => {
                    const exist = prev.find((item) => item.id === product.id);

                    if (exist) {
                      toast.success("", {
                        position: "top-center",
                        autoClose: 2000,
                      });
                      return prev.map((item) =>
                        item.id === product.id
                          ? { ...item, quantity: item.quantity + 1 }
                          : item,
                      );
                    }
                    toast.success("", {
                      position: "top-right",
                      autoClose: 2000,
                    });

                    return [...prev, { ...product, quantity: 1 }];
                  });
                }}
                className="flex items-center justify-center gap-1 lg:gap-1 rounded-xl lg:rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-2 sm:px-3 lg:px-4 py-2 lg:py-3 cursor-pointer active:scale-95 font-semibold text-xs sm:text-sm lg:text-base text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(168,85,247,.45)]"
              >
                <ShoppingCart size={16} className="lg:w-5 lg:h-5" />
                Add
                <ArrowUpRight size={14} className="lg:w-[18px] lg:h-[18px]" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute -left-24 top-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/20"></div>
    </div>
  );
};

export default ProductCart1;
