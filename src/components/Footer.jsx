import React from "react";
import badge from "../assets/SL+Partner+Badge.png";
import logo from "../assets/plnitude-logo.png"; // ✅ your PNG logo

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/95 border-t border-gray-200 py-6 text-gray-700 shadow-md">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* LEFT SECTION: Badge + Logo + Text */}
        <div className="flex items-center gap-3">
          <img
            src={badge}
            alt="Smartlead.ai Certified Partner Badge"
            className="w-20 md:w-24 drop-shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="flex flex-col items-center md:items-start text-center md:text-left leading-tight">
            <div className="flex items-center gap-2 mb-1">
              <img
                src={logo}
                alt="PLNITUDE Logo"
                className="h-6 w-auto object-contain"
              />
              <span className="font-display text-lg font-bold text-gray-900 tracking-tight">
                PLNITUDE
              </span>
            </div>
            <p className="text-sm text-gray-500">
              © {currentYear} PLNITUDE — Your Growth Partner.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION: Navigation Links */}
        <nav className="flex flex-wrap justify-center md:justify-end items-center gap-5 text-sm font-medium">
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
        </nav>
      </div>
    </footer>
  );
}
