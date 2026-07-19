import React, { useContext } from "react";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import { MyStore } from "../constext/MyContext";

const CartPage = () => {
  const { carts, increment, decrement } = useContext(MyStore);

  const subtotal = carts.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-4 sm:p-6 lg:p-8">
      {/* Header */}

      <div className="flex items-center gap-3 mb-8">
        <div className="bg-orange-500 p-3 rounded-xl">
          <ShoppingBag size={22} />
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">Your Cart</h1>
          <p className="text-xs text-gray-400">
            Review your selected products
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Products */}

        <div className="lg:col-span-2 space-y-4">
          {carts.length === 0 ? (
            <div className="bg-[#171717] border border-[#292929] rounded-2xl p-10 flex flex-col items-center justify-center">
              <ShoppingBag size={60} className="text-gray-500 mb-4" />

              <h2 className="text-xl font-semibold">Your Cart is Empty</h2>

              <p className="text-gray-400 text-sm mt-2">
                Add some products to your cart.
              </p>
            </div>
          ) : (
            carts.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-[#171717] border border-[#292929] rounded-2xl p-4 flex gap-4"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-xl"
                  />

                  <div className="flex-1">
                    <h2 className="text-sm sm:text-base font-medium">
                      {item.title}
                    </h2>

                    <p className="text-xs text-gray-400 mt-1">
                      {item.category}
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      {item.description?.slice(0, 148)}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <p className="text-orange-500 text-xl font-semibold">
                        ${item.price}
                      </p>

                      <div className="flex items-center gap-3 bg-[#222] px-3 py-2 rounded-lg">
                        <button onClick={() => decrement(item.id)}>
                          <Minus size={14} />
                        </button>

                        <span className="text-xs">{item.quantity}</span>

                        <button onClick={() => increment(item.id)}>
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <button className="self-start text-red-400">
                    <Trash2 size={18} />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Order Summary */}

        <div className="bg-[#171717] border border-[#292929] rounded-2xl p-5 h-fit">
          <h2 className="text-base font-semibold mb-5">
            Order Summary
          </h2>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span>

              <span>${subtotal}</span>
            </div>

            <div className="flex justify-between text-gray-400">
              <span>Delivery</span>

              <span>Free</span>
            </div>

            <div className="flex justify-between text-gray-400">
              <span>Tax</span>

              <span>5%</span>
            </div>

            <div className="border-t border-[#292929] pt-3 flex justify-between">
              <span>Total</span>

              <span className="text-orange-500 font-semibold">
                ${total}
              </span>
            </div>
          </div>

          <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 py-3 rounded-xl text-sm font-medium">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
