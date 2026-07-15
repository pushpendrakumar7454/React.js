import React, { useContext } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { MyStore } from "../context/MyStore";

const Cart = () => {

    let{carts,setCarts,incrementQuantity,descreaeQuantity}=useContext(MyStore)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">

        {/* Left Side */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">

          <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

          {/* Product */}
          {carts.map((item)=>{
            return <div key={item.id} className="flex flex-col sm:flex-row items-center gap-5 border-b pb-6">

            <img
              src={item.image}
              alt="product"
              className="w-32 h-32 object-contain bg-gray-100 rounded-lg"
            />

            <div className="flex-1">
              <h2 className="text-xl font-semibold">
               {item.category}
              </h2>

              <p className="text-gray-500 text-sm mt-2">
                {item.title}
              </p>

              <h3 className="text-2xl font-bold text-green-600 mt-3">
                ${item.price}
              </h3>
            </div>

            <div className="flex flex-col items-center gap-4">

              {/* Quantity */}
              <div className="flex items-center border rounded-lg overflow-hidden">

                <button onClick={()=>descreaeQuantity(item.id)} className="px-3 py-2 hover:bg-gray-100">
                  <Minus size={18} />
                </button>

                <span className="px-5 font-semibold">{item.quantity}</span>

                <button onClick={()=>incrementQuantity(item.id)} className="px-3 py-2 hover:bg-gray-100">
                  <Plus size={18} />
                </button>

              </div>

              <button className="flex items-center gap-2 text-red-600 hover:text-red-700">
                <Trash2 size={18} />
                Remove
              </button>

            </div>
          </div>
          })}

        </div>

        {/* Right Side */}
        <div className="bg-white rounded-2xl shadow-md p-6 h-fit">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$99.99</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$10.00</span>
            </div>

            <div className="flex justify-between">
              <span>Tax</span>
              <span>$5.00</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>$114.99</span>
            </div>

          </div>

          <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-lg font-semibold transition">
            Proceed to Checkout
          </button>

        </div>

      </div>
    </div>
  );
};

export default Cart;
