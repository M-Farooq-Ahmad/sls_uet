import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 overflow-visible">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 relative">
        {/* Left Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Serve & Lead"
            className="h-16 -my-4" // Adjust the logo height
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium text-lg">
          <a href="/" className="hover:text-cyan-600">Home</a>
          <a href="/about" className="hover:text-cyan-600">About</a>
          <a href="/#events" className="hover:text-cyan-600">Events</a>
          <a href="/#certifications" className="hover:text-cyan-600">Certifications</a>
          <a href="#contact" className="hover:text-cyan-600">Contact</a>
          <a href="/verification" className="hover:text-cyan-600">Verification</a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // ✖ Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // ☰ Menu Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden bg-white shadow-md border-t border-gray-200 flex flex-col space-y-3 px-6 text-gray-700 font-medium text-lg transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 overflow-hidden py-0"
        }`}
      >
        <a href="/" className="hover:text-cyan-600" onClick={() => setIsOpen(false)}>Home</a>
        <a href="/about" className="hover:text-cyan-600" onClick={() => setIsOpen(false)}>About</a>
        <a href="/#events" className="hover:text-cyan-600" onClick={() => setIsOpen(false)}>Events</a>
        <a href="/#certifications" className="hover:text-cyan-600" onClick={() => setIsOpen(false)}>Certifications</a>
        <a href="#contact" className="hover:text-cyan-600" onClick={() => setIsOpen(false)}>Contact</a>
        <a href="/verification" className="hover:text-cyan-600" onClick={() => setIsOpen(false)}>Verification</a>
      </div>
    </nav>
  );
}
