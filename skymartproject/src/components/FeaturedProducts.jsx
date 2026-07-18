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
    <div className="rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-2xl font-semibold text-white flex items-center gap-3">
          {icon}
          {title}
        </h2>

        <button className="text-lime-400 flex items-center gap-2 hover:gap-4 duration-300">
          See All
          <ArrowRight size={18}/>
        </button>

      </div>

      <div className="space-y-5">

        {data.map((item, index) => (

          <div
            key={index}
            className="group flex justify-between items-center rounded-2xl border border-white/10 bg-[#111111] p-4 hover:border-lime-400/40 hover:-translate-y-1 duration-300"
          >

            <div className="flex items-center gap-5">

              <img
                src={item.img}
                className="w-20 h-20 rounded-xl object-cover"
              />

              <div>

                <h3 className="text-white text-[17px] font-semibold">
                  {item.name}
                </h3>

                <div className="flex items-center gap-2 mt-2">

                  <Star
                    size={15}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-gray-400">
                    {item.rating}
                  </span>

                </div>

                <div className="mt-2 flex items-center gap-3">

                  <span className="text-lime-400 font-semibold text-lg">
                    {item.price}
                  </span>

                  <span className="line-through text-gray-500">
                    {item.old}
                  </span>

                </div>

              </div>

            </div>

            <button className="w-14 h-14 rounded-xl bg-lime-400 text-black flex justify-center items-center hover:scale-110 duration-300">

              <ShoppingCart size={22}/>

            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="relative bg-[#090909] py-20 overflow-hidden">

      {/* Grid Background */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:45px_45px]"></div>

      <div className="absolute left-0 top-0 w-80 h-80 bg-lime-500/10 blur-[150px] rounded-full"></div>

      <div className="absolute right-0 bottom-0 w-80 h-80 bg-cyan-500/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-8">

          <ProductCard
            title="Top Rated"
            icon={<Star className="text-yellow-400 fill-yellow-400"/>}
            data={topRated}
          />

          <ProductCard
            title="New Arrivals"
            icon={<Zap className="text-lime-400"/>}
            data={arrivals}
          />

        </div>

      </div>

    </section>
  );
};

export default FeaturedProducts;