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

const categories = [
  {
    title: "Electronics",
    items: "17 Items",
    icon: Laptop,
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Fashion",
    items: "21 Items",
    icon: Shirt,
    color: "from-pink-400 to-rose-500",
  },
  {
    title: "Furniture",
    items: "12 Items",
    icon: Sofa,
    color: "from-orange-400 to-yellow-500",
  },
  {
    title: "Home",
    items: "18 Items",
    icon: Home,
    color: "from-green-400 to-lime-500",
  },
  {
    title: "Sports",
    items: "9 Items",
    icon: Dumbbell,
    color: "from-purple-400 to-indigo-500",
  },
  {
    title: "Accessories",
    items: "15 Items",
    icon: Watch,
    color: "from-emerald-400 to-teal-500",
  },
];

const Categories = () => {
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

          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4 cursor-pointer  transition-all duration-500 hover:-translate-y-3 hover:border-lime-400/40"
              >

                {/* Glow */}
                <div
                  className={`absolute -right-10 -top-10 h-70 w-70 rounded-full bg-gradient-to-br ${item.color} blur-[90px] opacity-20 group-hover:opacity-50 transition`}
                ></div>

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl`}
                >
                  <Icon size={25} className="text-white" />
                </div>

                <h3 className="text-2xl font-semibold text-white mt-5">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {item.items}
                </p>

                <button className="mt-4 flex items-center gap-2 text-lime-400 opacity-0 group-hover:opacity-100 duration-300">
                  Explore
                  <ArrowRight size={18} />
                </button>

                <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-lime-400 duration-500"></div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Categories;