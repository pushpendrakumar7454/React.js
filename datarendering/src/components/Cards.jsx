import React from "react";

const Cards = (props) => {
  return (
    <div>
      <div className="w-78 h-115 max-w-sm bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 hover:scale-105 transition-all duration-300 cursor-pointer">
        {/* Product Image */}
        <div className="relative">
          <img
            src={props.img}
            alt="Product"
            className="w-full h-64 object-cover"
          />

          <span className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            New
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">{props.name}</h2>

          <p className="text-slate-400 mt-2 text-sm">{props.dec}</p>

          <div className="flex items-center justify-between mt-6">
            <div>
              <p className="text-slate-400 text-sm">Price</p>
              <h3 className="text-3xl font-bold text-emerald-400">
                ₹{props.price}
              </h3>
            </div>

            <button className="bg-red-500 hover:bg-red-600 active:scale-95 transition px-5 py-3 rounded-xl text-white font-semibold shadow-lg cursor-pointer" onClick={(id)=>props.del(props.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
