import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { MyContext } from "./context/MyContext";
import {toast} from 'react-toastify'

const Navvar = () => {
  const { currentUser, setCurrentUser } = useContext(MyContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    toast.success('logout success')
    navigate("/login");
  };

  return (
    <div className="w-full h-screen flex flex-col justify-between ">
      {/* Logo */}
      <div>
        <h1 className="text-3xl font-bold p-4">Lobo</h1>
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-6 text-black text-xl pl-12">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-red-500 text-red-500"
              : "border-b-2 border-gray-300"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-red-500 text-red-500"
              : "border-b-2 border-gray-300"
          }
        >
          Users
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-red-500 text-red-500"
              : "border-b-2 border-gray-300"
          }
        >
          Products
        </NavLink>
      </div>

      {/* User */}
      <div className="flex flex-col items-center gap-4 p-5">
        <h3 className="uppercase text-black font-semibold">
          {currentUser?.name}
        </h3>

        {currentUser ? (
          <button
            onClick={logout}
            className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer active:scale-95"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-amber-500 text-white px-4 py-2 rounded cursor-pointer active:scale-95"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navvar;
