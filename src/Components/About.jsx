// src/Components/About.jsx
import React from "react";
import { aboutdata } from "../Constraints/index";

const About = () => {
  return (
    <section className="w-full py-8 bg-[#000720] flex justify-center">
      <div className="w-[90%] max-w-5xl">
        {/* Title */}
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent mb-4 text-center">
          About
        </h2>

        {/* Description */}
        <p className="text-gray-300 max-w-3xl mx-auto text-center mb-12">
          I’m passionate MERN-stack developer who loves turning ideas into
          elegant, functional web applications. With a keen eye for design and a
          commitment to clean code — digital experiences that matter.
        </p>

        {/* Cards grid: 1 column on small, 2 columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutdata.map((card) => {
            const Icon = card.icon; // icon is a component
            return (
              <div
                key={card.id}
                className="bg-white/5 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-150"
              >
                {/* Icon with gradient bg */}
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-md mb-4
                                bg-gradient-to-r from-[#6C63FF] to-[#00D4FF]"
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title (left) */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {card.title}
                </h3>

                {/* Description (left) */}
                <p className="text-gray-300">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
