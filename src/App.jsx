import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Connect from "./Components/Connect";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#000720]">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Connect />
      <Footer />
    </div>
  );
}
