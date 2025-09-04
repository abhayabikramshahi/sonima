import React from "react";
import Sonaima from "../assets/sonima.jpg"; // GitHub profile image

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left side - Text */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Hello! I’m{" "}
              <span className="font-semibold text-red-600">
                Sonima Pokhrel
              </span>
              , a passionate{" "}
              <span className="text-red-500 font-medium">C Developer</span> and{" "}
              <span className="text-red-500 font-medium">Web Developer</span>{" "}
              from Nepal. I love solving problems, building creative projects,
              and exploring new technologies.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I am currently studying in{" "}
              <span className="font-semibold">Grade 12</span> at{" "}
              <span className="font-semibold text-gray-900">
              Orchid College of Science and Management
              </span>
              . My journey in tech started with C programming, and since then,
              I’ve been exploring web development, focusing on modern tools like{" "}
              <span className="font-medium">React, Tailwind, and APIs</span>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My goal is to grow as a developer, work on impactful projects, and
              contribute to the tech community in Nepal and beyond.
            </p>

            {/* Skills */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Skills
              </h3>
              <ul className="grid grid-cols-2 gap-2 text-gray-700">
                <li>✅ C Programming</li>
                <li>✅ Web Development</li>
                <li>✅ React.js</li>
                <li>✅ Tailwind CSS</li>
                <li>✅ Git & GitHub</li>
                <li>✅ Problem Solving</li>
              </ul>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center">
            <img
              src={Sonaima} // GitHub profile image
              alt="Sonima Pokhrel"
              className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl border-4 border-red-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
