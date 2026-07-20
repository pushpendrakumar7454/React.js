import React, { useContext, useEffect } from "react";
import { Star, ShoppingCart, ArrowRight, Zap } from "lucide-react";
import axios from "axios";
import { MyStore } from "../constext/MyContext";
import { useNavigate } from "react-router";

const FeaturedProducts = () => {
  let {
    topproducts,
    setTopProducts,
    topRated,
    setTopRated,
    arrivals,
    setArrivals,
    topArrivals,
    settopArrivals,
  } = useContext(MyStore);



  const navigate=useNavigate()

  const getData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setTopProducts(res.data);

      const topRankedData = [...res.data]
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .slice(0, 8);

      setTopRated(topRankedData);
    } catch (error) {
      console.log("Data not found", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getData2 = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setArrivals(res.data);

      const newArrivals = [...res.data].sort((a, b) => b.id - a.id).slice(0, 8);
      settopArrivals(newArrivals);
    } catch (error) {
      console.log("Data not found", error);
    }
  };

  useEffect(() => {
    getData2();
  }, []);

  return (
    <div>
      <div className="w-full bg-white dark:bg-black py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ================= TOP RATED ================= */}

          <div className="dark:bg-[#171717] bg-white/50 border border-[#2b2b2b] rounded-[28px] p-5 sm:p-6">
            {/* Heading */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center lg:gap-3 gap-1">
                <Star size={21} className="fill-[#FFD21F] text-[#FFD21F]" />

                <h2 className="dark:text-white lg:text-[22px] text-[16px] lg:font-semibold font-small">
                  Top Rated
                </h2>
              </div>

              <button className="flex items-center gap-2 text-[#B7FF00] lg:text-[18px] text-[14px] font-medium hover:gap-3 duration-300">
                See All
                <ArrowRight size={16} />
              </button>
            </div>

            {topRated.map((product) => {
              return (
                <div
                 onClick={() => navigate(`/detail/${product.id}`)}
                  key={product.id}
                  product={product}
                  className="dark:bg-[#111111] bg-gray-200 border cursor-pointer border-white dark:border-[#2B2B2B] rounded-3xl lg:p-4 p-2 flex items-center justify-between mb-5"
                >
                  <div className="flex items-center lg:gap-4 gap-4">
                    <img
                      src={product.image}
                      alt=""
                      className="lg:w-20 lg:h-20 w-18 h:18 lg:rounded-2xl rounded object-cover flex-shrink-0"
                    />

                    <div>
                      <h3 className="dark:text-white lg:text-[17px] text-[13px] font-small lg:font-semibold">
                        {product.title.slice(0, 20)}
                      </h3>

                      <div className="flex items-center gap-1 ">
                        <Star
                          size={13}
                          className="fill-[#FFD21F] text-[#FFD21F]"
                        />
                        <span className="dark:text-[#BDBDBD] text-[13px]">
                          {product.rating.rate}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 ">
                        <span className="dark:text-[#9BFF00] text-[15px] font-small">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="p-4 rounded-2xl bg-[#A7F300] hover:bg-[#B8FF19] duration-300 flex items-center justify-center flex-shrink-0">
                    <ShoppingCart size={16} className="text-black" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* ================= NEW ARRIVALS ================= */}

          <div className="dark:bg-[#171717] border border-[#2b2b2b] rounded-[28px] p-5 sm:p-6">
            {/* Heading */}

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center lg:gap-3 gap-1">
                <Zap size={24} className="text-[#B7FF00]" />

                <h2 className="text-white lg:text-[22px] text-[16px] lg:font-semibold font-small">
                  New Arrivals
                </h2>
              </div>

              <button className="flex items-center gap-2 text-[#B7FF00] lg:text-[18px] text-[14px] font-medium hover:gap-3 duration-300">
                See All
                <ArrowRight size={20} />
              </button>
            </div>

            {/* ================= Product 1 ================= */}

            {topArrivals.map((product) => {
              return (
                <div
                onClick={() => navigate(`/detail/${product.id}`)}
                  key={product.id}
                  product={product}
                  className="dark:bg-[#111111] bg-gray-200 border cursor-pointer border-[#2B2B2B] rounded-3xl lg:p-4 p-2 flex items-center justify-between mb-5"
                >
                  <div className="flex items-center lg:gap-4 gap-4">
                    <img
                      src={product.image}
                      alt=""
                      className="lg:w-20 lg:h-20 w-18 h:18 lg:rounded-2xl rounded object-cover flex-shrink-0"
                    />

                    <div>
                      <h3 className="dark:text-white lg:text-[17px] text-[13px] font-small lg:font-semibold">
                        {product.title.slice(0, 20)}
                      </h3>

                      <div className="flex items-center gap-1 ">
                        <Star
                          size={13}
                          className="fill-[#FFD21F] text-[#FFD21F]"
                        />
                        <span className="dark:text-[#BDBDBD] text-[13px]">
                          {product.rating.rate}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 ">
                        <span className="dark:text-[#9BFF00] text-[15px] font-small">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="p-4 rounded-2xl bg-[#A7F300] hover:bg-[#B8FF19] duration-300 flex items-center justify-center flex-shrink-0">
                    <ShoppingCart size={16} className="text-black" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
