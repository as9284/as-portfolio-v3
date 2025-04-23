import React from "react";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="page-section min-h-svh">
        <Hero />
      </div>

      {/* Projects Section */}
      <div id="projects-section" className="page-section min-h-screen">
        <Projects />
      </div>
    </>
  );
};
