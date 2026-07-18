import React from "react";
import {
  Laptop,
  Shirt,
  Sofa,
  Home,
  Dumbbell,
  Watch,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router";

const Categories = () => {
  
  const navigate=useNavigate()

  return (
    <section className="relative bg-[#090909] py-20 overflow-hidden">
      {/* Same Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:45px_45px]"></div>

      <div className="absolute left-0 top-10 h-80 w-80 bg-lime-500/10 blur-[130px] rounded-full"></div>
      <div className="absolute right-0 bottom-0 h-80 w-80 bg-cyan-500/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="uppercase tracking-[5px] text-lime-400 text-sm">
              Categories
            </span>

            <h2 className="text-3xl font-semibold text-white mt-2">
              Shop by Category
            </h2>
          </div>

          <button className="group flex items-center gap-2 text-lime-400 font-semibold">
            View All
            <ArrowRight className="group-hover:translate-x-2 duration-300" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div onClick={()=>navigate("/electronic")} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:border-lime-400/40">
            <div className="absolute -right-10 -top-10 h-70 w-70 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 blur-[90px] opacity-20 group-hover:opacity-50 transition"></div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-xl">
              <Laptop size={25} className="text-white" />
            </div>

            <h3 className="text-2xl font-semibold text-white mt-5">
              Electronics
            </h3>

            <p className="text-gray-400 mt-2">17 Items</p>

            <button className="mt-4 flex items-center gap-2 text-lime-400 opacity-0 group-hover:opacity-100 duration-300">
              Explore
              <ArrowRight size={18} />
            </button>

            <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-lime-400 duration-500"></div>
          </div>

          {/* Card 2 */}
          <div  onClick={()=>navigate("/fashion")} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:border-lime-400/40">
            <div className="absolute -right-10 -top-10 h-70 w-70 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 blur-[90px] opacity-20 group-hover:opacity-50 transition"></div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-xl">
              <Shirt size={25} className="text-white" />
            </div>

            <h3 className="text-2xl font-semibold text-white mt-5">
              Fashion
            </h3>

            <p className="text-gray-400 mt-2">21 Items</p>

            <button className="mt-4 flex items-center gap-2 text-lime-400 opacity-0 group-hover:opacity-100 duration-300">
              Explore
              <ArrowRight size={18} />
            </button>

            <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-lime-400 duration-500"></div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:border-lime-400/40">
            <div className="absolute -right-10 -top-10 h-70 w-70 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 blur-[90px] opacity-20 group-hover:opacity-50 transition"></div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center shadow-xl">
              <Sofa size={25} className="text-white" />
            </div>

            <h3 className="text-2xl font-semibold text-white mt-5">
              Furniture
            </h3>

            <p className="text-gray-400 mt-2">12 Items</p>

            <button className="mt-4 flex items-center gap-2 text-lime-400 opacity-0 group-hover:opacity-100 duration-300">
              Explore
              <ArrowRight size={18} />
            </button>

            <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-lime-400 duration-500"></div>
          </div>

          {/* Card 4 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:border-lime-400/40">
            <div className="absolute -right-10 -top-10 h-70 w-70 rounded-full bg-gradient-to-br from-green-400 to-lime-500 blur-[90px] opacity-20 group-hover:opacity-50 transition"></div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-lime-500 flex items-center justify-center shadow-xl">
              <Home size={25} className="text-white" />
            </div>

            <h3 className="text-2xl font-semibold text-white mt-5">
              Home
            </h3>

            <p className="text-gray-400 mt-2">18 Items</p>

            <button className="mt-4 flex items-center gap-2 text-lime-400 opacity-0 group-hover:opacity-100 duration-300">
              Explore
              <ArrowRight size={18} />
            </button>

            <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-lime-400 duration-500"></div>
          </div>

          {/* Card 5 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:border-lime-400/40">
            <div className="absolute -right-10 -top-10 h-70 w-70 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 blur-[90px] opacity-20 group-hover:opacity-50 transition"></div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center shadow-xl">
              <Dumbbell size={25} className="text-white" />
            </div>

            <h3 className="text-2xl font-semibold text-white mt-5">
              Sports
            </h3>

            <p className="text-gray-400 mt-2">9 Items</p>

            <button className="mt-4 flex items-center gap-2 text-lime-400 opacity-0 group-hover:opacity-100 duration-300">
              Explore
              <ArrowRight size={18} />
            </button>

            <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-lime-400 duration-500"></div>
          </div>

          {/* Card 6 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:border-lime-400/40">
            <div className="absolute -right-10 -top-10 h-70 w-70 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 blur-[90px] opacity-20 group-hover:opacity-50 transition"></div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-xl">
              <Watch size={25} className="text-white" />
            </div>

            <h3 className="text-2xl font-semibold text-white mt-5">
              Accessories
            </h3>

            <p className="text-gray-400 mt-2">15 Items</p>

            <button className="mt-4 flex items-center gap-2 text-lime-400 opacity-0 group-hover:opacity-100 duration-300">
              Explore
              <ArrowRight size={18} />
            </button>

            <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-lime-400 duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;