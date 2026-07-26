import React, { useEffect } from "react";
import { ShoppingCart, Heart, Eye, Star, Sparkles, Cpu,Search } from "lucide-react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";
import { setSearch } from "../features/cart/searchSlice";

const Accessories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);
  console.log("Products:", products);
  console.log(products.map((item) => item.category));

  const electronicItem = products.filter(
    (item) => item.category === "sports-accessories" || item.category === "mobile-accessories" 
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
    const search = useSelector((state) => state.search.search);
  const filteredProducts = electronicItem.filter((product) => {
  const value = search.toLowerCase();

  return (
    product.title.toLowerCase().includes(value) ||
    product.category.toLowerCase().includes(value) ||
    product.brand?.toLowerCase().includes(value)
  );
});
   

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
            <div className="mx-auto mt-8 w-full max-w-xl">
            <div className="relative group">
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-white group-focus-within:text-violet-400 transition"
              />

              <input
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
                type="text"
                placeholder="Search premium products..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-14 pr-5 text-sm text-white  placeholder:text-slate-500 backdrop-blur-xl outline-none transition duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
              />
            </div>
          </div>
        </div>

        {/* Products */}

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredProducts.map((p) => {
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
                    className="h-50 w-full object-cover duration-700 group-hover:scale-110"
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
                    <span className="ml-2 text-xs text-gray-400">(4.9)</span>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">${p.price}</h3>
                     
                    </div>

                    <button className="rounded-xl bg-violet-600 px-7 py-2 text-sm text-white transition hover:scale-105 hover:bg-violet-500">
                      view
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

export default Accessories;