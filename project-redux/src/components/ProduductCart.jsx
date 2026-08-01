import React from "react";
import { Star, ShoppingCart } from "lucide-react";

const ProduductCart = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200">
      
      {/* Image */}
      <div className="h-72 bg-gray-100 flex items-center justify-center p-6 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Category */}
        <span className="inline-block text-xs font-semibold uppercase bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 h-14">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={18} fill="currentColor" />
            <span className="font-medium text-gray-700">
              {product.rating.rate}
            </span>
            <span className="text-gray-400 text-sm">
              ({product.rating.count})
            </span>
          </div>

          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
        </div>

        {/* Button */}
        <button className="w-full mt-3 bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition">
          <ShoppingCart size={20} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProduductCart;
