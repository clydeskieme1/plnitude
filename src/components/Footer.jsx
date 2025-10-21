import React from "react";
import logo from "../assets/plnitude-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="relative mt-16 text-gray-300">
      <div className="bg-black/25 backdrop-blur-md border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-0">
            <img src={logo} alt="PLNITUDE" className="h-10 w-auto object-contain brightness-125" />
            <span className="-ml-2 font-display text-xl font-bold bg-gradient-to-r from-sky-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradientFlow tracking-tight">LNITUDE</span>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer" className="flex flex-wrap justify-center md:justify-end items-center gap-5 text-sm font-medium">
            <a href="#why-plnitude" className="text-gray-200 hover:text-sky-300 transition-colors">Why PLNITUDE</a>
            <a href="#how-we-work" className="text-gray-200 hover:text-sky-300 transition-colors">How We Work</a>
            <a href="#case-studies" className="text-gray-200 hover:text-sky-300 transition-colors">Case Studies</a>
            <a href="#about" className="text-gray-200 hover:text-sky-300 transition-colors">About</a>
            <a href="#faq" className="text-gray-200 hover:text-sky-300 transition-colors">FAQ</a>
            <a
              href="https://uk.linkedin.com/in/emmanuel-akatobi-334608247"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="px-3 py-1.5 rounded-md bg-gradient-to-r from-sky-500 via-teal-400 to-cyan-400 text-white shadow hover:brightness-110 transition"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-6 text-xs text-gray-400 text-center md:text-right">
          © {currentYear} PLNITUDE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
