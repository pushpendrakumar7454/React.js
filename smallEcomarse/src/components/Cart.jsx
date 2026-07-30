import React from "react";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  ShieldCheck,
  Truck,
  Tag,
} from "lucide-react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,removeCart } from "../features/cart/cartSlice";





const Cart = () => {

    const {cartItem}=useSelector((state)=>state.cart)
    const dispatch=useDispatch()
   
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              Shopping Cart
            </h1>
            <p className="text-slate-500 mt-2">
              3 Items in your cart
            </p>
          </div>

          <Link
            to="/"
            className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl shadow hover:shadow-lg duration-300"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left */}

          <div className="lg:col-span-2 space-y-6">

            {/* Product 1 */}

            <div className="bg-white rounded-3xl p-5 shadow-md hover:shadow-xl duration-300">

             {cartItem.map((product)=>{
                return  <div className="flex flex-col md:flex-row gap-6">

                <img
                  src={product.image}
                  alt=""
                  className="w-40 h-40 object-cover rounded-2xl"
                />

                <div className="flex-1">

                  <div className="flex justify-between">

                    <div>

                      <h2 className="text-xl font-semibold text-slate-800">
                       {product.title}
                      </h2>
                      <h2 className="text-lg font-small text-slate-800">
                       {product.description.slice(0,60)}
                      </h2>

                      

                      <span className="inline-block mt-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        In Stock
                      </span>

                    </div>

                    <button 
                    onClick={()=>dispatch(removeCart(product.id))} 
                    className="text-red-500 hover:text-red-600">
                      <Trash2 />
                    </button>

                  </div>

                  <div className="mt-6 flex justify-between items-center flex-wrap gap-5">

                    <div className="flex items-center border rounded-xl overflow-hidden">

                      <button 
                         onClick={()=>dispatch(decrement(product.id))}
                      className="px-4 py-2 hover:bg-slate-100">
                        <Minus />
                      </button>

                      <span className="px-6 font-bold">{product.quantity}</span>

                      <button
                       onClick={()=>dispatch(increment(product.id))}
                       className="px-4 py-2 hover:bg-slate-100">
                        <Plus />
                      </button>

                    </div>

                    <h2 className="text-3xl font-bold text-indigo-600">
                      ${product.price}
                    </h2>

                  </div>

                </div>

              </div>
             })}

            </div>

            {/* Product 2 */}

           

            {/* Product 3 */}

          
          </div>

          {/* Right */}

          <div>

            <div className="bg-white rounded-3xl shadow-lg p-7 sticky top-6">

              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$2478</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$20</span>
                </div>

                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-600">
                    -$100
                  </span>
                </div>

                <hr />

                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span>$2398</span>
                </div>

              </div>

              <button className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-semibold duration-300">
                Proceed To Checkout
              </button>

              <button className="w-full mt-4 border-2 border-indigo-600 text-indigo-600 py-4 rounded-2xl font-semibold hover:bg-indigo-50 duration-300">
                Continue Shopping
              </button>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <Truck className="text-indigo-600" />
                  <p className="text-sm">
                    Free Shipping Above $500
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-green-600" />
                  <p className="text-sm">
                    100% Secure Payment
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Tag className="text-orange-500" />
                  <p className="text-sm">
                    Extra Discounts Available
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <ShoppingBag className="text-pink-600" />
                  <p className="text-sm">
                    Easy Return Within 7 Days
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart;
