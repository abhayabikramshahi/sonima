import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-green-700">Sonima</h1>
        </Link>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X size={28} className="text-green-700 transition-transform duration-200" />
          ) : (
            <Menu size={28} className="text-green-700 transition-transform duration-200" />
          )}
        </button>

        {/* Menu */}
        <ul className="hidden md:flex gap-6 text-green-900 font-medium">
          <li>
            <a href="#about" className="hover:text-green-700 transition">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-green-700 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-700 transition">Hire Me</a>
          </li>
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden animate-fade-in z-50">
            <li>
              <a href="#about" className="flex items-center gap-2 text-green-900 hover:text-green-700 text-lg font-medium" onClick={() => setMenuOpen(false)}>
                <span role="img" aria-label="About">👤</span> About
              </a>
            </li>
            <li>
              <a href="#projects" className="flex items-center gap-2 text-green-900 hover:text-green-700 text-lg font-medium" onClick={() => setMenuOpen(false)}>
                <span role="img" aria-label="Projects">💼</span> Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center gap-2 text-green-900 hover:text-green-700 text-lg font-medium" onClick={() => setMenuOpen(false)}>
                <span role="img" aria-label="Hire Me">✉️</span> Hire Me
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
