import React from "react";
import { IoMailOpen } from "react-icons/io5";

export const Contact = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center select-none">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Contact Me
      </h2>
      <p className="text-lg md:text-xl text-center mb-8">
        Feel free to reach out if you'd like to work together or just chat about
        tech!
      </p>

      <form
        action="https://formsubmit.co/anthonys68892@gmail.com"
        method="POST"
        className="w-full md:w-3/4 lg:w-1/2 flex flex-col justify-center items-center gap-6"
      >
        {/* Hidden config fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input
          type="hidden"
          name="_next"
          value="https://as-portfolio-v3.vercel.app/thanks"
        />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="holo-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="holo-input"
        />

        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          required
          className="holo-textfield"
        />

        <button type="submit" className="holo-btn">
          <span className="relative text-2xl flex items-center">
            <IoMailOpen />
          </span>
          Send Message
        </button>
      </form>
    </section>
  );
};
