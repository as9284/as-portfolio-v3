import React from "react";

export const Projects = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center md:items-start">
        <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left py-4">
          Featured Projects
        </h1>

        <div className="w-full max-h-[15rem] overflow-y-auto flex flex-col gap-4 pr-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="w-full md:w-3/4 flex items-center px-6 py-4 bg-transparent border-2 border-neutral-800 duration-200 cursor-pointer"
            >
              <h6 className="text-lg font-medium">Wirestorm Networks</h6>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
