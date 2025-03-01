import React, { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold">
          MyPortfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <a href="#home" className="hover:text-blue-400">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400">About</a>
          </li>
          <li>
            <a href="#certification" className="hover:text-blue-400">Certification</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center mt-4 space-y-4 bg-gray-800 p-4 rounded-lg">
          <li>
            <a href="#home" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>About</a>
          </li>
          <li>
            <a href="#certification" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Certification</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
