import React from "react";
import {
  ArrowRight,
  ShoppingBag,
  Sparkles,
  Star,
  ShieldCheck,
  TrendingUp,
  Package,
  CreditCard,
} from "lucide-react";

const Section = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-20 h-72 w-72 rounded-full bg-violet-600/30 blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse"></div>

      <div className="mx-auto  flex min-h-[90vh] max-w-7xl flex-col-reverse items-center justify-between gap-14 px-6 py-16 lg:flex-row lg:px-10">
        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-300">
            <Sparkles size={15} />
            Premium Shopping Experience
          </div>

          <h1 className="text-4xl font-semibold sm:text-5xl lg:text-7xl">
            Discover Your
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}
              Dream Style
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Upgrade your lifestyle with premium fashion, electronics,
            accessories and exclusive collections crafted for modern living.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-3 text-sm font-semibold transition duration-300 hover:scale-105">
              Shop Now
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <button className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-3 text-sm font-semibold transition hover:border-violet-500 hover:bg-slate-800">
              Explore Collection
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div>
              <h2 className="text-3xl font-bold text-violet-400">20K+</h2>

              <p className="mt-1 text-sm text-slate-400">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">500+</h2>

              <p className="mt-1 text-sm text-slate-400">Premium Products</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-pink-400">4.9★</h2>

              <p className="mt-1 text-sm text-slate-400">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Animated Dashboard UI */}

        <div className="relative flex items-center justify-center">
          <div className="absolute h-[430px] w-[430px] rounded-full bg-gradient-to-r from-violet-600/30 via-fuchsia-500/20 to-cyan-500/20 blur-[100px] "></div>

          <div className="relative lg:w-[330px] w-[280px]  rounded-[35px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl animate-[float_4s_ease-in-out_infinite] ">
            {/* Top */}

            <div className="flex items-center justify-between ">
              <div>
                <p className="text-xs text-slate-400">Total Sales</p>

                <h2 className="mt-1 text-2xl font-semibold">$48.9K</h2>
              </div>

              <div className="rounded-xl bg-violet-600 p-3">
                <TrendingUp size={18} />
              </div>
            </div>

            {/* Graph */}

            <div className="mt-8 flex h-20 lg:h-32 items-end gap-3">
              {[40, 70, 50, 90, 65, 100].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="w-6 rounded-t-lg bg-gradient-to-t from-violet-600 to-cyan-400 animate-pulse"
                ></div>
              ))}
            </div>

            {/* Cards */}

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                <Package size={20} className="text-cyan-400" />

                <p className="mt-3 text-xs text-slate-400">Orders</p>

                <h3 className="text-lg font-semibold">1.2K</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                <CreditCard size={20} className="text-pink-400" />

                <p className="mt-3 text-xs text-slate-400">Revenue</p>

                <h3 className="text-lg font-bold">$25K</h3>
              </div>
            </div>
          </div>

          {/* Floating Cards */}

          <div className="absolute -left-10 top-10 hidden rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 backdrop-blur-lg lg:block animate-bounce">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-violet-600 p-2">
                <ShoppingBag size={18} />
              </div>

              <div>
                <h4 className="text-sm font-semibold">1000+ Orders</h4>

                <p className="text-xs text-slate-400">Every Day</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-10 bottom-10 hidden rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 backdrop-blur-lg lg:block animate-bounce">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-cyan-500 p-2">
                <ShieldCheck size={18} />
              </div>

              <div>
                <h4 className="text-sm font-semibold">Secure Payment</h4>

                <p className="text-xs text-slate-400">100% Trusted</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-20 hidden items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 backdrop-blur-lg lg:flex">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-semibold">4.9 Ratings</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
