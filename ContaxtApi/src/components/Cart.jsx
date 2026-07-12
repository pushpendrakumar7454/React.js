

import React, { useContext } from "react";
import { MyStore } from "../context/MyStoreContext";

const Cart = () => {

  let {carts,setCarts}=useContext(MyStore)


  
  // Remove Product
  const removeProduct = (id) => {
    setCarts((prev) => prev.filter((item) => item.id !== id));
  };

  // Total Price
  const total = carts.reduce((acc, item) => acc + item.price, 0);

  // Empty Cart
  if (carts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-xl shadow-lg text-center">
          <h1 className="text-4xl font-bold text-red-700 ">
            🛒 Cart is Empty
          </h1>

          <p className="text-gray-500 mt-3">
            Add some products to your cart.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="lg:col-span-2 space-y-5">
          <h1 className="text-3xl font-bold text-black">
            🛒 Shopping Cart
          </h1>

          {carts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-5 flex gap-5"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-contain"
              />

              <div className="flex-1">
                <h2 className="font-bold text-lg">
                  {product.title}
                </h2>

                <p className="text-gray-500 mt-2">
                  ${product.price}
                </p>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-3">
                    <button className="w-8 h-8 bg-gray-200 rounded">
                      -
                    </button>

                    <span>1</span>

                    <button className="w-8 h-8 bg-gray-200 rounded">
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeProduct(product.id)}
                    className="text-red-500 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="bg-white rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-2xl font-bold mb-5">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>$10</span>
          </div>

          <div className="flex justify-between mb-5">
            <span>Tax</span>
            <span>${(total * 0.1).toFixed(2)}</span>
          </div>

          <hr />

          <div className="flex justify-between mt-5 text-xl font-bold">
            <span>Total</span>
            <span>${(total + 10 + total * 0.1).toFixed(2)}</span>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-800">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;