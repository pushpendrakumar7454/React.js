import React, { useEffect, useState } from "react";
import { ShoppingCart, Heart, Star, Eye, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);
  const twentyProducts = products.slice(0, 20);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className="relative overflow-hidden bg-[#0B1120] py-20 px-4">
      {/* Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs text-violet-300">
            <Sparkles size={15} />
            Featured Collection
          </div>

          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Premium Products
            </span>
          </h2>

          <p className="mt-5 text-sm text-slate-400 sm:text-base">
            Discover trending products with premium quality and modern design.
          </p>
        </div>

        {/* Products */}
        <div className="mx-auto cursor-pointer flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide pb-4">
          {twentyProducts.map((product) => (
            <div
              onClick={() => navigate(`/productdetail/${product.id}`)}
              key={product.id}
              className="group relative w-[270px] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:border-violet-500/50"
            >
              {/* Badge */}
              <div className="absolute left-5 top-5 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
                New
              </div>

              {/* Wishlist */}
              <button className="absolute right-5 top-5 rounded-full bg-slate-900/80 p-2 text-white hover:bg-pink-600">
                <Heart size={17} />
              </button>

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-44 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
                  <button className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">
                    <Eye size={16} />
                    View
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="mt-5">
                <p className="text-xs capitalize text-cyan-400">
                  {product.category}
                </p>

                <h3 className="mt-2 line-clamp-1 text-lg font-semibold text-white">
                  {product.title}
                </h3>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <span className="text-sm text-slate-300">
                      {product.rating}
                    </span>
                  </div>

                  <p className="text-xl font-bold text-white">
                    ${product.price}
                  </p>
                </div>

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
