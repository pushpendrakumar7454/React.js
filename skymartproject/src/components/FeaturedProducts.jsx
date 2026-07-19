import React from "react";
import {
  ArrowRight,
  ShoppingCart,
  Star,
  Zap,
} from "lucide-react";

const topRated = [
  {
    name: "Gaming Keyboard",
    price: "$99.99",
    old: "$149",
    rating: "4.9",
    img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300",
  },
  {
    name: "MacBook Pro",
    price: "$1499",
    old: "$1699",
    rating: "5.0",
    img: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=300",
  },
  {
    name: "Smart Watch",
    price: "$249",
    old: "$299",
    rating: "4.8",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
  },
  {
    name: "Gaming Mouse",
    price: "$59",
    old: "$89",
    rating: "4.7",
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300",
  },
];

const arrivals = [
  {
    name: "Headphones",
    price: "$89",
    old: "$120",
    rating: "4.9",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
  },
  {
    name: "Wireless Charger",
    price: "$39",
    old: "$59",
    rating: "4.8",
    img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300",
  },
  {
    name: "Premium T-Shirt",
    price: "$24",
    old: "$39",
    rating: "4.7",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300",
  },
  {
    name: "Water Bottle",
    price: "$19",
    old: "$30",
    rating: "4.8",
    img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300",
  },
];

const ProductCard = ({ title, icon, data }) => {
  return (
    <div className="rounded-2xl lg:rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-6 lg:mb-8">

        <h2 className="flex items-center gap-2 lg:gap-3 text-lg sm:text-xl lg:text-2xl font-semibold text-white">
          {icon}
          {title}
        </h2>

        <button className="text-lime-400 flex items-center gap-1 lg:gap-2 text-sm sm:text-base hover:gap-3 duration-300 whitespace-nowrap">
          See All
          <ArrowRight size={18} />
        </button>

      </div>

      {/* Products */}

      <div className="space-y-4 lg:space-y-5">

        {data.map((item, index) => (

          <div
            key={index}
            className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#111111] p-3 sm:p-4 hover:border-lime-400/40 hover:-translate-y-1 duration-300"
          >

            {/* Left */}

            <div className="flex items-center gap-3 sm:gap-5 flex-1 min-w-0">

              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0"
              />

              <div className="min-w-0">

                <h3 className="text-white text-sm sm:text-base lg:text-[17px] font-semibold truncate">
                  {item.name}
                </h3>

                <div className="flex items-center gap-2 mt-1">

                  <Star
                    size={14}
                    className="fill-yellow-400 text-yellow-400 shrink-0"
                  />

                  <span className="text-gray-400 text-xs sm:text-sm">
                    {item.rating}
                  </span>

                </div>

                <div className="mt-2 flex flex-wrap items-center gap-2">

                  <span className="text-lime-400 font-semibold text-base sm:text-lg">
                    {item.price}
                  </span>

                  <span className="line-through text-gray-500 text-xs sm:text-sm">
                    {item.old}
                  </span>

                </div>

              </div>

            </div>

            {/* Cart */}

            <button className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-lime-400 text-black flex items-center justify-center hover:scale-110 duration-300 shrink-0">

              <ShoppingCart size={20} />

            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="relative overflow-hidden bg-[#090909] py-12 sm:py-16 lg:py-20">

      {/* Background */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:45px_45px]"></div>

      <div className="absolute left-0 top-0 w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 rounded-full bg-lime-500/10 blur-[120px] lg:blur-[150px]"></div>

      <div className="absolute right-0 bottom-0 w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 rounded-full bg-cyan-500/10 blur-[120px] lg:blur-[150px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          <ProductCard
            title="Top Rated"
            icon={<Star className="fill-yellow-400 text-yellow-400" />}
            data={topRated}
          />

          <ProductCard
            title="New Arrivals"
            icon={<Zap className="text-lime-400" />}
            data={arrivals}
          />

        </div>

      </div>

    </section>
  );
};

export default FeaturedProducts;