import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaArrowUp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-[#040816] via-[#090b20] to-[#160b33] border-t border-white/10">

      {/* Blur Background */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/20 rounded-full blur-[130px] animate-pulse"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 pt-20 pb-8">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div className="space-y-6">

            <h2 className="text-3xl font-bold text-white">
              <span className="text-purple-400">My</span>Website
            </h2>

            <p className="text-gray-400 leading-8">
              We build premium digital experiences with modern UI,
              responsive layouts and clean development for businesses
              around the world.
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-purple-600 hover:scale-110 duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-pink-600 hover:scale-110 duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:scale-110 duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gray-700 hover:scale-110 duration-300"
              >
                <FaGithub />
              </a>

            </div>

          </div>

          {/* Links */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              {[
                "Home",
                "About",
                "Services",
                "Projects",
                "Contact",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-purple-400 hover:translate-x-2 duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">

              {[
                "Web Development",
                "UI / UX Design",
                "React Development",
                "Node.js Backend",
                "SEO Optimization",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-cyan-400 hover:translate-x-2 duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-6 text-gray-400">

              <div className="flex gap-4">
                <FaEnvelope className="text-purple-400 mt-1" />
                <span>hello@example.com</span>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt className="text-cyan-400 mt-1" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-pink-400 mt-1" />
                <span>India</span>
              </div>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-center md:text-left">
            © 2026 MyWebsite. All Rights Reserved.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-700/30 hover:scale-110 duration-300"
          >
            <FaArrowUp className="text-white group-hover:-translate-y-1 duration-300" />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
