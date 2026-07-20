import React, { useContext } from "react";
import {
  ShoppingCart,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { MyStore } from "../constext/MyContext";
import { toast } from "react-toastify";

const Cartdetail1 = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const { sportsData, furnicureData, accessories, setCarts, carts } =
    useContext(MyStore);
  const allDummyProducts = [...sportsData, ...furnicureData, ...accessories];
  let product = allDummyProducts.find((val) => val.id == Number(id));
  const isAdded = carts.find((cart) => cart.id === product.id);

  const productdetail = allDummyProducts
    .filter((item) => item.category === product.category)
    .filter(
      (item, index, self) => index === self.findIndex((p) => p.id == item.id),
    );

  const relatedProduct = productdetail.filter((item) => item.id !== product.id);

  const nextButton = () => {
    let current = productdetail.findIndex((item) => item.id === product.id);
    if (current < productdetail.length - 1) {
      navigate(`/detailproduct/${productdetail[current + 1].id}`);
    }
  };

  const prevbutton = () => {
    const current = productdetail.findIndex((item) => item.id === product.id);
    if (current > 0) {
      navigate(`/detailproduct/${productdetail[current - 1].id}`);
    }
  };

  return (
    <div className="min-h-screen dark:bg-[#0d0d0d] bg-gray-100 dark:text-white px-5 md:px-10 lg:px-16 py-10">
      {/* Main Section */}

      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left */}

        <div className="bg-white w-full min-h-[100%] bg-red-600 rounded-3xl  flex justify-center items-center ">
          <img
            src={product?.images[0]}
            alt=""
            className="w-[50%] max-w-md object-contain hover:scale-105 duration-500"
          />
        </div>

        {/* Right */}

        <div>
          <span className="inline-block px-4 py-1 rounded-full bg-lime-400/20 text-lime-400 text-sm lg:mb-4 mb-1">
            {product?.category}
          </span>

          <h1 className="text-2xl lg:text-3xl font-small md:text-5xl ">
            {product?.title}
          </h1>

          <div className="flex items-center gap-2 mt-1 lg:mb-4">
            <div className="flex text-yellow-400">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} />
            </div>

            <span className="text-gray-400">
              ({product?.rating?.count} Reviews)
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-lime-400 mt-2 lg:mt-6">
            ${product?.price}
          </h2>

          <p className="text-gray-400 mt-1 lg:mt-3 leading-6">
            {product?.description}
          </p>

          {/* Buttons */}

          <div className="flex gap-4 mt-4">
            {isAdded ? (
              <button
                onClick={() => {
                  setCarts((prev) => {
                    const exist = prev.find((item) => item.id === product.id);

                    if (exist) {
                      toast.success("🛒 Quantity Updated!", {
                        position: "top-center",
                        autoClose: 2000,
                      });

                      return prev.map((item) =>
                        item.id === product.id
                          ? { ...item, quantity: item.quantity + 1 }
                          : item,
                      );
                    }
                    toast.success("🛒 Product Added to Cart!", {
                      position: "top-right",
                      autoClose: 2000,
                    });

                    return [...prev, { ...product, quantity: 1 }];
                  });
                }}
                className="flex-1 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl  flex justify-center items-center py-3 cursor-pointer active:scale-95 gap-3 duration-300"
              >
                <ShoppingCart size={22} />
                Added
              </button>
            ) : (
              <button
                onClick={() => {
                  setCarts((prev) => {
                    const exist = prev.find((item) => item.id === product.id);

                    if (exist) {
                      toast.success("🛒 Quantity Updated!", {
                        position: "top-center",
                        autoClose: 2000,
                      });

                      return prev.map((item) =>
                        item.id === product.id
                          ? { ...item, quantity: item.quantity + 1 }
                          : item,
                      );
                    }
                    toast.success("🛒 Product Added to Cart!", {
                      position: "top-right",
                      autoClose: 2000,
                    });

                    return [...prev, { ...product, quantity: 1 }];
                  });
                }}
                className="flex-1 bg-lime-400 hover:bg-lime-300 text-black font-semibold rounded-xl  flex justify-center items-center py-3 cursor-pointer active:scale-95 gap-3 duration-300"
              >
                <ShoppingCart size={22} />
                Add To Cart
              </button>
            )}

            <button className="border border-gray-700 rounded-xl w-13 flex justify-center items-center hover:border-lime-400 duration-300">
              <Heart />
            </button>
          </div>

          {/* Features */}

          <div className="grid sm:grid-cols-3 gap-4 mt-4">
            <div className="border h-26 border-gray-700 rounded-2xl p-4  text-center hover:border-lime-400 duration-300 hidden lg:block">
              <Truck className="mx-auto text-lime-400" />
              <h3 className=" font-semibold">Free Delivery</h3>
              <p className="text-sm text-gray-500">Orders Above $50</p>
            </div>

            <div className="border h-26 border-gray-700 rounded-2xl p-4 text-center hover:border-lime-400 duration-300 hidden lg:block">
              <ShieldCheck className="mx-auto text-lime-400" />
              <h3 className="mt-3 font-semibold">Secure Payment</h3>
              <p className="text-sm text-gray-500">SSL Protected</p>
            </div>

            <div className="border h-26 border-gray-700 rounded-2xl p-4 text-center hover:border-lime-400 duration-300 hidden lg:block">
              <RotateCcw className="mx-auto text-lime-400" />
              <h3 className="mt-3 font-semibold">Easy Return</h3>
              <p className="text-sm text-gray-500">7 Days Return</p>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Next */}

      <div className="flex justify-end gap-4 mt-4 flex-wrap">
        <button
          onClick={prevbutton}
          className="px-8 py-3 w-full justify-center lg:w-40 active:scale-95 cursor-pointer rounded-xl bg-zinc-800 hover:bg-zinc-700 flex items-center gap-2"
        >
          <ChevronLeft size={18} />
          Previous
        </button>

        <button
          onClick={nextButton}
          className="px-8 py-3 w-full text-center lg:w-40  active:scale-95 cursor-pointer justify-center rounded-xl bg-lime-400 text-black hover:bg-lime-300 flex items-center gap-2"
        >
          Next
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Related */}

      <div className="mt-4">
        <h2 className="text-2xl font-small mb-5">Related Products</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProduct.map((item) => (
            <div
              onClick={() => navigate(`/detailproduct/${item.id}`)}
              key={item.id}
              className="dark:bg-zinc-900 cursor-pointer rounded-3xl overflow-hidden border border-zinc-800 hover:border-lime-400 hover:-translate-y-2 duration-300"
            >
              <div className="bg-white p-6">
                <img
                  src={item.images[0]}
                  alt=""
                  className="h-48 mt-3 w-full object-cover rounded-xl"
                />
              </div>

              <div className="p-4">
                <span className="text-gray-400 text-sm">{item.title}</span>

                <h3 className="text-xl font-semibold ">{item.category}</h3>

                <div className="flex justify-between items-center ">
                  <h4 className="text-lime-400 text-2xl font-semibold">
                    {item.price}
                  </h4>

                  {isAdded ? (
                    <button
                      onClick={() => {
                        setCarts((prev) => {
                          const exist = prev.find(
                            (item) => item.id === product.id,
                          );

                          if (exist) {
                            toast.success("🛒 Quantity Updated!", {
                              position: "top-center",
                              autoClose: 2000,
                            });

                            return prev.map((item) =>
                              item.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item,
                            );
                          }
                          toast.success("🛒 Product Added to Cart!", {
                            position: "top-right",
                            autoClose: 2000,
                          });

                          return [...prev, { ...product, quantity: 1 }];
                        });
                      }}
                      className="bg-green-500 active:scale-95 cursor-pointer text-black px-4 py-2 rounded-lg hover:bg-lime-300 duration-300"
                    >
                      Added
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setCarts((prev) => {
                          const exist = prev.find(
                            (item) => item.id === product.id,
                          );

                          if (exist) {
                            toast.success("🛒 Quantity Updated!", {
                              position: "top-center",
                              autoClose: 2000,
                            });

                            return prev.map((item) =>
                              item.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item,
                            );
                          }
                          toast.success("🛒 Product Added to Cart!", {
                            position: "top-right",
                            autoClose: 2000,
                          });

                          return [...prev, { ...product, quantity: 1 }];
                        });
                      }}
                      className="bg-lime-400 active:scale-95 cursor-pointer text-black px-4 py-2 rounded-lg hover:bg-lime-300 duration-300"
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cartdetail1;
