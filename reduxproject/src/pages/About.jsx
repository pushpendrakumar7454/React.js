import React from "react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaRocket,
  FaCode,
  FaShieldAlt,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-[#040816] via-[#090b20] to-[#160b33] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <div className="relative mt-20 min-h-screen flex items-center px-6 lg:px-20">

        {/* Blur Effects */}
        <div className="absolute top-16 left-10 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-8">

            <span className="px-5 py-2 rounded-full border border-purple-500/40 bg-white/5 backdrop-blur-md text-purple-300 text-sm tracking-widest uppercase">
              About Our Company
            </span>

            <h1 className="text-5xl lg:text-6xl  mt-8 font-semibold ">
              We Create
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Modern Digital
              </span>
              Experiences.
            </h1>

            <p className="text-gray-400 text-lg  max-w-xl">
              We design and develop premium websites that are modern,
              responsive and lightning fast. Our goal is to deliver beautiful
              user experiences with clean code and creative design.
            </p>

            <div className="flex flex-wrap gap-5">

              <button className="px-8 py-3 cursor-pointer active:scale-95 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold flex items-center gap-3 hover:scale-105 duration-300 shadow-xl shadow-purple-700/30">
                Shop Now
                <FaArrowRight />
              </button>

              <button className="px-8 py-3 cursor-pointer active:scale-95 rounded-xl border border-white/20 hover:bg-white/10 duration-300">
                Learn More
              </button>

            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">

              <div>
                <h2 className="text-3xl font-bold text-purple-400">150+</h2>
                <p className="text-gray-400 text-sm mt-2">Projects</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">98%</h2>
                <p className="text-gray-400 text-sm mt-2">Happy Clients</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-pink-400">5+</h2>
                <p className="text-gray-400 text-sm mt-2">Years Experience</p>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">

            <div className="absolute w-80 h-80 rounded-full bg-purple-600/20 blur-[120px]"></div>

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 max-w-md w-full hover:-translate-y-2 duration-500">

              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <div className="bg-purple-600/20 p-2 rounded-xl">
                    <FaRocket className="text-3xl text-purple-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl">
                      Innovation First
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      Building future-ready digital products.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-cyan-500/20 p-4 rounded-xl">
                    <FaCode className="text-sm text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl">
                      Clean Development
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      Optimized & scalable coding practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-pink-500/20 p-4 rounded-xl">
                    <FaShieldAlt className="text-sm text-pink-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-xl">
                      Secure Solutions
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      Security & performance are our priority.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ================= ABOUT US ================= */}

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CARD */}

          <div className="relative">

            <div className="absolute inset-0 bg-purple-700/20 blur-[80px] rounded-full"></div>

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-10">

              <div className="grid grid-cols-2 gap-5">

                <div className="rounded-2xl bg-white/5 p-8 hover:bg-purple-600/20 duration-300">
                  <FaRocket className="text-4xl text-purple-400 mb-5" />
                  <h3 className="font-bold text-xl">
                    Innovation
                  </h3>
                </div>

                <div className="rounded-2xl bg-white/5 p-8 hover:bg-cyan-600/20 duration-300">
                  <FaCode className="text-4xl text-cyan-400 mb-5" />
                  <h3 className="font-bold text-xl">
                    Development
                  </h3>
                </div>

                <div className="rounded-2xl bg-white/5 p-8 hover:bg-pink-600/20 duration-300">
                  <FaShieldAlt className="text-4xl text-pink-400 mb-5" />
                  <h3 className="font-bold text-xl">
                    Security
                  </h3>
                </div>

                <div className="rounded-2xl bg-white/5 p-8 hover:bg-blue-600/20 duration-300">
                  <FaCheckCircle className="text-4xl text-blue-400 mb-5" />
                  <h3 className="font-bold text-xl">
                    Quality
                  </h3>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <span className="text-purple-400 uppercase tracking-[4px]">
              About Us
            </span>

            <h2 className="text-5xl font-semibold mt-4">
              Turning Ideas Into
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
                Powerful Digital Products
              </span>
            </h2>

            <p className="text-gray-400 leading-8 mt-8">
              Our team specializes in designing modern digital experiences that
              combine creativity, innovation and performance. We focus on
              delivering high-quality websites with premium UI, responsive
              layouts and scalable architecture.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-purple-400 text-xl" />
                <p className="text-gray-300">
                  Responsive Design For Every Device
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-purple-400 text-xl" />
                <p className="text-gray-300">
                  Fast Performance & Clean Code
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-purple-400 text-xl" />
                <p className="text-gray-300">
                  Modern UI With Smooth Animations
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-purple-400 text-xl" />
                <p className="text-gray-300">
                  SEO Friendly & Secure Development
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
