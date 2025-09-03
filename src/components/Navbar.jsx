import React, { useState } from "react";
import { Link } from "react-router-dom";

const navitems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
  <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-700 font-sans transition-all duration-300">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col select-none">
          <span className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">
            Sonima <span className="text-indigo-400">Pokhrel</span>
          </span>
          <span className="text-xs md:text-sm text-gray-300 font-medium mt-1">
            Class 12 CS Student, Orchid College
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-lg font-semibold tracking-tight text-gray-300">
          {navitems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative group transition-all duration-300 hover:text-indigo-400"
            >
              {item.name}
              <span className="block h-[3px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-indigo-500 rounded-full"></span>
            </Link>
          ))}
        </nav>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-black text-gray-300 px-6 pb-6 pt-2 shadow-lg border-t border-gray-700">
          <nav className="flex flex-col gap-4 text-xl font-medium">
            {navitems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-400 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;