// src/data/index.js
import {
  FaBootstrap,
  FaCss3,
  FaGit,
  FaGithub,
  FaHtml5,
  FaReact,
  FaDatabase,
  FaCode,
  FaFigma,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
  FaPhp,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";
import { certificate, monkshub, villa } from "../assets";

/**
 * Navigation links
 */
export const navLinks = [
  { id: "about", title: "About" },
  { id: "skill", title: "Skill" },
  { id: "project", title: "Project" },
  { id: "contact", title: "Contact" },
];

/**
 * About data
 */
export const aboutdata = [
  {
    id: 1,
    icon: FaCode,
    title: "Front-End Development",
    description:
      "Crafting responsive, modern, and interactive web interfaces using best practices.",
  },
  {
    id: 2,
    icon: FaGithub,
    title: "Git & GitHub",
    description:
      "Version control and collaboration using Git with clean branching workflows on GitHub.",
  },
  {
    id: 3,
    icon: FaDatabase,
    title: "Database Development",
    description:
      "Designing secure, optimized, and scalable relational & NoSQL databases for production.",
  },
  {
    id: 4,
    icon: FaFigma,
    title: "Figma Design",
    description:
      "Creating intuitive UI/UX mockups and interactive prototypes in Figma.",
  },
];

/**
 * Skills (with icons)
 * Replace or extend the `level` or `experience` fields if you want more detail.
 */

export const skilldata = [
  { id: 1, icon: FaHtml5, title: "HTML", color: "#E34F26" },
  { id: 2, icon: FaCss3, title: "CSS", color: "#1572B6" },
  { id: 3, icon: FaBootstrap, title: "Bootstrap", color: "#7952B3" },
  { id: 4, icon: SiJavascript, title: "JavaScript", color: "#F7DF1E" },
  { id: 5, icon: SiTypescript, title: "TypeScript", color: "#3178C6" },
  { id: 6, icon: FaReact, title: "React", color: "#61DAFB" },
  { id: 7, icon: SiMysql, title: "MySQL", color: "#4479A1" },
  { id: 8, icon: FaGit, title: "Git", color: "#F05032" },
  { id: 9, icon: FaGithub, title: "GitHub", color: "#ffffff" },
  { id: 10, icon: FaFigma, title: "Figma", color: "#F24E1E" },
  { id: 11, icon: SiMongodb, title: "MongoDB", color: "#47A248" },
  { id: 12, icon: FaPhp, title: "PHP", color: "#777BB4" },
];

/**
 * Projects (dummy links — replace with real links later)
 */
export const projectdata = [
  {
    id: 1,
    img: certificate,
    title: "Certificate.dev",
    description:
      "Responsive certificate generation platform built with React and Tailwind CSS.",
    demoLink: "https://example.com/certificate-demo",
    codeLink: "https://github.com/yourusername/certificate-dev",
    devTech: ["React", "Tailwind CSS", "Figma"],
  },
  {
    id: 2,
    img: monkshub,
    title: "MonksHub",
    description:
      "Community platform for creators to share resources and projects (React + Tailwind).",
    demoLink: "https://example.com/monkshub-demo",
    codeLink: "https://github.com/yourusername/monkshub",
    devTech: ["React", "Tailwind CSS", "Figma"],
  },
  {
    id: 3,
    img: villa,
    title: "Villa",
    description:
      "Modern real-estate showcase site with smooth animations and responsive layouts.",
    demoLink: "https://example.com/villa-demo",
    codeLink: "https://github.com/yourusername/villa",
    devTech: ["React", "Tailwind CSS", "Figma"],
  },
];

/**
 * Social / connect data (optionally add `link` fields)
 */
export const connectdata = [
  {
    id: 1,
    icon: FaGithub,
    title: "Github",
    link: "https://github.com/yourusername",
  },
  {
    id: 2,
    icon: FaLinkedin,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/yourusername",
  },
  {
    id: 3,
    icon: FaWhatsapp,
    title: "WhatsApp",
    link: "https://wa.me/yourphonenumber",
  },
  {
    id: 4,
    icon: FaTwitter,
    title: "X",
    link: "https://twitter.com/yourusername",
  },
];
