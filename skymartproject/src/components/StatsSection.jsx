import React, { useContext, useMemo } from "react";
import {
  ShoppingCart,
  DollarSign,
  Star,
  Layers,
  TrendingUp,
} from "lucide-react";

import { MyStore } from "../constext/MyContext";

const StatsSection = () => {
  const {
    carts,
    topproducts,
    data,
    electronicData,
    fashionData,
    furnicureData,
    sportsData,
    accessories,
  } = useContext(MyStore);

  const totalCartItems = useMemo(() => {
    return carts.reduce((total, item) => total + item.quantity, 0);
  }, [carts]);

  const totalCartValue = useMemo(() => {
    return carts
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  }, [carts]);

  const totalCategories = useMemo(() => {
    const categories = [
      ...data,
      ...electronicData,
      ...fashionData,
      ...furnicureData,
      ...sportsData,
      ...accessories,
    ].map((item) => item.category);

    return [...new Set(categories)].length;
  }, [
    data,
    electronicData,
    fashionData,
    furnicureData,
    sportsData,
    accessories,
  ]);

  const stats = [
    {
      title: "Cart Items",
      value: totalCartItems,
      desc: "Products in Cart",
      icon: ShoppingCart,
      color: "from-lime-400 to-green-500",
      bg: "bg-lime-500/10",
    },

    {
      title: "Cart Value",
      value: `$${totalCartValue}`,
      desc: "Ready to Checkout",
      icon: DollarSign,
      color: "from-cyan-400 to-blue-500",
      bg: "bg-cyan-500/10",
    },

    {
      title: "Top Products",
      value: topproducts.length,
      desc: "Highly Rated",
      icon: Star,
      color: "from-yellow-400 to-orange-500",
      bg: "bg-yellow-500/10",
    },

    {
      title: "Categories",
      value: totalCategories,
      desc: "Available Now",
      icon: Layers,
      color: "from-purple-400 to-pink-500",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <>
      {/* Heading */}

      <div className="flex flex-col p-7 bg-gray-200 dark:bg-black gap-5 md:flex-row md:items-center md:justify-between mb-8 sm:mb-10">
        <div className="text-center md:text-left">
          <p className="text-lime-600 dark:text-lime-400 uppercase tracking-[3px] sm:tracking-[5px] text-xs sm:text-sm">
            Dashboard Overview
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-2xl font-semibold text-gray-900 dark:text-white mt-3">
            Store Analytics
          </h2>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10  bg-gray-100 dark:bg-white/5 px-4 py-2 text-gray-600 dark:text-gray-400 text-sm">
            <TrendingUp
              size={18}
              className="text-lime-500 dark:text-lime-400"
            />

            <span>+28% Growth This Month</span>
          </div>
        </div>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 bg-white dark:bg-black p-8 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="
              group relative overflow-hidden 
              rounded-2xl sm:rounded-3xl 
              border border-gray-200 dark:border-white/10 
              bg-white dark:bg-white/[0.04] 
              backdrop-blur-xl 
              p-5 sm:p-6 lg:p-7 
              transition-all duration-500 
              hover:-translate-y-3 
              hover:border-lime-400/40
              shadow-sm dark:shadow-none
              "
            >
              {/* Glow */}

              <div
                className={`
                absolute inset-0 
                opacity-0 
                group-hover:opacity-100 
                transition duration-500 
                bg-gradient-to-br 
                ${item.color}/10
                `}
              ></div>

              {/* Top */}

              <div className="relative flex items-center justify-between">
                <div
                  className={`
                  h-14 w-14 
                  sm:h-16 sm:w-16 
                  rounded-2xl 
                  ${item.bg} 
                  flex items-center justify-center
                  `}
                >
                  <Icon className="text-gray-900 dark:text-white" size={20} />
                </div>

                <span
                  className={`
                  text-[11px] sm:text-xs 
                  px-3 py-1 
                  rounded-full 
                  bg-gradient-to-r 
                  ${item.color} 
                  text-black 
                  font-semibold
                  `}
                >
                  Live
                </span>
              </div>

              {/* Content */}

              <div className="relative mt-5 cursor-pointer">
                <h1
                  className="
                  text-3xl sm:text-4xl lg:text-3xl 
                  font-black 
                  text-gray-900 dark:text-white
                  "
                >
                  {item.value}
                </h1>

                <h3
                  className="
                  mt-3 
                  text-lg sm:text-xl 
                  font-semibold 
                  text-gray-900 dark:text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  text-sm sm:text-base 
                  text-gray-600 dark:text-gray-400 
                  mt-2 
                  leading-6
                  "
                >
                  {item.desc}
                </p>
              </div>

              {/* Progress */}

              <div className="relative mt-5">
                <div
                  className="
                  h-2 
                  rounded-full 
                  bg-gray-200 dark:bg-white/10 
                  overflow-hidden
                  "
                >
                  <div
                    className={`
                    h-full 
                    w-3/4 
                    bg-gradient-to-r 
                    ${item.color}
                    `}
                  ></div>
                </div>
              </div>

              {/* Glow */}

              <div
                className={`
                absolute 
                -right-12 
                -top-12 
                h-32 w-32 
                sm:h-36 sm:w-36 
                rounded-full 
                bg-gradient-to-br 
                ${item.color} 
                blur-[80px] 
                sm:blur-[90px] 
                opacity-20 
                group-hover:opacity-40 
                transition
                `}
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StatsSection;
