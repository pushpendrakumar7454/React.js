import React from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Bell,
  Menu,
  ChevronDown,
} from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router";

const Navbar = () => {
  let naviagte = useNavigate();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-[#0a0a0a]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
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

        {/* Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-sm font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-lime-400 cursor-pointer"
                : "text-zinc-400 hover:text-white transition cursor-pointer"
            }
          >
            Home
          </NavLink>
    <NavLink to="/product" className={({isActive})=>
    isActive?"text-lime-400 cursor-pointer":"text-zinc-400 hover:text-white transition cursor-pointer"
    }>
      Shop

    </NavLink>
          <li className="text-zinc-400 hover:text-white transition cursor-pointer">
            Categories
          </li>

          <li className="text-zinc-400 hover:text-white transition cursor-pointer">
            Deals
          </li>

          <li className="text-zinc-400 hover:text-white transition cursor-pointer">
            About
          </li>
        </ul>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2">
            <Search size={18} className="text-zinc-500" />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-white placeholder:text-zinc-500 w-40"
            />
          </div>

          {/* Icons */}

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

          {/* Profile */}

          <div className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 px-3 py-2 cursor-pointer hover:border-lime-400 transition">
            <div className="h-9 w-9 rounded-xl bg-lime-400 flex items-center justify-center text-black font-semibold">
              P
            </div>

            <div>
              <h3 className="text-white text-sm font-semibold">Pushpendra</h3>
              <p className="text-xs text-zinc-500">Premium User</p>
            </div>

            <ChevronDown size={18} className="text-zinc-400" />
          </div>
        </div>

        {/* Mobile */}

        <button className="lg:hidden h-11 w-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
          <Menu className="text-white" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
