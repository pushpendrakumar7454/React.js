import React from "react";
import {
  ShoppingBag,
  Trash2,
  Minus,
  Plus,
  ShieldCheck,
  Truck,
  CreditCard,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  removeCart,
  checkout,
} from "../features/cart/cartSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const tax = subtotal * 0.05;

  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-[#09090b] text-white px-5 md:px-10 py-10 relative overflow-hidden">
      {/* Glow Background */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-violet-600/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-600/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}

        <h1 className="mt-5 text-xl  lg:text-3xl font-semibold">
          Your Cart
          <span className="text-violet-400">Items</span>
        </h1>

        <p className="text-gray-400 mt-2 text-sm ">
          Manage your selected products and complete your purchase
        </p>

        <div className="grid lg:grid-cols-3 gap-10 mt-5">
          {/* Products */}

          <div className="lg:col-span-2 flex flex-col gap-3 lg:gap-5">
            {cartItems.map((product) => {
              return (
                <div
                  key={product.id}
                  className="relative bg-white/5 border border-white/10 rounded-3xl p-3 sm:p-4 md:p-5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-violet-500/40"
                >
                  {/* Delete Button */}
                  <button
                    onClick={() => {dispatch(removeCart(product.id)),
                      toast.success("product Deleteed")
                    }}
                    className="absolute top-3 right-3 text-red-400 hover:bg-red-500/20 p-2 rounded-xl transition"
                  >
                    <Trash2 size={18} />
                  </button>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Image */}
                    <div className="flex justify-center sm:block">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover rounded-2xl"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <p className="text-xs text-pink-400">{product.brand}</p>

                      <h2 className="text-base sm:text-lg md:text-xl font-semibold mt-1 sm:mt-2 pr-8">
                        {product.title}
                      </h2>

                      <p className="block sm:hidden text-xs text-gray-400 mt-2 leading-relaxed">
                        {product.description.slice(0, 55)}...
                      </p>

                      {/* Tablet & Laptop */}
                      <p className="hidden sm:block text-sm text-gray-400 mt-2 leading-relaxed">
                        {product.description.slice(0, 105)}...
                      </p>
                      {/* Price + Quantity */}
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mt-4">
                        <span className="text-lg sm:text-xl font-bold">
                          ${product.price}
                        </span>

                        <div className="flex items-center justify-center sm:justify-start bg-black/30 border border-white/10 rounded-xl overflow-hidden w-fit">
                          <button
                            onClick={() => {dispatch(decrement(product.id))
                             
                            }}
                            className="p-2 sm:p-3 hover:bg-white/10 transition"
                          >
                            <Minus size={16} />
                          </button>

                          <span className="px-4 sm:px-5 text-sm sm:text-base font-medium">
                            {product.quantity}
                          </span>

                          <button
                            onClick={() => dispatch(increment(product.id))}
                            className="p-2 sm:p-3 hover:bg-white/10 transition"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Summary */}

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 h-fit backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <ShoppingBag className="text-violet-400" />

              <h2 className="text-xl font-semibold">Order Summary</h2>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>

                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Tax</span>

                <span>5%</span>
              </div>

              <div className="flex justify-between text-gray-400">
                <span>Delivery</span>

                <span>Free</span>
              </div>

              <div className="border-t border-white/10 pt-5 flex justify-between text-xl font-semibold">
                <span>Total</span>

                <span className="text-violet-400">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => {
                dispatch(checkout());
                toast.success("All products Checkout",{
                  position:"top-right",
                  autoClose:1000
                })

              }}
              className="mt-4 w-full py-3 active:scale-95 cursor-pointer rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 font-semibold hover:scale-105 transition"
            >
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
