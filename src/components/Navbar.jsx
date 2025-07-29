import React, { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-slate-900 text-white p-4 fixed w-full top-0 left-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <a href="/" className="text-3xl font-semibold text-gray-600 font-mono">Ramesh</a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="px-4 py-2 hover:bg-gray-700 rounded">Home</a>
          <a href="#about" className="px-4 py-2 hover:bg-gray-700 rounded">About</a>
          <a href="#projects" className="block px-4 py-2 hover:bg-gray-700 rounded">Projects</a>
          <a href="#contact" className="px-4 py-2 hover:bg-gray-700 rounded">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu with Smooth Animation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMobileMenuOpen ? "auto" : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden md:hidden"
      >
        <a href="#home" className="block px-4 py-2 hover:bg-gray-700 rounded">Home</a>
        <a href="#about" className="block px-4 py-2 hover:bg-gray-700 rounded">About</a>
        <a href="#projects" className="block px-4 py-2 hover:bg-gray-700 rounded">Projects</a>
        <a href="#contact" className="block px-4 py-2 hover:bg-gray-700 rounded">Contact</a>
      </motion.div>
    </nav>
  );
}

export default Navbar;
