import React from "react";
import { connectdata } from "../Constraints/index";

// Reusable Connect Card
const ConnectCard = ({ icon: Icon, title, link, bgColor }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 shadow-sm hover:shadow-md transition transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
  >
    {/* Icon with rounded background */}
    <div
      className="w-16 h-16 flex items-center justify-center mb-3 rounded-full text-white text-2xl transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <Icon />
    </div>

    {/* Title */}
    <span className="text-white font-semibold no-underline border-0 text-center">
      {title}
    </span>
  </a>
);

const Connect = () => {
  return (
    <section className="w-full py-16 bg-[#000720] flex justify-center">
      <div className="w-[90%] max-w-5xl flex flex-col items-center text-center space-y-8">
        {/* Section Header */}
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent mb-1">
            Connect With Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] mb-3 rounded"></div>
          <p className="text-gray-300 max-w-2xl">
            Feel free to connect with me on these platforms to discuss tech,
            share ideas, or just say hello!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {connectdata.map(({ id, icon, title, link }) => {
            // Brand colors for icon background
            let bgColor = "#fff";
            switch (title) {
              case "Github":
                bgColor = "#171515";
                break;
              case "Linkedin":
                bgColor = "#0077B5";
                break;
              case "WhatsApp":
                bgColor = "#25D366";
                break;
              case "X":
                bgColor = "#1DA1F2";
                break;
            }

            return (
              <ConnectCard
                key={id}
                icon={icon}
                title={title}
                link={link}
                bgColor={bgColor}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Connect;
