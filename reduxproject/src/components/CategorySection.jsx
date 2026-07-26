import React from "react";
import {
  Smartphone,
  Shirt,
  Sofa,
  Dumbbell,
  Watch,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router";

const CategorySection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-20 px-6 bg-[#06070d]">
      {/* Animated Background Glow */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs">
            Explore Categories
          </div>

          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-white">
            Shop By Category
          </h2>

          <p className="mt-3 text-sm text-gray-400">
            Find premium products from every collection
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Electronics */}

          <div
            onClick={() => navigate("/electronic")}
            className="cursor-pointer group p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition duration-500 hover:-translate-y-2"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition">
              <Smartphone size={26} />
            </div>

            <h3 className="text-lg font-semibold text-white mt-5">
              Electronics
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              Smartphones, gadgets & smart devices
            </p>

            <button className="mt-5 flex items-center gap-2 text-sm text-blue-400">
              Explore
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Fashion */}

          <div
            onClick={() => navigate("/fashion")}
            className="cursor-pointer group p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition duration-500 hover:-translate-y-2"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-pink-500/20 text-pink-400 group-hover:scale-110 transition">
              <Shirt size={26} />
            </div>

            <h3 className="text-lg font-semibold text-white mt-5">Fashion</h3>

            <p className="text-sm text-gray-400 mt-2">
              Trendy clothes & latest styles
            </p>

            <button className="mt-5 flex items-center gap-2 text-sm text-pink-400">
              Explore
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Furniture */}

          <div
            onClick={() => navigate("/kitchen")}
            className="cursor-pointer group p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition duration-500 hover:-translate-y-2"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-500/20 text-yellow-400 group-hover:scale-110 transition">
              <Sofa size={26} />
            </div>

            <h3 className="text-lg font-semibold text-white mt-5">Kitchen</h3>

            <p className="text-sm text-gray-400 mt-2">
              Modern home furniture collection
            </p>

            <button className="mt-5 flex items-center gap-2 text-sm text-yellow-400">
              Explore
              <ArrowRight size={16} />
            </button>
          </div>
          {/* Sports */}

          <div
            onClick={() => navigate("/sports")}
            className="cursor-pointer  group p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition duration-500 hover:-translate-y-2"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/20 text-green-400 group-hover:scale-110 transition">
              <Dumbbell size={26} />
            </div>

            <h3 className="text-lg font-semibold text-white mt-5">Sports</h3>

            <p className="text-sm text-gray-400 mt-2">
              Fitness equipment & accessories
            </p>

            <button className="mt-5 flex items-center gap-2 text-sm text-green-400">
              Explore
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Accessories */}

          <div
            onClick={() => navigate("/accessories")}
            className="cursor-pointer group p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:bg-white/[0.08] transition duration-500 hover:-translate-y-2"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/20 text-purple-400 group-hover:scale-110 transition">
              <Watch size={26} />
            </div>

            <h3 className="text-lg font-semibold text-white mt-5">
              Accessories
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              Premium lifestyle accessories
            </p>

            <button className="mt-5 flex items-center gap-2 text-sm text-purple-400">
              Explore
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
