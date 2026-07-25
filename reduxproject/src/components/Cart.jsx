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
import { increment, decrement,removeCart} from "../features/cart/cartSlice";


const Cart = () => {
    const {cartItems,}=useSelector((state)=>state.cart)
    const dispatch=useDispatch()


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

          <div className="lg:col-span-2 flex flex-col  gap-5">
            {/* Product 1 */}
            {cartItems.map((product)=>{
                
           return  <div key={product.id} className="bg-white/5 border border-white/10 rounded-3xl p-3 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-violet-500/40">
              <div className="flex gap-5">
                <img
                  src={product.images}
                  className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-2xl"
                />

                <div className="flex-1">
                  <p className="text-xs text-pink-400">{product.brand}</p>

                  <h2 className="text-lg md:text-xl font-semibold mt-2">
                   {product.title}
                  </h2>

                  <p className="text-sm text-gray-400 mt-1">
                    {product.description.slice(0,105)}
                  </p>

                  <div className="flex justify-between items-center mt-3">
                    <span className="text-xl font-bold">${product.price}</span>

                    <div className="flex items-center bg-black/30 border border-white/10 rounded-xl">
                      <button onClick={()=>dispatch(decrement(product.id))} className="p-2 hover:bg-white/10">
                        <Minus size={15} />
                      </button>

                      <span className="px-4">{product.quantity}</span>

                      <button onClick={()=>dispatch(increment(product.id))} className="p-2 hover:bg-white/10">
                        <Plus size={15} />
                      </button>
                    </div>
                  </div>
                </div>

                <button onClick={()=>dispatch(removeCart(product.id))} className="cursor-pointer text-red-400 hover:bg-red-500/20 p-3 rounded-xl h-fit">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>

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

                <span>$165</span>
              </div>

              <div className="flex justify-between text-gray-400">
                <span>Delivery</span>

                <span>Free</span>
              </div>

              <div className="border-t border-white/10 pt-5 flex justify-between text-xl font-bold">
                <span>Total</span>

                <span className="text-violet-400">$165</span>
              </div>
            </div>

            <button className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 font-semibold hover:scale-105 transition">
              Checkout Now
            </button>

            <div className="mt-6 space-y-4 text-xs text-gray-400">
              <div className="flex gap-3 items-center">
                <Truck className="text-violet-400" />
                Free Delivery
              </div>

              <div className="flex gap-3 items-center">
                <ShieldCheck className="text-violet-400" />
                Secure Payment
              </div>

              <div className="flex gap-3 items-center">
                <CreditCard className="text-violet-400" />
                Multiple Payment Options
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
