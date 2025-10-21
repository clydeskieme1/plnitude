import React from "react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center py-28 gap-8">
        {/* Floating Label */}
        <div className="animate-fadeUp">
          <div className="relative inline-flex p-[4px] rounded-full bg-gradient-to-r from-sky-500 via-teal-400 to-cyan-400 animate-gradientPulse animate-floatSoft">
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-sky-100 text-lg md:text-xl font-bold tracking-wide shadow-soft">
              For Marketing Agencies
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight animate-fadeUp">
          We’ll book you 10-15 <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-extrabold animate-gradientFlow drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">qualified meetings</span> every month with decision-makers who want your services.
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl animate-fadeUp delay-100">
            Pay only per qualified meeting that shows. No setup fees. Quit anytime.
        </p>

        {/* Video */}
        <div className="w-full flex justify-center animate-fadeUp delay-200">
          <div className="relative w-full max-w-4xl p-[2px] rounded-2xl bg-gradient-to-r from-sky-500 via-teal-400 to-cyan-400 animate-gradientFlow">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src="https://www.youtube.com/embed/VFA4QRK9PP0?si=HEc3NjwrzPDRtx2p"
                title="PLNITUDE Overview Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full object-cover"
              ></iframe>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-fadeUp delay-300">
          <a
            href="#book-call"
            className="relative inline-block text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg bg-gradient-to-r from-sky-500 via-teal-400 to-cyan-400 hover:shadow-2xl hover:scale-[1.03] animate-gradientFlow"
          >
            <span className="relative z-10">Book a Free Strategy Call</span>
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
          </a>
        </div>
      </div>

    </section>
  );
}
