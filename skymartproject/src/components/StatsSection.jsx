import React from "react";
import {
  ShoppingCart,
  DollarSign,
  Star,
  Layers,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Cart Items",
    value: "08",
    desc: "Products in Cart",
    icon: ShoppingCart,
    color: "from-lime-400 to-green-500",
    bg: "bg-lime-500/10",
  },
  {
    title: "Cart Value",
    value: "$1,250",
    desc: "Ready to Checkout",
    icon: DollarSign,
    color: "from-cyan-400 to-blue-500",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Top Products",
    value: "24",
    desc: "Highly Rated",
    icon: Star,
    color: "from-yellow-400 to-orange-500",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Categories",
    value: "16",
    desc: "Available Now",
    icon: Layers,
    color: "from-purple-400 to-pink-500",
    bg: "bg-purple-500/10",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-[#090909] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Heading */}

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between mb-8 sm:mb-10">

          <div className="text-center md:text-left">

            <p className="text-lime-400 uppercase tracking-[3px] sm:tracking-[5px] text-xs sm:text-sm">
              Dashboard Overview
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-2xl font-semibold text-white mt-3">
              Store Analytics
            </h2>

          </div>

          <div className="flex justify-center md:justify-end">

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-gray-400 text-sm">

              <TrendingUp size={18} className="text-lime-400" />

              <span>+28% Growth This Month</span>

            </div>

          </div>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 sm:p-6 lg:p-7 transition-all duration-500 hover:-translate-y-3 hover:border-lime-400/40"
              >

                {/* Glow */}

                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${item.color}/10`}
                ></div>

                {/* Top */}

                <div className="relative flex items-center justify-between">

                  <div
                    className={`h-14 w-14 sm:h-16 sm:w-16 rounded-2xl ${item.bg} flex items-center justify-center`}
                  >
                    <Icon
                      className="text-white"
                      size={20}
                    />
                  </div>

                  <span
                    className={`text-[11px] sm:text-xs px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-black font-semibold`}
                  >
                    Live
                  </span>

                </div>

                {/* Content */}

                <div className="relative mt-5 cursor-pointer">

                  <h1 className="text-3xl sm:text-4xl lg:text-3xl font-black text-white">
                    {item.value}
                  </h1>

                  <h3 className="mt-3 text-lg sm:text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-400 mt-2 leading-6">
                    {item.desc}
                  </p>

                </div>

                {/* Progress */}

                <div className="relative mt-5">

                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">

                    <div
                      className={`h-full w-3/4 bg-gradient-to-r ${item.color}`}
                    ></div>

                  </div>

                </div>

                {/* Glow */}

                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 sm:h-36 sm:w-36 rounded-full bg-gradient-to-br ${item.color} blur-[80px] sm:blur-[90px] opacity-20 group-hover:opacity-40 transition`}
                ></div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default StatsSection;