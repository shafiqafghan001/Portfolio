import React from "react";
import { projectdata } from "../Constraints/index";

// Gradient definitions
const gradient = "bg-gradient-to-r from-[#6C63FF] to-[#00D4FF]";
const gradientBorder = "rounded-lg border-2 border-transparent bg-clip-border";

// Reusable gradient-outline button
const OutlineButton = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`${gradientBorder} ${gradient} bg-origin-border bg-[length:200%_100%] bg-left inline-flex items-center justify-center px-4 py-2 text-white font-medium rounded-md transition hover:opacity-95 no-underline`}
    style={{
      backgroundImage:
        "linear-gradient(#000720, #000720), linear-gradient(to right, #6C63FF, #00D4FF)",
      backgroundClip: "padding-box, border-box",
      textDecoration: "none",
    }}
  >
    {children}
  </a>
);

// Gradient badge for tech stack
const TechBadge = ({ text }) => (
  <span
    className="text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap"
    style={{
      background: "linear-gradient(90deg, #6C63FF, #00D4FF)",
      color: "#fff",
    }}
  >
    {text}
  </span>
);

// Project card layout
const ProjectCard = ({ project }) => {
  return (
    <article className="w-full bg-white/5 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        {/* Left: text section (LEFT-ALIGNED) */}
        <div className="w-full lg:w-1/2 p-6 lg:pr-10 flex flex-col items-start text-left">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent mb-3">
            {project.title}
          </h3>

          <p className="text-gray-300 mb-6 max-w-md">{project.description}</p>

          {/* Buttons (left-aligned) */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <OutlineButton href={project.demoLink}>Live demo</OutlineButton>
            <OutlineButton href={project.codeLink}>GitHub code</OutlineButton>
          </div>

          {/* Tech stack (left-aligned) */}
          <div className="flex flex-wrap gap-2">
            {project.devTech?.map((tech, i) => (
              <TechBadge key={i} text={tech} />
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={project.img}
            alt={project.title}
            className="w-full max-w-md h-56 lg:h-72 object-cover rounded-lg"
          />
        </div>
      </div>
    </article>
  );
};

const Project = () => {
  return (
    <section className="w-full py-16 bg-[#000720] flex justify-center">
      <div className="w-[90%] max-w-5xl space-y-8">
        {/* Section Header (centered) */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent mb-3">
            My Project
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Here’s a selection of projects that showcase my skill and passion
            for building interactive and responsive website/applications.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-8">
          {projectdata.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
