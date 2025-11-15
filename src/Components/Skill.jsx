import React from "react";
import { skilldata } from "../Constraints/index";

// Reusable Skill Card
const SkillCard = ({ Icon, title, color }) => (
  <div
    className="bg-white/5 p-6 rounded-2xl shadow-sm hover:shadow-lg transition text-center flex flex-col items-center justify-center"
    style={{ width: "250px", height: "220px" }}
  >
    {/* Icon */}
    <div className="w-16 h-16 flex items-center justify-center mb-4">
      <Icon className="w-12 h-12" style={{ color }} />
    </div>

    {/* Gradient Title */}
    <h3 className="text-xl font-semibold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">
      {title}
    </h3>
  </div>
);

const Skill = () => {
  return (
    <section className="w-full py-16 bg-[#000720] flex justify-center">
      <div className="w-[90%] max-w-6xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent text-center mb-3">
          Tech Skills
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
          Tools and technologies I use to bring ideas to life.
        </p>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {skilldata.map(({ id, icon: Icon, title, color }) => (
            <SkillCard key={id} Icon={Icon} title={title} color={color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
