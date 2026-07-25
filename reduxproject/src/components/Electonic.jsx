import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";

const Electronic = () => {
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  const electronics = products.filter((item) =>
    ["smartphones", "laptops", "tablets"].includes(item.category)
  );

  if (loading) {
    return (
      <h1 className="text-white text-center mt-20 text-2xl">
        Loading...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="text-red-500 text-center mt-20 text-2xl">
        {error}
      </h1>
    );
  }

  return (
    <section className="min-h-screen bg-[#0B1120] py-10 px-5">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        Electronics
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {electronics.map((item) => (
          <div
            key={item.id}
            className="bg-[#111827] rounded-2xl overflow-hidden border border-gray-700 hover:border-violet-500 transition-all duration-300 hover:-translate-y-2"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-56 object-contain p-4"
            />

            <div className="p-4">
              <h2 className="text-white text-base font-semibold line-clamp-1">
                {item.title}
              </h2>

              <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                {item.description}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-violet-400 text-lg font-bold">
                  ${item.price}
                </span>

                <button className="bg-violet-600 hover:bg-violet-500 px-4 py-2 rounded-lg text-white text-sm">
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Electronic;