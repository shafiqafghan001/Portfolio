import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-[#000720] flex flex-col items-center text-center space-y-2">
      {/* First line */}
      <p className="text-white font-bold text-2xl">
        2025 Made with | Almost all rights reserved.
      </p>

      {/* Second line with gradient name and extra bold */}
      <h2 className="text-xl font-extrabold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">
        ShafiqUllah Afghan
      </h2>
    </footer>
  );
};

export default Footer;
