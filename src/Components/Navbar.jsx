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
    <nav className="w-full flex justify-center py-4">
      <div className="w-[90%] flex items-center justify-between">
        {/* Left - Gradient Name */}
        <div
          className={`${gradient} bg-clip-text text-transparent font-bold text-xl`}
        >
          Shafiq
        </div>

        {/* Center - Desktop Nav */}
        <div className="hidden md:flex items-center justify-center gap-12 bg-white/10 backdrop-blur-md px-8 py-2 rounded-full">
          <ul className="flex items-center gap-10 text-white">
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
        </div>

        {/* Right - Desktop Ctrl+K & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <GradientButton>Ctrl+K</GradientButton>
          </div>
          <div
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden w-[90%] mx-auto mt-4 bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96 p-4 flex flex-col gap-4" : "max-h-0 p-0"
        } text-white`}
      >
        {navLinks.map((link) => (
          <div
            key={link.id}
            className="hover:text-[#00D4FF] cursor-pointer transition"
          >
            {link.title}
          </div>
        ))}
        <GradientButton icon={<FaPhone />}>Request</GradientButton>
        <GradientButton>Ctrl+K</GradientButton>
      </div>
    </nav>
  );
};

export default Navbar;
