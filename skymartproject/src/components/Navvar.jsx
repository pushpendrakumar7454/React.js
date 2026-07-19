import React, { useContext, useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Bell,
  Menu,
  ChevronDown,
  LogOut,
  X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { MyStore } from "../constext/MyContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(MyStore);

  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    alert("User Logout");
    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-[#0a0a0a]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-6">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-black font-black text-xl shadow-lg shadow-lime-400/30">
              ⚡
            </div>

            <div>
              <h1 className="text-xl font-semibold text-white">
                Sky<span className="text-lime-400">Mart</span>
              </h1>
              <p className="text-xs text-zinc-500 -mt-1">Premium Store</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-sm font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-lime-400"
                  : "text-zinc-400 hover:text-white transition"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "text-lime-400"
                  : "text-zinc-400 hover:text-white transition"
              }
            >
              Shop
            </NavLink>

            <li className="text-zinc-400 hover:text-white cursor-pointer">
              Categories
            </li>

            <li className="text-zinc-400 hover:text-white cursor-pointer">
              Deals
            </li>

            <li className="text-zinc-400 hover:text-white cursor-pointer">
              About
            </li>
          </ul>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2">
              <Search size={18} className="text-zinc-500" />

              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm text-white placeholder:text-zinc-500 w-40"
              />
            </div>

            <button className="relative h-11 w-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-lime-400 transition">
              <Heart className="text-white" size={18} />
            </button>

            <button className="relative h-11 w-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-lime-400 transition">
              <Bell className="text-white" size={18} />

              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-lime-400 text-black text-xs flex items-center justify-center font-bold">
                4
              </span>
            </button>

            <button className="relative h-11 w-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-lime-400 transition">
              <ShoppingCart className="text-white" size={18} />

              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                2
              </span>
            </button>

            <div className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 px-3 py-2">
              <div className="h-9 w-9 uppercase rounded-xl bg-lime-400 flex items-center justify-center text-black font-semibold">
                {currentUser ? currentUser.name.slice(0, 1) : "P"}
              </div>

              <div>
                <h3 className="text-white text-sm font-semibold">
                  {currentUser ? currentUser.name : "Guest"}
                </h3>

                <p className="text-xs text-zinc-500">Premium User</p>
              </div>

              <ChevronDown size={18} className="text-zinc-400" />
            </div>

            {currentUser && (
              <button
                onClick={logout}
                className="text-white active:scale-95"
              >
                <LogOut />
              </button>
            )}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden h-11 w-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center"
          >
            {menuOpen ? (
              <X className="text-white" />
            ) : (
              <Menu className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile / Tablet Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[700px]" : "max-h-0"
          }`}
        >
          <div className="border-t border-zinc-800 bg-[#0a0a0a] px-5 py-5 space-y-5">
            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 uppercase rounded-xl bg-lime-400 flex items-center justify-center text-black font-bold">
                {currentUser ? currentUser.name.slice(0, 1) : "P"}
              </div>

              <div>
                <h2 className="text-white font-semibold">
                  {currentUser ? currentUser.name : "Guest"}
                </h2>

                <p className="text-zinc-500 text-sm">
                  Premium User
                </p>
              </div>
            </div>

            {/* Search */}
            <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
              <Search size={18} className="text-zinc-500" />

              <input
                placeholder="Search..."
                className="bg-transparent outline-none w-full text-white"
              />
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4 text-white">
              <NavLink onClick={() => setMenuOpen(false)} to="/">
                Home
              </NavLink>

              <NavLink onClick={() => setMenuOpen(false)} to="/product">
                Shop
              </NavLink>

              <button className="text-left">Categories</button>

              <button className="text-left">Deals</button>

              <button className="text-left">About</button>
            </div>

            {/* Icons */}
            <div className="flex justify-between">
              <button className="h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800 flex justify-center items-center">
                <Heart className="text-white" />
              </button>

              <button className="h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800 flex justify-center items-center">
                <Bell className="text-white" />
              </button>

              <button className="h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800 flex justify-center items-center">
                <ShoppingCart className="text-white" />
              </button>
            </div>

            {/* Logout */}
            {currentUser && (
              <button
                onClick={logout}
                className="w-full rounded-xl bg-red-500 py-3 font-semibold text-white flex items-center justify-center gap-2"
              >
                <LogOut size={18} />
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
