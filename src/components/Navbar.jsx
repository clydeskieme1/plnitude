import React, { useState } from "react";
import logo from "../assets/plnitude-logo.png"; // ✅ your PNG logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-sky-200 shadow-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* LOGO + TEXT */}
        <a href="#hero" className="flex items-center gap-2">
          <img
            src={logo}
            alt="PLNITUDE Logo"
            className="h-8 w-auto object-contain"
          />
          <span className="font-display text-lg font-bold text-gray-900 tracking-tight">
            PLNITUDE
          </span>
        </a>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#why-plnitude" className="text-gray-700 hover:text-sky-600 transition-colors duration-200">
            Why PLNITUDE
          </a>
          <a href="#how-we-work" className="text-gray-700 hover:text-sky-600 transition-colors duration-200">
            How We Work
          </a>
          <a href="#case-studies" className="text-gray-700 hover:text-sky-600 transition-colors duration-200">
            Case Studies
          </a>
          <a href="#about" className="text-gray-700 hover:text-sky-600 transition-colors duration-200">
            About
          </a>
          <a href="#faq" className="text-gray-700 hover:text-sky-600 transition-colors duration-200">
            FAQ
          </a>

          {/* CTA BUTTON */}
          <a
            href="#book-call"
            className="relative inline-block text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 shadow-md bg-gradient-to-r from-sky-600 via-sky-500 to-teal-400 hover:shadow-lg hover:scale-[1.03] animate-gradientFlow"
          >
            <span className="relative z-10">Book a Call</span>
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-gray-700 hover:text-sky-600 transition-colors duration-200"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white/98 backdrop-blur-md border-b border-sky-200 shadow-md">
          <nav className="px-6 py-4 flex flex-col gap-4 text-base font-medium">
            <a href="#why-plnitude" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-sky-600">Why PLNITUDE</a>
            <a href="#how-we-work" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-sky-600">How We Work</a>
            <a href="#case-studies" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-sky-600">Case Studies</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-sky-600">About</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-700 hover:text-sky-600">FAQ</a>
            <a href="#book-call" onClick={() => setIsOpen(false)} className="mt-2 inline-block text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 shadow-md bg-gradient-to-r from-sky-600 via-sky-500 to-teal-400 hover:shadow-lg hover:scale-[1.03] animate-gradientFlow">
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
