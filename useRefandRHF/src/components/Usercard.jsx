import React from "react";

const UserCard = ({item}) => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-5">
      <div className="w-72 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
        
        <img
          src={item.img}
          alt="Product"
          className="w-full h-60 object-cover"
        />

        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">
           {item.pname}
          </h2>

          <p className="text-gray-500 mt-1">
            Category: <span className="font-medium">{item.cat}</span>
          </p>

          <p className="text-blue-600 text-lg font-semibold mt-2">
           ${item.price}
          </p>

          <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            View Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;