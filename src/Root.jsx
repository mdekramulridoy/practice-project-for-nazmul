import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

const Root = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className=" mx-auto">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Root;
