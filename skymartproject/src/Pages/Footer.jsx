import React from "react";

const Footer = () => {
  return (
    <footer className="dark:bg-[#090909]  bg-gray-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Logo */}

          <div>
            <h1 className="text-3xl font-bold text-white">
              Shop<span className="dark:text-lime-400">X</span>
            </h1>

            <p className="dark:text-zinc-400 mt-5 leading-7">
              Discover premium products with the best prices, secure
              checkout and lightning-fast delivery.
            </p>

            <div className="flex gap-4 mt-8">

              <div className="w-11 h-11 rounded-xl bg-zinc-800 hover:bg-lime-400 hover:text-black duration-300 flex justify-center items-center cursor-pointer">
                {/* <Facebook size={20} /> */}
              </div>

              <div className="w-11 h-11 rounded-xl bg-zinc-800 hover:bg-lime-400 hover:text-black duration-300 flex justify-center items-center cursor-pointer">
                {/* <Instagram size={20} /> */}
              </div>

              <div className="w-11 h-11 rounded-xl bg-zinc-800 hover:bg-lime-400 hover:text-black duration-300 flex justify-center items-center cursor-pointer">
                {/* <Twitter size={20} /> */}
              </div>

              <div className="w-11 h-11 rounded-xl bg-zinc-800 hover:bg-lime-400 hover:text-black duration-300 flex justify-center items-center cursor-pointer">
                {/* <Github size={20} /> */}
              </div>

            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h2 className="dark:text-white text-xl font-semibold mb-6">
              Quick Links
            </h2>

            <ul className="space-y-4 dark:text-zinc-400">
              <li className="hover:text-lime-400 cursor-pointer duration-300">Home</li>
              <li className="hover:text-lime-400 cursor-pointer duration-300">Shop</li>
              <li className="hover:text-lime-400 cursor-pointer duration-300">Categories</li>
              <li className="hover:text-lime-400 cursor-pointer duration-300">Deals</li>
              <li className="hover:text-lime-400 cursor-pointer duration-300">Contact</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h2 className="dark:text-white text-xl font-semibold mb-6">
              Contact
            </h2>

            <div className="space-y-5 dark:text-zinc-400">

              <div className="flex gap-3">
                {/* <MapPin className="text-lime-400" /> */}
                <p>New Delhi, India</p>
              </div>

              <div className="flex gap-3">
                {/* <Phone className="text-lime-400" /> */}
                <p>+91 9876543210</p>
              </div>

              <div className="flex gap-3">
                {/* <Mail className="text-lime-400" /> */}
                <p>support@shopx.com</p>
              </div>

            </div>
          </div>

          {/* Newsletter */}

          <div>
            <h2 className="dark:text-white text-xl font-semibold mb-6">
              Newsletter
            </h2>

            <p className="dark:text-zinc-400 mb-5">
              Subscribe and get the latest offers directly in your inbox.
            </p>

            <div className="relative">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl py-4 px-5 outline-none text-white focus:border-lime-400"
              />

              <button className="absolute right-2 top-2 w-11 h-11 rounded-lg bg-lime-400 hover:scale-105 duration-300 flex justify-center items-center text-black">
                {/* <Send size={18} /> */}
              </button>

            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-zinc-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-zinc-500 text-sm">
            © 2026 ShopX. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-zinc-500 text-sm">
            <p className="hover:text-lime-400 cursor-pointer">Privacy Policy</p>
            <p className="hover:text-lime-400 cursor-pointer">Terms & Conditions</p>
            <p className="hover:text-lime-400 cursor-pointer">Support</p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;