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
    <section className="bg-[#090909]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="flex items-center justify-between mb-10">

          <div>
            <p className="text-lime-400 uppercase tracking-[5px] text-sm">
              Dashboard Overview
            </p>

            <h2 className="text-2xl font-semibold text-white mt-3">
              Store Analytics
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-2 text-gray-400">
            <TrendingUp className="text-lime-400" />
            <span>+28% Growth This Month</span>
          </div>

        </div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-3 hover:border-lime-400/40"
              >

                {/* Glow */}

                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${item.color}/10`}
                ></div>

                {/* Top */}

                <div className="relative flex justify-between items-center">

                  <div
                    className={`h-16 w-16 rounded-2xl ${item.bg} flex items-center justify-center`}
                  >
                    <Icon className="text-white" size={20} />
                  </div>

                  <span
                    className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-black font-semibold`}
                  >
                    Live
                  </span>

                </div>

                {/* Content */}

                <div className="relative mt-3 cursor-pointer">

                  <h1 className="text-3xl font-semibold font-black text-white">
                    {item.value}
                  </h1>

                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {item.desc}
                  </p>

                </div>

                {/* Progress */}

                <div className="relative mt-3">

                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">

                    <div
                      className={`h-full w-3/4 bg-gradient-to-r ${item.color}`}
                    ></div>

                  </div>

                </div>

                {/* Border Glow */}

                <div
                  className={`absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br ${item.color} blur-[90px] opacity-20 group-hover:opacity-40 transition`}
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