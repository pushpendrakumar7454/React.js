import React from "react";

const Section1 = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Our Products
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Card 1 */}
        <div className="bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden hover:shadow-2xl duration-300">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
            alt=""
            className="w-full h-64 object-cover"
          />
          <div className="p-5">
            <h2 className="text-2xl font-bold">Nike Air Max</h2>
            <p className="text-gray-600 mt-2">
              Stylish running shoes with premium comfort.
            </p>
            <div className="flex justify-between items-center mt-5">
              <span className="text-2xl font-bold text-green-600">
                $149
              </span>
              <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl duration-300">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
            alt=""
            className="w-full h-64 object-cover"
          />
          <div className="p-5">
            <h2 className="text-2xl font-bold">iPhone 16 Pro</h2>
            <p className="text-gray-600 mt-2">
              Powerful performance with stunning camera quality.
            </p>
            <div className="flex justify-between items-center mt-5">
              <span className="text-2xl font-bold text-green-600">
                $999
              </span>
              <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl duration-300">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
            alt=""
            className="w-full h-64 object-cover"
          />
          <div className="p-5">
            <h2 className="text-2xl font-bold">Sony Headphones</h2>
            <p className="text-gray-600 mt-2">
              Noise cancellation with crystal clear sound.
            </p>
            <div className="flex justify-between items-center mt-5">
              <span className="text-2xl font-bold text-green-600">
                $249
              </span>
              <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl duration-300">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
            alt=""
            className="w-full h-64 object-cover"
          />
          <div className="p-5">
            <h2 className="text-2xl font-bold">Apple Watch</h2>
            <p className="text-gray-600 mt-2">
              Smart fitness tracking and premium design.
            </p>
            <div className="flex justify-between items-center mt-5">
              <span className="text-2xl font-bold text-green-600">
                $399
              </span>
              <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl duration-300">
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500"
            alt=""
            className="w-full h-64 object-cover"
          />
          <div className="p-5">
            <h2 className="text-2xl font-bold">Adidas Sneakers</h2>
            <p className="text-gray-600 mt-2">
              Lightweight sneakers for everyday comfort.
            </p>
            <div className="flex justify-between items-center mt-5">
              <span className="text-2xl font-bold text-green-600">
                $129
              </span>
              <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl duration-300">
          <img
            src="https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=500"
            alt=""
            className="w-full h-64 object-cover"
          />
          <div className="p-5">
            <h2 className="text-2xl font-bold">MacBook Pro</h2>
            <p className="text-gray-600 mt-2">
              High-performance laptop for professionals.
            </p>
            <div className="flex justify-between items-center mt-5">
              <span className="text-2xl font-bold text-green-600">
                $1,999
              </span>
              <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800">
                Buy Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section1;
