import { Star, ShoppingCart, ArrowRight, Zap } from "lucide-react";
import axios from "axios";
import { useContext, useEffect } from "react";
import { MyStore } from "../constext/MyContext";
import { useNavigate } from "react-router";

const FeaturedProducts = () => {
  const { topRated, setTopRated, topArrivals, settopArrivals } =
    useContext(MyStore);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");

      const products = res.data.products;

      // Top Rated
      const topRatedProducts = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8);

      // New Arrivals
      const topArrivalProducts = [...products]
        .sort((a, b) => b.id - a.id)
        .slice(0, 8);

      setTopRated(topRatedProducts);
      settopArrivals(topArrivalProducts);
    } catch (error) {
      console.log("Data not found");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ================= TOP RATED ================= */}

          <div className="dark:bg-[#171717] border dark:border-[#2b2b2b] rounded-[28px] p-5 sm:p-6">
            {/* Heading */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Star size={24} className="fill-[#FFD21F] text-[#FFD21F]" />

                <h2 className="dark:text-white text-[22px] font-semibold">
                  Top Rated
                </h2>
              </div>

              <button className="flex items-center gap-2 text-[#B7FF00] text-[18px] font-medium hover:gap-3 duration-300">
                See All
                <ArrowRight size={20} />
              </button>
            </div>

            {/* ================= Product 1 ================= */}

            {topRated.map((product) => {
              return (
                <div
                  key={product.id}
                  onClick={() => navigate(`/detailproduct/${product.id}`)}
                  className="dark:bg-[#111111] border cursor-pointer border-[#2B2B2B] rounded-3xl p-2 flex items-center justify-between mb-5"
                >
                  <div className="flex  items-center gap-3">
                    <img
                      src={product.images[0]}
                      alt=""
                      className="w-16 h-16 rounded-2xl object-cover flex-shrink-0"
                    />

                    <div>
                      <h3 className="dark:text-white text-[13px] lg:text-xl font-semibold font-small gap-1">
                        {product.title.slice(0, 24)}
                      </h3>

                      <div className="flex items-center">
                        <Star
                          size={15}
                          className="fill-[#FFD21F] text-[#FFD21F]"
                        />
                        <span className="text-[#BDBDBD] text-sm">
                          {product.rating.rate}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#9BFF00] text-[12px] font-small">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="p-3 rounded-2xl bg-[#A7F300] hover:bg-[#B8FF19] duration-300 flex items-center justify-center flex-shrink-0">
                    <ShoppingCart size={18} className="text-black" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* ================= NEW ARRIVALS ================= */}

          <div className="dark:bg-[#171717] border dark:border-[#2b2b2b] rounded-[28px] p-5 sm:p-6">
            {/* Heading */}

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Zap size={24} className="text-[#B7FF00]" />

                <h2 className="dark:text-white text-[22px] font-semibold">
                  New Arrivals
                </h2>
              </div>

              <button className="flex items-center gap-2 text-[#B7FF00] text-[18px] font-medium hover:gap-3 duration-300">
                See All
                <ArrowRight size={20} />
              </button>
            </div>

            {topArrivals.map((product) => {
              return (
                <div
                  key={product.id}
                  onClick={() => navigate(`/detailproduct/${product.id}`)}
                  className="dark:bg-[#111111] border cursor-pointer dark:border-[#2B2B2B] rounded-3xl p-2 flex items-center justify-between mb-5"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.images[0]}
                      alt=""
                      className="w-16 h-16 rounded-2xl object-cover flex-shrink-0"
                    />

                    <div>
                      <h3 className="dark:text-white text-[13px] lg:text-xl font-semibold gap-1">
                        {product.title.slice(0, 24)}
                      </h3>

                      <div className="flex items-center">
                        <Star
                          size={15}
                          className="fill-[#FFD21F] text-[#FFD21F]"
                        />
                        <span className="text-[#BDBDBD] text-sm">
                          {product.rating.rate}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[#9BFF00] text-[12px] font-small">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="p-3 rounded-2xl bg-[#A7F300] hover:bg-[#B8FF19] duration-300 flex items-center justify-center flex-shrink-0">
                    <ShoppingCart size={18} className="text-black" />
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
