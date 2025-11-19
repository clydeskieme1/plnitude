import React, { useState, useEffect } from "react";
import logo from "../assets/plnitude-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-black/35 backdrop-blur-lg border-b border-white/10 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* LOGO + TEXT */}
        <a href="#hero" className="flex items-center gap-0">
          <img
            src={logo}
            alt="PLNITUDE Logo"
            className="h-12 w-auto object-contain brightness-125"
          />
          <span className="-ml-2 font-display text-xl font-bold bg-gradient-to-r from-sky-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradientFlow tracking-tight">
            LNITUDE
          </span>
        </a>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#why-plnitude" className="text-gray-300 hover:text-sky-300 transition-colors duration-200">
            Why PLNITUDE
          </a>
          <a href="#how-we-work" className="text-gray-300 hover:text-sky-300 transition-colors duration-200">
            How We Work
          </a>
          <a href="#case-studies" className="text-gray-300 hover:text-sky-300 transition-colors duration-200">
            Case Studies
          </a>
          <a href="#about" className="text-gray-300 hover:text-sky-300 transition-colors duration-200">
            About
          </a>
          <a href="#faq" className="text-gray-300 hover:text-sky-300 transition-colors duration-200">
            FAQ
          </a>

          {/* CTA BUTTON */}
          <a
            href="https://calendly.com/plnitude/discovery-call-plnitude"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 shadow-md bg-gradient-to-r from-sky-500 via-teal-400 to-cyan-400 hover:shadow-lg hover:scale-[1.03] animate-gradientFlow"
          >
            <span className="relative z-10">Book a Call</span>
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="md:hidden group relative w-10 h-10 flex items-center justify-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="absolute inset-0 rounded-lg ring-1 ring-white/10 group-hover:ring-white/20 transition"></span>
          <span className={`absolute block w-6 h-[2px] rounded-full bg-white/90 transition-all duration-300 ${isOpen ? "translate-y-0 rotate-45" : "-translate-y-2"}`}></span>
          <span className={`absolute block w-6 h-[2px] rounded-full bg-white/90 transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`absolute block w-6 h-[2px] rounded-full bg-white/90 transition-all duration-300 ${isOpen ? "translate-y-0 -rotate-45" : "translate-y-2"}`}></span>
        </button>
      </div>

      {/* MOBILE MENU PANEL */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-16 inset-x-0 bg-black/80 backdrop-blur-md border-b border-white/6 shadow-md animate-slideDown origin-top">
          <nav className="px-6 py-4 flex flex-col gap-4 text-base font-medium">
            <a href="#why-plnitude" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-sky-300">Why PLNITUDE</a>
            <a href="#how-we-work" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-sky-300">How We Work</a>
            <a href="#case-studies" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-sky-300">Case Studies</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-sky-300">About</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-sky-300">FAQ</a>
            <a href="https://calendly.com/plnitude/discovery-call-plnitude" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="mt-2 inline-block text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 shadow-md bg-gradient-to-r from-sky-500 via-teal-400 to-cyan-400 hover:shadow-lg hover:scale-[1.03] animate-gradientFlow">Book a Call</a>
          </nav>
        </div>
      )}
    </header>
  );
}
