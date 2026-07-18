import React from "react";
import {
  ArrowRight,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router";

const Section1 = () => {

   let naviagte=useNavigate()

  return (
    <section className="relative overflow-hidden bg-[#090909] text-white py-24">

      {/* Background Blur */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-lime-500/20 blur-[130px]"></div>
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-emerald-500/20 blur-[150px]"></div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:45px_45px]"></div>

      <div className="relative max-w-7xl mx-auto px-8">

        <div className="border border-white/10 rounded-[35px] backdrop-blur-xl bg-white/[0.03] p-10 lg:p-16">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}

            <div>

              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-lime-500/30 bg-lime-500/10 text-lime-300 text-sm font-semibold">
                <Sparkles size={10} />
                GOOD MORNING
              </span>

              <h1 className="mt-8 text-5xl  font-semibold leading-tight">

                Welcome Back,

                <br />

                <span className="text-lime-400">
                  Pushpendra.
                </span>

              </h1>

              <p className="mt-5 text-gray-400 text-[17px]  max-w-xl leading-7">
                Discover thousands of premium products with lightning-fast
                delivery, exclusive offers, and a next-generation shopping
                experience.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <button className="group flex items-center gap-3 cursor-pointer active:scale-95 rounded-xl px-6 py-3 bg-lime-400  font-semibold text-black transition hover:scale-105">

                  Shop Now

                  <ArrowRight
                    size={20}
                    className="transition group-hover:translate-x-2"
                  />

                </button>

                <button onClick={()=> naviagte('/product')} className="rounded-xl border border-white/20 active:scale-95 px-6 py-3 cursor-pointer  hover:bg-white/10 transition">
                  Explore Products
                </button>

              </div>

              {/* Features */}

            </div>

            {/* Right */}

            <div className="relative flex justify-center">

              {/* Big Card */}

              <div className="relative w-[300px] h-[300px] rounded-[40px] border border-lime-500/20 bg-gradient-to-br from-lime-400/20 to-transparent backdrop-blur-xl flex items-center justify-center">

                <div className="absolute w-72 h-72 rounded-full bg-lime-400/20 blur-[90px]"></div>

                <ShoppingBag
                  size={170}
                  className="relative text-lime-400"
                />

                {/* Floating Cards */}

                <div className="absolute -top-5 -right-5 rounded-3xl border border-white/10 bg-[#101010] px-8 py-6">

                  <h2 className="text-2xl font-black text-lime-400">
                    20+
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Products
                  </p>

                </div>

                <div className="absolute -bottom-5 -left-5 rounded-3xl border border-white/10 bg-[#101010] px-8 py-6">

                  <h2 className="text-2xl font-black">
                    FREE
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Shipping
                  </p>

                </div>

                <div className="absolute top-1/2 -right-10 rounded-full bg-lime-400 p-5 shadow-[0_0_40px_#a3e635] animate-bounce">

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