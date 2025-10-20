import React, { useEffect } from "react";

export default function CTABookCall() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <section
      id="book-call"
      className="py-24 bg-gradient-to-b from-white to-sky-50 text-gray-900 overflow-hidden relative"
    >
      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* LEFT: Text */}
          <div className="lg:w-[48%] text-center lg:text-left animate-fade-up">
            <h2 className="text-5xl font-bold text-sky-700 leading-tight mb-4">
              Stop Guessing.{" "}
              <span className="text-sky-500">Start Scaling Predictably.</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Let’s build your outbound system that actually drives revenue —
              not vanity metrics. Book a free strategy session and see how we
              can fill your calendar with qualified, ready-to-convert meetings.
            </p>

            <p className="text-gray-500 text-sm">
              ⚡ No retainers. No fluff. Just performance-based growth.
            </p>
          </div>

          {/* RIGHT: Calendly Embed */}
          <div className="lg:w-[48%] w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-fade-up [animation-delay:0.2s] flex justify-center">
            <div
              className="calendly-inline-widget w-full max-w-[500px]"
              data-url="https://calendly.com/plnitude/strategy-call"  // replace with actual Calendly link
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="mt-16 h-[4px] w-40 mx-auto bg-gradient-to-r from-sky-400 to-sky-600 rounded-full"></div>
      </div>
    </section>
  );
}
