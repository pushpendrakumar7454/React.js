import React from "react";
import {
  Zap,
  Package,
  Users,
  Star,
  Truck,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import { useNavigate } from "react-router";

const About = () => {

    const naviagte=useNavigate()
  return (
    <section className="min-h-screen bg-slate-200 dark:bg-[#0b0b0b] text-white px-4 sm:px-6 lg:px-8 py-16">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">

        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-lime-400 text-black">
          <Zap size={28} />
        </div>

        <h1 className="mt-7 text-3xl sm:text-4xl font-bold">
          About <span className="dark:text-lime-400 text-black">SkyMart</span>
        </h1>

        <p className="mt-4 text-sm sm:text-base text-black dark:text-gray-400">
          SkyMart is a next-generation e-commerce platform built to make online
          shopping fast, fair, and enjoyable — for everyone.
        </p>

      </div>


      {/* Stats */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="border border-gray-700 rounded-2xl text-black dark:text-white p-6 text-center">
          <Package className="mx-auto text-lime-400" size={22}/>
          <h2 className="text-2xl font-bold mt-3">20K+</h2>
          <p className="text-xs text-gray-500">Products</p>
        </div>


        <div className="border border-gray-700 rounded-2xl text-black dark:text-white p-6 text-center">
          <Users className="mx-auto text-lime-400" size={22}/>
          <h2 className="text-2xl font-bold mt-3">50K+</h2>
          <p className="text-xs text-gray-500">Happy Customers</p>
        </div>


        <div className="border border-gray-700 rounded-2xl text-black dark:text-white p-6 text-center">
          <Star className="mx-auto text-lime-400" size={22}/>
          <h2 className="text-2xl font-bold mt-3">4.9</h2>
          <p className="text-xs text-gray-500">Avg. Rating</p>
        </div>


        <div className="border border-gray-700 rounded-2xl text-black dark:text-white p-6 text-center">
          <Truck className="mx-auto text-lime-400" size={22}/>
          <h2 className="text-2xl font-bold mt-3">99%</h2>
          <p className="text-xs text-gray-500">On-time Delivery</p>
        </div>

      </div>



      {/* Story */}
      <div className="max-w-5xl mx-auto mt-16 border border-gray-700 rounded-3xl p-6 sm:p-10">

        <h2 className="text-xl sm:text-2xl text-black dark:text-white font-bold">
          Our Story
        </h2>

        <p className="mt-5 text-sm text-black dark:text-gray-400 leading-7">
          SkyMart started in 2022 as a small side project — two engineers tired
          of bloated, slow e-commerce experiences. We asked ourselves:
          what if shopping online was actually enjoyable?
        </p>

        <p className="mt-5 text-sm text-gray-500 dark:text-gray-400 leading-7">
          Three years later, SkyMart serves over 50,000 customers across the
          country. We stock electronics, fashion, jewelry, and everyday
          essentials — all at prices that don't require a second mortgage.
        </p>

        <p className="mt-5 text-sm text-gray-500 dark:text-gray-400 leading-7">
          We're still the same team at heart: obsessed with speed,
          transparency, and making you feel good about every purchase.
        </p>

      </div>




      {/* Stand For */}
      <div className="max-w-5xl mx-auto mt-14">

        <h2 className="text-center text-2xl font-bold mb-8">
          What We Stand For
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


          <div className="border border-gray-700 rounded-2xl p-5 flex gap-4">
            <ShieldCheck className="text-lime-400 bg-lime-400/10 p-2 rounded-xl" size={45}/>
            <div>
              <h3 className="font-bold">Trust</h3>
              <p className="text-sm text-gray-400 mt-2">
                Every product is verified for quality and authenticity.
              </p>
            </div>
          </div>



          <div className="border border-gray-700 rounded-2xl p-5 flex gap-4">
            <Truck className="text-lime-400 bg-lime-400/10 p-2 rounded-xl" size={45}/>
            <div>
              <h3 className="font-bold">Speed</h3>
              <p className="text-sm text-gray-400 mt-2">
                We obsess over delivery times so orders arrive on time.
              </p>
            </div>
          </div>



          <div className="border border-gray-700 rounded-2xl p-5 flex gap-4">
            <HeartHandshake className="text-lime-400 bg-lime-400/10 p-2 rounded-xl" size={45}/>
            <div>
              <h3 className="font-bold">Community</h3>
              <p className="text-sm text-gray-400 mt-2">
                Built around real customer feedback.
              </p>
            </div>
          </div>



          <div className="border border-gray-700 rounded-2xl p-5 flex gap-4">
            <Star className="text-lime-400 bg-lime-400/10 p-2 rounded-xl" size={45}/>
            <div>
              <h3 className="font-bold">Quality</h3>
              <p className="text-sm text-gray-400 mt-2">
                Only great products, no unnecessary items.
              </p>
            </div>
          </div>


        </div>

      </div>





      {/* Team */}
      <div className="max-w-5xl mx-auto mt-16">

        <h2 className="text-center text-2xl font-bold mb-8">
          Meet the Team
        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">


          <div className="border border-gray-700 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 mx-auto bg-lime-400 text-black rounded-xl flex items-center justify-center font-bold">
              A
            </div>
            <h3 className="mt-4 font-bold">Aryan Shah</h3>
            <p className="text-xs text-gray-500">Founder & CEO</p>
          </div>


          <div className="border border-gray-700 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 mx-auto bg-blue-500 rounded-xl flex items-center justify-center font-bold">
              P
            </div>
            <h3 className="mt-4 font-bold">Priya Mehta</h3>
            <p className="text-xs text-gray-500">Head of Product</p>
          </div>


          <div className="border border-gray-700 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 mx-auto bg-purple-500 rounded-xl flex items-center justify-center font-bold">
              R
            </div>
            <h3 className="mt-4 font-bold">Rohan Verma</h3>
            <p className="text-xs text-gray-500">Lead Engineer</p>
          </div>


          <div className="border border-gray-700 rounded-2xl p-6 text-center">
            <div className="w-12 h-12 mx-auto bg-pink-500 rounded-xl flex items-center justify-center font-bold">
              S
            </div>
            <h3 className="mt-4 font-bold">Sneha Kapoor</h3>
            <p className="text-xs text-gray-500">Design Director</p>
          </div>


        </div>

      </div>




      {/* CTA */}
      <div className="max-w-5xl mx-auto mt-12 border border-lime-900 rounded-3xl p-8 text-center">

        <h2 className="text-2xl font-bold">
          Ready to shop?
        </h2>

        <p className="text-sm text-gray-400 mt-3">
          Explore thousands of products at unbeatable prices.
        </p>

        <button onClick={()=>naviagte('/product')} className="mt-6 cursor-pointer active:scale-95 bg-lime-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-lime-300">
          Browse Products →
        </button>

      </div>


    </section>
  );
};


export default About;
