import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaStar,
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io";
import { RiTailwindCssFill, RiTelegram2Fill } from "react-icons/ri";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <>
      <div className="w-[95%] md:w-3/5 flex flex-col justify-center items-center md:items-start">
        {/* Info Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Anthony Saliba
        </h1>
        <h5 className="text-xl md:text-2xl font-semibold text-center pt-2">
          Frontend Developer
        </h5>
        <p className="text-base md:text-lg font-medium text-center md:text-left pt-2 pb-4">
          As a frontend developer, I specialize in creating intuitive and
          engaging user interfaces. With a strong eye for design and a passion
          for innovating UI, I always strive to transform ideas into seamless
          digital experiences that are both functional and visually striking.
        </p>

        {/* Buttons Section */}
        <div className="w-full flex justify-center md:justify-start items-center gap-4">
          <Link to="projects-section" smooth={true} duration={500}>
            <button className="holo-btn">
              <span className="relative text-2xl flex items-center">
                <FaStar />
              </span>
              My Projects
            </button>
          </Link>

          <Link to="contact-section" smooth={true} duration={500}>
            <button className="holo-btn">
              <span className="relative text-2xl flex items-center">
                <RiTelegram2Fill />
              </span>
              Contact Me
            </button>
          </Link>
        </div>

        {/* Divider */}
        <hr className="w-full my-4" />

        {/* Tech Section */}
        <div className="w-full text-2xl md:text-4xl flex justify-evenly items-center">
          <FaHtml5 />
          <FaCss3 />
          <FaJs />
          <IoLogoNodejs />
          <FaFlutter />
          <FaReact />
          <RiTailwindCssFill />
          <FaFigma />
        </div>
      </div>
    </>
  );
};
