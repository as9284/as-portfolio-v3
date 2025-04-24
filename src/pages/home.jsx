import React from "react";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Journey } from "../components/Journey";
import { Contact } from "../components/Contact";

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

      {/* Journey Section */}
      <div className="page-section min-h-screen">
        <Journey />
      </div>

      {/* Contact Section */}
      <div className="page-section min-h-screen">
        <Contact />
      </div>
    </>
  );
};
