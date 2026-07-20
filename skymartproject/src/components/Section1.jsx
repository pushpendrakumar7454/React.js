import React from "react";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";

const Section1 = () => {
  let naviagte = useNavigate();

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#090909] dark:text-white py-14 sm:py-16 md:py-20 lg:py-24">
      {/* Background Blur */}
      <div className="absolute -left-20 top-20 h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72 rounded-full bg-lime-500/20 blur-[100px] lg:blur-[130px]"></div>

      <div className="absolute  right-0 bottom-0 h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72 rounded-full bg-emerald-500/20 blur-[110px] lg:blur-[150px]"></div>

      {/* Grid */}
      <div className="absolute inset-0 dark:bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] dark:bg-[size:45px_45px]"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="border dark:border-white/10 rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] backdrop-blur-xl bg-white dark:bg-white/[0.03] p-6 sm:p-8 md:p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border dark:border-lime-500/30 dark:bg-lime-500/10 dark:text-lime-300 text-xs sm:text-sm font-semibold">
                <Sparkles size={10} />
                GOOD MORNING
              </span>

              <h1 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight">
                Welcome Back,
                <br />
                <span className="text-lime-400">Pushpendra.</span>
              </h1>

              <p className="mt-5 text-gray-400 text-[15px] sm:text-base lg:text-[17px] max-w-xl leading-7 mx-auto lg:mx-0">
                Discover thousands of premium products with lightning-fast
                delivery, exclusive offers, and a next-generation shopping
                experience.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-5 mt-8 sm:mt-10">
                <button
                  onClick={() => naviagte("/product")}
                  className="group flex items-center justify-center gap-3 cursor-pointer active:scale-95 rounded-xl px-6 py-3 bg-lime-400 font-semibold text-black transition hover:scale-105"
                >
                  Shop Now
                  <ArrowRight
                    size={20}
                    className="transition group-hover:translate-x-2"
                  />
                </button>

                <button
                  onClick={() => naviagte("/product")}
                  className="rounded-xl border dark:border-white/20 active:scale-95 px-6 py-3 cursor-pointer hover:bg-white/10 transition"
                >
                  Explore Products
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="relative flex justify-center mt-6 lg:mt-0">
              {/* Big Card */}
              <div className="relative w-[240px] bg-black h-[240px] sm:w-[270px] sm:h-[270px] md:w-[300px] md:h-[300px] rounded-[28px] sm:rounded-[35px] lg:rounded-[40px] border border-lime-500/20 bg-gradient-to-br from-lime-400/20 to-transparent backdrop-blur-xl flex items-center justify-center">
                <div className="absolute w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-white dark:bg-lime-400/20 blur-[70px] lg:blur-[90px]"></div>

                <ShoppingBag
                  size={110}
                  className="relative bg-white text-lime-400 sm:hidden"
                />

                <ShoppingBag
                  size={145}
                  className="relative text-lime-400 hidden sm:block lg:hidden"
                />

                <ShoppingBag
                  size={170}
                  className="relative dark:text-lime-400 hidden lg:block"
                />

                {/* Floating Card */}
                <div className="absolute -top-4 -right-2 sm:-top-5 sm:-right-5 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#101010] px-5 sm:px-7 lg:px-8 py-4 sm:py-5 lg:py-6">
                  <h2 className="text-xl sm:text-2xl font-black text-lime-400">
                    20+
                  </h2>

                  <p className="text-gray-400 mt-1 sm:mt-2 text-xs sm:text-sm">
                    Products
                  </p>
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-5 rounded-2xl sm:rounded-3xl border border-white/10 bg-[#101010] px-5 sm:px-7 lg:px-8 py-4 sm:py-5 lg:py-6">
                  <h2 className="text-xl sm:text-2xl text-white font-black">
                    FREE
                  </h2>

                  <p className="text-gray-400 mt-1 sm:mt-2 text-xs sm:text-sm">
                    Shipping
                  </p>
                </div>

                {/* Floating Emoji */}
                <div className="absolute top-1/2 -right-4 sm:-right-7 lg:-right-10 rounded-full bg-lime-400 p-3 sm:p-4 lg:p-5 shadow-[0_0_40px_#a3e635] animate-bounce text-lg sm:text-xl">
                  🔥
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
