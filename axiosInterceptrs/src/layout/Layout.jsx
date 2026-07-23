import React from "react";
import { Outlet } from "react-router";
import Navvar from "../components/Navvar";

const Layout = () => {
  return (
    <div className="grid grid-cols-[1fr_7fr] h-screen">
      {/* Left Navbar */}
      <div className="h-screen border-r-2 border-red-500">
        <Navvar />
      </div>

      {/* Right Content */}
      <div className="h-screen overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
