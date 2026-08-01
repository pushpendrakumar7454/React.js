import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden animate-pulse">
      {/* Image */}
      <div className="h-72 bg-gray-200"></div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Category */}
        <div className="h-5 w-24 bg-gray-200 rounded-full"></div>

        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 w-full bg-gray-200 rounded"></div>
          <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
        </div>

        {/* Rating & Price */}
        <div className="flex justify-between items-center">
          <div className="h-5 w-20 bg-gray-200 rounded"></div>
          <div className="h-7 w-16 bg-gray-200 rounded"></div>
        </div>

        {/* Button */}
        <div className="h-12 w-full bg-gray-200 rounded-xl"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;