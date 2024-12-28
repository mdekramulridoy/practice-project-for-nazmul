import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white ">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <button className="text-2xl font-bold text-black">arc</button>

        {/* Hamburger Menu (Visible on Small and Medium Screens) */}
        <div className="md:block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <div className="w-6 h-[2px] bg-blue-500 mb-1"></div>
            <div className="w-6 h-[2px] bg-blue-500 mb-1"></div>
            <div className="w-6 h-[2px] bg-blue-500"></div>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex space-y-4 lg:space-y-0 lg:space-x-8 absolute lg:static top-12 left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:flex-row flex-col z-10`}
        >
          <a
            href="#solutions"
            className="block lg:inline-block text-sm font-medium text-black hover:text-gray-600 px-4 py-2 lg:py-0"
          >
            Solutions
          </a>
          <a
            href="#resources"
            className="block lg:inline-block text-sm font-medium text-black hover:text-gray-600 px-4 py-2 lg:py-0"
          >
            Resources
          </a>
          <a
            href="#ai-for-humans"
            className="block lg:inline-block text-sm font-medium text-black hover:text-gray-600 px-4 py-2 lg:py-0"
          >
            AI for Humans
          </a>
          <a
            href="#pricing"
            className="block lg:inline-block text-sm font-medium text-black hover:text-gray-600 px-4 py-2 lg:py-0"
          >
            Pricing
          </a>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Solid Button */}
          <button className="px-6 py-2 text-white bg-blue-500 rounded-full shadow-md hover:shadow-lg transition duration-300">
            Launch Reactor
          </button>

          {/* Gradient Border Button */}
          <button className="px-1 py-1 text-black bg-white rounded-full border-2 border-transparent relative overflow-hidden hover:shadow-lg transition duration-300">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full -m-[2px]"></span>
            <span className="relative block bg-white rounded-full px-6 py-2">
              Launch Protocol
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
