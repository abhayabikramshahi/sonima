import React from "react";
import Projects from "./Projects";
import About from "./About";
import HireMe from "./HireMe";
import profilePic from "../assets/sonima.jpg"; // ✅ replace with actual image path

function Home() {
  return (
    <>
      {/* Hero Section */}
  <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white text-black px-2 sm:px-8 md:px-32 py-12 md:py-0 mt-24 md:mt-0">
        {/* Left Side: Text */}
  <div className="flex-1 text-center md:text-left w-full md:w-auto max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="text-green-700">Sonima Pokhrel</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-green-900">
            A passionate{" "}
            <span className="text-green-600 font-semibold">C Developer</span> &{" "}
            <span className="text-green-600 font-semibold">Web Developer</span>{" "}
            from Nepal.
          </p>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-black">
            Currently studying in Grade 12 at{" "}
            <span className="font-semibold text-green-900">
              Orchid College of Science and Management
            </span>.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start w-full">
            <a
              href="#projects"
              className="px-6 py-3 bg-green-700 text-white rounded-xl shadow hover:bg-green-800 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-green-400 text-green-700 rounded-xl hover:bg-green-50 transition"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 mt-12 md:mt-0 flex justify-center w-full">
          <img
            src={profilePic}
            alt="Sonima Pokhrel"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-xl border-4 border-green-100"
          />
        </div>
      </section>

   <div id="about">
        <About />
      </div>
      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>

      {/* About Section */}
   

      {/* Hire Me Section */}
      <div id="contact">
        <HireMe />
      </div>
    </>
  );
}

export default Home;
