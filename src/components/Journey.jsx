import React from "react";
import { motion } from "framer-motion";
import timeline from "../data/timeline.json";

export const Journey = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 select-none">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-neutral-800 py-4">
          My Journey
        </h2>
        <p className="text-lg md:text-xl text-center mb-8">
          Explore my progress throughout the years as a programmer.
        </p>

        <div className="relative border-l-4 border-black ml-4">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-10 pl-6"
            >
              {/* Circle */}
              <div className="absolute left-[-0.6rem] top-2.5 w-4 h-4 bg-black rounded-full shadow-md border-2 border-white dark:border-gray-900 z-10"></div>

              <h3 className="text-xl font-bold text-neutral-800">
                {item.year}
              </h3>
              <h4 className="text-lg font-semibold text-black">{item.title}</h4>
              <p className="text-neutral-800 mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
