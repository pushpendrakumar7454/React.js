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
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#090909] py-12 sm:py-16 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:45px_45px]" />

      <div className="absolute left-0 top-10 h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full bg-lime-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-xs sm:text-sm uppercase tracking-[4px] sm:tracking-[5px] text-lime-400">
              Categories
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-2xl font-semibold text-white">
              Shop by Category
            </h2>
          </div>

          <button className="group flex items-center gap-2 text-sm sm:text-base font-semibold text-lime-400">
            View All
            <ArrowRight
              size={20}
              className="duration-300 group-hover:translate-x-2"
            />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Electronics */}
          <div
            onClick={() => navigate("/electronic")}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-lime-400/40"
          >
            <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-20 blur-[90px] transition group-hover:opacity-50"></div>

            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-xl">
              <Laptop className="text-white" size={24} />
            </div>

            <h3 className="mt-5 text-xl sm:text-2xl font-semibold text-white">
              Electronics
            </h3>

            <p className="mt-2 text-sm sm:text-base text-gray-400">
              17 Items
            </p>

            <button className="mt-4 flex items-center gap-2 text-lime-400 opacity-100 sm:opacity-0 duration-300 group-hover:opacity-100">
              Explore
              <ArrowRight size={18} />
            </button>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-lime-400 duration-500 group-hover:w-full"></div>
          </div>

          {/* Fashion */}
          <div
            onClick={() => navigate("/fashion")}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-lime-400/40"
          >
            <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 opacity-20 blur-[90px] transition group-hover:opacity-50"></div>

            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 shadow-xl">
              <Shirt className="text-white" size={24} />
            </div>

            <h3 className="mt-5 text-xl sm:text-2xl font-semibold text-white">
              Fashion
            </h3>

            <p className="mt-2 text-sm sm:text-base text-gray-400">
              21 Items
            </p>

            <button className="mt-4 flex items-center gap-2 text-lime-400 opacity-100 sm:opacity-0 duration-300 group-hover:opacity-100">
              Explore
              <ArrowRight size={18} />
            </button>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-lime-400 duration-500 group-hover:w-full"></div>
          </div>

          {/* Furniture */}
          <div
            onClick={() => navigate("/furniture")}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-lime-400/40"
          >
            <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 opacity-20 blur-[90px] transition group-hover:opacity-50"></div>

            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-500 shadow-xl">
              <Sofa className="text-white" size={24} />
            </div>

            <h3 className="mt-5 text-xl sm:text-2xl font-semibold text-white">
              Furniture
            </h3>

            <p className="mt-2 text-sm sm:text-base text-gray-400">
              12 Items
            </p>

            <button className="mt-4 flex items-center gap-2 text-lime-400 opacity-100 sm:opacity-0 duration-300 group-hover:opacity-100">
              Explore
              <ArrowRight size={18} />
            </button>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-lime-400 duration-500 group-hover:w-full"></div>
          </div>

          {/* Home */}
          <div
            onClick={() => navigate("/product")}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-lime-400/40"
          >
            <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-gradient-to-br from-green-400 to-lime-500 opacity-20 blur-[90px] transition group-hover:opacity-50"></div>

            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-lime-500 shadow-xl">
              <Home className="text-white" size={24} />
            </div>

            <h3 className="mt-5 text-xl sm:text-2xl font-semibold text-white">
              Home
            </h3>

            <p className="mt-2 text-sm sm:text-base text-gray-400">
              18 Items
            </p>

            <button className="mt-4 flex items-center gap-2 text-lime-400 opacity-100 sm:opacity-0 duration-300 group-hover:opacity-100">
              Explore
              <ArrowRight size={18} />
            </button>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-lime-400 duration-500 group-hover:w-full"></div>
          </div>

          {/* Sports */}
          <div
            onClick={() => navigate("/sports")}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-lime-400/40"
          >
            <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 opacity-20 blur-[90px] transition group-hover:opacity-50"></div>

            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-500 shadow-xl">
              <Dumbbell className="text-white" size={24} />
            </div>

            <h3 className="mt-5 text-xl sm:text-2xl font-semibold text-white">
              Sports
            </h3>

            <p className="mt-2 text-sm sm:text-base text-gray-400">
              9 Items
            </p>

            <button className="mt-4 flex items-center gap-2 text-lime-400 opacity-100 sm:opacity-0 duration-300 group-hover:opacity-100">
              Explore
              <ArrowRight size={18} />
            </button>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-lime-400 duration-500 group-hover:w-full"></div>
          </div>

          {/* Accessories */}
          <div
            onClick={() => navigate("/accessories")}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-lime-400/40"
          >
            <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 opacity-20 blur-[90px] transition group-hover:opacity-50"></div>

            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-xl">
              <Watch className="text-white" size={24} />
            </div>

            <h3 className="mt-5 text-xl sm:text-2xl font-semibold text-white">
              Accessories
            </h3>

            <p className="mt-2 text-sm sm:text-base text-gray-400">
              15 Items
            </p>

            <button className="mt-4 flex items-center gap-2 text-lime-400 opacity-100 sm:opacity-0 duration-300 group-hover:opacity-100">
              Explore
              <ArrowRight size={18} />
            </button>

            <div className="absolute bottom-0 left-0 h-1 w-0 bg-lime-400 duration-500 group-hover:w-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Categories;