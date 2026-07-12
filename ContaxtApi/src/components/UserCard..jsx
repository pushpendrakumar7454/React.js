import React from "react";

const UserCard = ({ product,SetCarts }) => {
  return (
    <div className="w-80 bg-white rounded-2xl cursor-pointer shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-3 transition duration-300">
      <div className="h-60 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      <div className="p-5">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full mb-3 capitalize">
          {product.category}
        </span>

        <h2 className="font-bold text-lg line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-5">
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>

          <div className="text-yellow-500 font-semibold">
            ⭐ {product.rating.rate}
            <span className="text-gray-500 text-sm">
              {" "}
              ({product.rating.count})
            </span>
          </div>
        </div>

        <button className="w-full cursor-pointer active:scale-95 mt-5 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition" onClick={() => SetCarts((prev) => [...prev, product])}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default UserCard;