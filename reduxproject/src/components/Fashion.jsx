import React, { useEffect } from "react";
import { ShoppingCart, Heart, Eye, Star, Sparkles, Cpu } from "lucide-react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";

const Fashion = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);
  console.log("Products:", products);
  console.log(products.map((item) => item.category));

  const electronicItem = products.filter(
    (item) => item.category === "mens-shirts" || item.category === "mens-shoes" || item.category==="tops" || item.category==="womens-dresses",
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] px-5 py-12">
      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-violet-600/20 blur-[130px] animate-pulse"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px] animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-xs text-violet-300">
            <Sparkles size={14} />
            Premium Fashion Products
          </div>

          <h1 className="mt-5 text-3xl md:text-5xl font-bold text-white">
            Fashion
            <span className="text-violet-400"> Collection</span>
          </h1>

          <p className="mt-4 max-w-xl mx-auto text-sm leading-6 text-gray-400">
            Explore premium means-shirts, tops and ladies clothes
            designed for modern lifestyle.
          </p>
        </div>

        {/* Products */}

        <div className="grid grid-cols-1 h-501 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {electronicItem.map((p) => {
            return (
              <div
              onClick={()=>navigate(`/productdetail/${p.id}`)}
                key={p.id}
                className="group cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:-translate-y-3 p-3 hover:border-violet-500/50"
              >
                <div className="relative h-40 overflow-hidden">
                  <span className="absolute left-4 top-4 z-20 rounded-full bg-violet-600 px-3 py-1 text-[11px] font-semibold text-white">
                    NEW
                  </span>

                <button className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-red-500 duration-300">
                                   <Heart size={17} />
                                 </button>

                  <img
                    src={p.images[0]}
                    className="h-53 w-full object-cover duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-0 duration-500 group-hover:opacity-100">
            

                  
                  </div>
                </div>

                <div className="p-2">
                  <div className="flex items-center gap-2 text-violet-400 text-xs">
                    <Cpu size={14} />
                   {p.brand}
                  </div>

                  <h2 className="mt-1 text-base font-semibold text-white">
                   {p.title}
                  </h2>

                  <p className="mt-2 text-xs  text-gray-400">
                    {p.description.slice(0,80)}
                  </p>

                  <div className="mt-2 flex items-center gap-1">
                    <Star
                      className="fill-yellow-400 text-yellow-400"
                      size={15}
                    />
                    <Star
                      className="fill-yellow-400 text-yellow-400"
                      size={15}
                    />
                    <Star
                      className="fill-yellow-400 text-yellow-400"
                      size={15}
                    />
                    <Star
                      className="fill-yellow-400 text-yellow-400"
                      size={15}
                    />
                    <Star
                      className="fill-yellow-400 text-yellow-400"
                      size={15}
                    />
                    <span className="ml-2 text-xs text-gray-400">({p.rating})</span>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">${p.price}</h3>
                      
                    </div>

                    <button className="rounded-xl bg-violet-600 px-7 py-2 text-sm text-white transition hover:scale-105 hover:bg-violet-500">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Fashion;

