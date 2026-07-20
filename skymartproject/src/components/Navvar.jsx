import React, { useContext, useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  Bell,
  Menu,
  ChevronDown,
  LogOut,
  Sun,
  Moon,
  X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { MyStore } from "../constext/MyContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const { currentUser, setCurrentUser, carts, menuOpen, setMenuOpen } =
    useContext(MyStore);

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    alert("User Logout");
    navigate("/login");
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 dark:bg-[#0a0a0a]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-6">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-black font-black text-xl shadow-lg shadow-lime-400/30">
              ⚡
            </div>

            <div>
              <h1 className="text-xl font-bold dark:text-white">
                Sky<span className="dark:text-lime-400">Mart</span>
              </h1>
              <p className="text-xs text-black dark:text-zinc-500 -mt-1">
                Premium Store
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-10 text-sm lg:text-lg font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "dark:text-lime-400 text-red-600"
                  : "dark:text-zinc-400 "
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "dark:text-lime-400 text-red-600"
                  : "dark:text-zinc-400 hover:text-green-600 dark:hover:text-white transition"
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "dark:text-lime-400 text-red-600"
                  : "dark:text-zinc-400 hover:text-green-600  dark:hover:text-white transition"
              }
            >
              About
            </NavLink>
          </ul>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="relative h-11 w-11 rounded-xl dark:bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-lime-400 transition">
              <Heart className="dark:text-white" size={18} />
            </button>
            <button
              onClick={() => {
                setDarkMode(!darkMode);

                document.documentElement.classList.toggle("dark");
              }}
              className="h-11 cursor-pointer active:scale-95 w-11 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center"
            >
              {darkMode ? (
                <Moon className="text-black dark:text-white" size={18} />
              ) : (
                <Sun className="text-yellow-400" size={18} />
              )}
            </button>
             
            <button
              onClick={() => navigate("/cartpage")}
              className="relative h-11 cursor-pointer w-11 rounded-xl dark:bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:border-lime-400 transition"
            >
              <ShoppingCart className="dark:text-white" size={18} />

              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                {carts.length}
              </span>
            </button>

            <div className="flex items-center gap-3 rounded-2xl border dark:border-zinc-800 dark:bg-zinc-900 px-3 py-2">
              <div className="h-9 w-9 uppercase rounded-xl dark:bg-lime-400 flex items-center justify-center dark:text-black  bg-green-500 font-semibold">
                {currentUser ? currentUser.name.slice(0, 1) : "P"}
              </div>

              <div>
                <h3 className="dark:text-white text-sm font-semibold">
                  {currentUser ? currentUser.name : "Guest"}
                </h3>

                <p className="text-xs dark:text-zinc-500">Premium User</p>
              </div>

              <ChevronDown size={18} className="text-zinc-400" />
            </div>

            {currentUser && (
              <button onClick={logout} className="dark:text-white active:scale-95">
                <LogOut />
              </button>
            )}
          </div>

          {/* Mobile Button */}
       <div className="flex gap-2 lg:hidden">
            <button
              onClick={() => {
                setDarkMode(!darkMode);

                document.documentElement.classList.toggle("dark");
              }}
              className="h-11 lg:hidden cursor-pointer active:scale-95 w-11 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center"
            >
              {darkMode ? (
                <Moon className="text-black dark:text-white" size={18} />
              ) : (
                <Sun className="text-yellow-400" size={18} />
              )}
            </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden h-11 w-11 rounded-xl dark:bg-zinc-900 border border-zinc-800 flex items-center justify-center"
          >
            {menuOpen ? (
              <X className="dark:text-white" />
            ) : (
              <Menu className="dark:text-white" />
            )}
          </button>
       </div>
          
        </div>

        {/* Mobile / Tablet Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[700px]" : "max-h-0"
          }`}
        >
          <div className="border-t border-zinc-800 dark:bg-[#0a0a0a] text-black px-5 py-5 space-y-5">
            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 uppercase rounded-xl bg-lime-400 flex items-center justify-center dark:text-black font-bold">
                {currentUser ? currentUser.name.slice(0, 1) : "P"}
              </div>

              <div>
                <h2 className="dark:text-white font-semibold">
                  {currentUser ? currentUser.name : "Guest"}
                </h2>

                <p className="text-zinc-500 text-sm">Premium User</p>
              </div>
            </div>

            {/* Search */}

            {/* Links */}
            <div className="flex flex-col gap-4 dark:text-white">
              <NavLink onClick={() => setMenuOpen(false)} to="/">
                Home
              </NavLink>

              <NavLink onClick={() => setMenuOpen(false)} to="/product">
                Shop
              </NavLink>

              <button className="text-left">About</button>
            </div>

            {/* Icons */}

            <div className="flex justify-between">
              <button className="h-12 w-12 rounded-xl dark:bg-zinc-900 border border-zinc-800 flex justify-center items-center">
                <Heart className="dark:text-white" />
              </button>

              <button className="h-12 w-12 rounded-xl dark:bg-zinc-900 border border-zinc-800 flex justify-center items-center">
                <Bell className="dark:text-white" />
              </button>

              <button
                onClick={() => navigate("/cartpage")}
                className="relative h-12 w-12 rounded-xl dark:bg-zinc-900 border border-zinc-800 flex justify-center items-center"
              >
                <ShoppingCart className="dark:text-white" />

                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                  {carts.length}
                </span>
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
