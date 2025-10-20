import React from "react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center justify-between py-28 gap-12">
        {/* LEFT: Text Content */}
        <div className="w-full lg:w-5/12 text-center lg:text-left animate-fadeUp">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-sky-700 leading-tight mb-6">
            Turn Cold Prospects <br />
            <span className="bg-gradient-to-r from-sky-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent font-extrabold animate-gradientFlow">
              Into Qualified Meetings
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
            We help B2B agencies and founders build scalable outbound systems
            that deliver consistent, qualified meetings — without retainers,
            without contracts, and without fluff.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#book-call"
              className="relative inline-block text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md bg-gradient-to-r from-sky-600 via-sky-500 to-teal-400 hover:shadow-lg hover:scale-[1.03] animate-gradientFlow"
            >
              <span className="relative z-10">Book a Free Strategy Call</span>
              {/* Subtle shimmer overlay */}
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
            </a>
          </div>
        </div>

        {/* RIGHT: Media (Video or Placeholder) */}
        <div className="w-full lg:w-7/12 flex justify-center animate-fadeUp delay-200">
          <div className="relative w-full p-[2px] rounded-2xl bg-gradient-to-r from-sky-500 via-teal-400 to-cyan-500 animate-gradientFlow">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
              {/* 🖼️ Replace this with your actual video or hero visual */}
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
      </div>

      {/* Decorative gradient divider */}
      <div className="h-[4px] w-40 mx-auto bg-gradient-to-r from-sky-400 to-sky-600 rounded-full mb-10"></div>
    </section>
  );
}
