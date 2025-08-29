import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skill' },
  { name: 'Contact', path: '/contact' }, // You can create a Contact page if needed
];

const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);

  return (
  <nav className="w-full bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-yellow-400 tracking-wide drop-shadow-lg">
              Sonima Pokhrel
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {NavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-200 hover:text-yellow-400 px-3 py-2 rounded-md font-medium transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => SetIsOpen(!isOpen)}
              type="button"
              className="bg-black rounded-full text-white px-3 py-2 cursor-pointer focus:outline-none"
            >
              {isOpen ? "Close ✖" : "Menu 💖"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 shadow-lg">
          <div className="flex flex-col space-y-2 p-4">
            {NavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => SetIsOpen(false)} // auto-close when clicking
                className="text-gray-200 hover:text-yellow-400 px-3 py-2 rounded-md font-medium transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
