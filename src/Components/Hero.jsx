import React from "react";
import { me } from "../assets/index";

const Hero = () => {
  return (
    <section className="w-full flex justify-center py-16 bg-[#000720]">
      <div className="w-[90%] flex flex-col items-center text-center text-white space-y-3">
        <p className="text-lg text-gray-300">Hey I’m</p>

        <h1 className="text-4xl font-bold">ShafiqUllah Afghan</h1>

        <h2 className="text-2xl font-semibold">Front End Developer</h2>

        <p className="text-gray-300 max-w-md">
          Specialized in building interactive websites/applications
        </p>

        <img
          src={me}
          alt="ShafiqUllah Afghan"
          className="w-[350px] h-[350px] object-cover border-4 border-transparent  p-[2px] mt-5 rounded-[20px]"
        />
      </div>
    </section>
  );
};

export default Hero;
