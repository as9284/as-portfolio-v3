import React from "react";
import projects from "../data/projects.json";

export const Projects = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left py-4">
          Featured Projects
        </h1>

        <div className="w-full flex flex-col items-center gap-4 pr-2">
          {projects.map((project) => (
            <div key={project.id} className="holo-card">
              <h6 className="text-lg font-medium">{project.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
