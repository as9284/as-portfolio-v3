import React, { useState } from "react";
import projects from "../data/projects.json";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export const Projects = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-center py-4 select-none">
        Featured Projects
      </h1>
      <p className="text-lg md:text-xl text-center mb-8 select-none">
        Personally selected projects between web and mobile development
      </p>

      <div className="w-full flex flex-col items-center gap-4 pr-2">
        {projects.map((project) => {
          const isExpanded = expandedProjectId === project.id;

          return (
            <div
              key={project.id}
              onClick={() => toggleExpand(project.id)}
              className={`holo-card flex flex-col w-full md:w-3/4 transition-colors duration-300 ease-in-out cursor-pointer ${
                isExpanded ? "bg-neutral-800 text-neutral-200" : ""
              }`}
            >
              <div className="flex justify-between items-center w-full">
                <h6 className="text-xl font-medium">{project.name}</h6>
                {isExpanded ? (
                  <FiChevronUp className="w-5 h-5" />
                ) : (
                  <FiChevronDown className="w-5 h-5" />
                )}
              </div>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden w-full"
                  >
                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-neutral-700 text-neutral-100 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-base md:text-lg font-light text-center text-neutral-200 mb-6 px-2">
                      {project.description}
                    </p>

                    {/* URL */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-200 hover:underline text-base text-center block mb-2"
                    >
                      Visit Project
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
