import { useState } from "react";
import { NavLink, Link } from "react-router";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";
import { FaRocket } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 p-2 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-5">

        <div className="h-16 flex items-center justify-between">

          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 flex items-center justify-center">

              <FaRocket className="text-white text-lg" />

            </div>

            <div>

              <h1 className="text-white font-bold text-lg">
                StartupHub
              </h1>

              <p className="text-[10px] tracking-[3px] uppercase text-slate-400">
                Build Together
              </p>

            </div>

          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative pb-2 text-lg font-medium transition-all duration-300 ${
                  isActive
                    ? "text-red-500 text-xl"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Home

                  <span
                    className={`absolute left-0 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 hover:w-full"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/explore"
              className={({ isActive }) =>
                `relative group pb-2  font-medium transition-all duration-300 ${
                  isActive
                    ? "text-red-500 text-xl"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Explore

                  <span
                    className={`absolute left-0 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/startups"
              className={({ isActive }) =>
                `relative group pb-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-red-500 text-xl"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Startups

                  <span
                    className={`absolute left-0 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/community"
              className={({ isActive }) =>
                `relative group pb-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-red-500 text-xl"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Community

                  <span
                    className={`absolute left-0 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative group pb-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-red-500 text-xl"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  About

                  <span
                    className={`absolute left-0 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 ${
                      isActive
                        ? "text-red-500 text-xl"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>

          </nav>

          {/* Right */}

          <div className="hidden lg:flex items-center gap-3">

            <Link
              to="/login"
              className="px-5 py-2 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white hover:opacity-90 transition"
            >
              Launch Startup
            </Link>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white"
          >
            <HiOutlineMenuAlt3 size={30} />
          </button>

        </div>

      </div>
            {/* Overlay */}

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 transition duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      ></div>

      {/* Mobile Drawer */}

      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-slate-900 transition-transform duration-300 lg:hidden ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="flex justify-between items-center p-5 border-b border-slate-700">

          <h2 className="text-white font-semibold">
            StartupHub
          </h2>

          <button onClick={() => setMenuOpen(false)}>
            <HiOutlineX
              size={28}
              className="text-white"
            />
          </button>

        </div>

        <div className="p-5 space-y-3">

          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-red-500 text-xl"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/explore"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-red-500 text-xl"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Explore
          </NavLink>

          <NavLink
            to="/startups"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-red-500 text-xl"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Startups
          </NavLink>

          <NavLink
            to="/community"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-red-500 text-xl"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            Community
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `block rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-red-500 text-xl"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            About
          </NavLink>

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="block text-center mt-6 border border-slate-700 rounded-lg py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="block text-center rounded-lg py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white mt-3 hover:opacity-90 transition"
          >
            Launch Startup
          </Link>

        </div>

      </div>

    </header>
  );
};

export default Navbar;