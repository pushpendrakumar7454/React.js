import React, { useContext } from "react";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";
import { MyStore } from "../constext/MyContext";

const CartPage = () => {
  const { carts, increment, decrement, deleteCart, menuOpen, setMenuOpen } =
    useContext(MyStore);

  const subtotal = carts.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const tax = subtotal * 0.05;
  const total = subtotal + tax;
  console.log(carts);

  return (
    <div className="min-h-screen dark:bg-[#0d0d0d] bg-slate-200 dark:text-white p-4 sm:p-6 lg:p-8">
      {/* Header */}

      <div className="flex items-center gap-3 mb-8">
        <div className="bg-orange-500 p-3 rounded-xl">
          <ShoppingBag size={22} />
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">Your Cart</h1>

          <p className="text-xs text-gray-400">Review your selected products</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Products */}

        <div className="lg:col-span-2 space-y-4">
          {carts.length === 0 ? (
            <div className="dark:bg-[#171717] border border-[#292929] rounded-2xl p-10 flex flex-col items-center justify-center">
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
                  className="dark:bg-[#171717] bg-white border border-[#292929] rounded-2xl p-4"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full sm:w-36 h-56 sm:h-36 object-cover rounded-xl"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h2 className="text-sm sm:text-base font-medium">
                          {item.title}
                        </h2>

                        <p className="text-xs text-gray-400 mt-1">
                          {item.category}
                        </p>

                        <p className="text-xs text-gray-400 mt-2">
                          {item.description?.slice(0, 148)}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-5">
                        <p className="text-orange-500 text-xl font-semibold">
                          ${item.price}
                        </p>

                        <div className="flex items-center justify-between sm:justify-end gap-3">
                          <div className="flex items-center gap-3 dark:bg-[#222] bg-gray-400 px-3 py-2 rounded-lg">
                            <button
                              onClick={() => decrement(item.id)}
                              className="cursor-pointer"
                            >
                              <Minus size={14} />
                            </button>

                            <span className="text-xs">{item.quantity}</span>

                            <button
                              onClick={() => increment(item.id)}
                              className="cursor-pointer"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <button
                            onClick={() => deleteCart(item.id)}
                            className="text-red-400 cursor-pointer"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Order Summary */}

        <div className="dark:bg-[#171717] border border-[#292929] rounded-2xl p-5 h-fit lg:sticky lg:top-6">
          <h2 className="text-base font-semibold mb-5">Order Summary</h2>

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
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 py-3 rounded-xl text-sm font-medium cursor-pointer">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
