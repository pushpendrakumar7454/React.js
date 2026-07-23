import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col">
      
      {/* Product Image */}
      <div className="h-56 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Category */}
      <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full w-fit mt-3 capitalize">
        {product.category}
      </span>

      {/* Title */}
      <h2 className="text-lg font-bold mt-3 line-clamp-2">
        {product.title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-2 line-clamp-3">
        {product.description}
      </p>

      {/* Price & Rating */}
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-2xl font-bold text-green-600">
          ${product.price}
        </h3>

        <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded">
          ⭐
          <span className="font-semibold">
            {product.rating.rate}
          </span>
          <span className="text-gray-500 text-sm">
            ({product.rating.count})
          </span>
        </div>
      </div>

      {/* Button */}
      <button className="mt-5 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer active:scale-95">
        View Product
      </button>
    </div>
  );
};

export default ProductCard;