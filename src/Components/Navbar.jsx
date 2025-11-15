import React, { useState } from "react";
import { navLinks } from "../Constraints/index";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const gradient = "bg-gradient-to-r from-[#6C63FF] to-[#00D4FF]";
  const gradientBorder =
    "border-2 border-transparent bg-clip-border rounded-full";

  // Reusable gradient button
  const GradientButton = ({ children, icon }) => (
    <button
      className={`${gradient} ${gradientBorder} text-white px-4 py-2 flex items-center gap-2 hover:opacity-90 transition`}
    >
      {children} {icon && icon}
    </button>
  );

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/50 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Logo */}
          <div
            className={`${gradient} bg-clip-text text-transparent font-bold text-2xl`}
          >
            Shafiq
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-white">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="hover:text-[#00D4FF] cursor-pointer transition"
                >
                  {link.title}
                </li>
              ))}
            </ul>
            <GradientButton icon={<FaPhone />}>Request</GradientButton>
            <GradientButton>Ctrl+K</GradientButton>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <div
              className="text-white text-2xl cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/50 backdrop-blur-md transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-start gap-4 text-white px-6">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="hover:text-[#00D4FF] cursor-pointer transition"
            >
              {link.title}
            </li>
          ))}
          <GradientButton icon={<FaPhone />}>Request</GradientButton>
          <GradientButton>Ctrl+K</GradientButton>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
