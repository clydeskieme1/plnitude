import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-sky-50 text-gray-800 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 text-center fade-slide-in">
        {/* Section Header */}
        <h2 className="text-5xl font-bold text-sky-700 mb-4 tracking-tight">
          Who’s Behind <span className="bg-gradient-to-r from-sky-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent font-extrabold animate-gradientFlow">Plnitude</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          The story behind Plnitude — a performance-driven outbound agency built
          by someone who knows exactly what it takes to help businesses scale.
        </p>

        {/* Founder Content Card */}
        <div className="bg-white/90 backdrop-blur-md border border-sky-100 rounded-3xl shadow-xl p-10 md:p-16 max-w-3xl mx-auto text-left md:text-center transition-all duration-700 hover:shadow-2xl">
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            I’m <span className="font-semibold text-sky-600">Emmanuel</span>, Founder of{" "}
            <span className="font-semibold text-sky-600">Plnitude</span>.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            After years of working with agencies struggling to scale, I built
            Plnitude with one goal — to make growth predictable, risk-free, and
            performance-driven.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            We’ve helped dozens of agencies fill their calendars with qualified,
            conversion-ready meetings — without retainers, without long
            contracts, and without the fluff.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg italic">
            If you’re tired of relying on referrals or inconsistent pipelines,
            our Value-First Outreach System is built to change that.
          </p>

          {/* Signature */}
          <div className="mt-10">
            <p className="text-sky-600 font-semibold text-lg">— Emmanuel</p>
            <p className="text-gray-500 text-sm">Founder of Plnitude</p>
          </div>
        </div>

        {/* Optional Visual (Placeholder) */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-500 text-sm font-medium shadow-inner">
            Founder Image
          </div>
        </div>
      </div>
    </section>
  );
}
