import React from "react";
import profileImg from "../assets/profile.jpg";
import { Link } from "react-router-dom";


const Home = () => {
  return (
  <div className="w-full min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left h-screen px-6 gap-10 bg-black">
        <div className="flex flex-col items-center md:items-start flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white">
            Hi, I’m <span className="text-yellow-400">Sonima Pokhrel</span> 👋
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
            A passionate <span className="font-semibold text-white">Web Developer</span> &{" "}
            <span className="font-semibold text-white">Designer</span> who loves building
            clean, modern, and user-friendly digital experiences.
          </p>
          <div className="flex gap-4">
            <Link
              to="#projects"
              className="bg-yellow-400 text-black px-5 py-3 rounded-xl shadow hover:bg-yellow-500 transition font-semibold"
            >
              View Projects
            </Link>
            <Link
              to="#contact"
              className="border border-yellow-400 text-yellow-400 px-5 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition font-semibold"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={profileImg}
            alt="Sonima Pokhrel profile"
            className="w-48 h-48 md:w-64 md:h-64 rounded-xl object-cover shadow-2xl border-4 border-yellow-400 md:mr-16 bg-gray-900"
          />
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="py-16 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="max-w-3xl mx-auto text-gray-300">
          <p>
            Hi! I’m Sonima Pokharel — a passionate web designer and C++/PHP programmer. I won the National Robotics Competition and am working toward my dream of becoming a software engineer. I love designing and building creative solutions!
          </p>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">Education & Achievements</h3>
            <p>
              I completed my +2 and earned a certificate by winning the National Robotics Competition. This event motivated me to dive deeper into technology.
            </p>
          </div>
        </div>
      </section>





      {/* Contact */}
      <section
        id="contact"
        className="py-16 px-6 bg-black text-white text-center border-t border-gray-800"
      >
        <h2 className="text-3xl font-bold mb-6 text-yellow-400">Let’s Work Together</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          Interested in collaborating or just want to say hi? Drop me a message!
        </p>
        <Link
          to="/contact"
          className="bg-yellow-400 text-black px-6 py-3 rounded-xl shadow hover:bg-yellow-500 transition font-semibold"
        >
          Contact Me
        </Link>
      </section>
    </div>
  );
};

export default Home;
