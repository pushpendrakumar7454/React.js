import React, { useContext, useEffect, useState } from "react";
import { ShoppingCart, Star, Heart, User, Search } from "lucide-react";
import axios from "axios";
import { MyStore } from "../context/MyStore";

const UserCrad = () => {
  let { users, setusers, setcarts, carts,incrementQuantity,descreaeQuantity } = useContext(MyStore);

  const userDara = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setusers(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    userDara();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 grid grid-cols-4 gap-4  p-5">
      {users.map((item) => {
        let isInCart = carts.find((val) => val.id === item.id);
        console.log(isInCart);

        return (
          <div
            key={item.id}
            className="w-80 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            {/* Image */}
            <div className="h-64 bg-gray-100 flex items-center justify-center">
              <img
                src={item.image}
                alt="Product"
                className="h-48 object-contain hover:scale-105 transition"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <span className="inline-block bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full">
                {item.category}
              </span>

              <h2 className="text-lg font-bold text-gray-800 mt-3 line-clamp-2">
                {item.title}
              </h2>

              <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                Premium quality jacket for everyday use. Soft fabric, stylish
                look and comfortable fitting.
              </p>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-500 fill-yellow-500" size={18} />
                  <h2 className="font-medium">{item.rating.rate}</h2>
                </div>

                <span className="text-sm text-gray-500">
                  {item.rating.count} Reviews
                </span>
              </div>

              <div className="flex items-center justify-between mt-5">
                <h3 className="text-2xl font-bold text-green-600">
                  ${item.price}
                </h3>

                {isInCart ? (
                  <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-fit">
                    <button onClick={()=>descreaeQuantity(item.id)} className="w-10 cursor-pointer h-10 flex items-center justify-center text-xl font-bold hover:bg-gray-100">
                      -
                    </button>

                    <div  className="w-12 h-10  cursor-pointer flex items-center justify-center border-x border-gray-300 font-semibold">
                      {isInCart.quantity}
                    </div>

                    <button onClick={()=>incrementQuantity(item.id)} className="w-10 h-10 cursor-pointer flex items-center justify-center text-xl font-bold hover:bg-gray-100">
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="flex items-center cursor-pointer active:scale-95 gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
                    onClick={() => {
                      setcarts((prev) => [...prev, {...item,quantity:1}]);
                      alert("product added in cart");
                    }}
                  >
                    <ShoppingCart size={18} />
                    Add
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCrad;
