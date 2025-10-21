import React, { useEffect, useRef, useState } from "react";

export default function CTABookCall() {
  useEffect(() => {
    const init = () => {
      try {
        if (window.Calendly) {
          window.Calendly.initInlineWidgets();
        }
      } catch (e) {}
    };
    if (window.Calendly) {
      init();
    } else {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = init;
      document.body.appendChild(script);
      return () => {
        script.onload = null;
        document.body.removeChild(script);
      };
    }
  }, []);

  // Keep Calendly embed square by syncing height to width
  const widgetRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const el = widgetRef.current;
    if (!el) return;
    const setSquare = () => {
      const w = el.offsetWidth;
      el.style.height = `${w}px`;
    };
    setSquare();
    const ro = new ResizeObserver(setSquare);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section
      id="book-call"
      className="py-24 bg-transparent text-gray-200 overflow-hidden relative"
    >
      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* LEFT: Text */}
          <div className="lg:w-[48%] text-center lg:text-left animate-fadeUp">
            <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
              Stop Guessing. <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-extrabold animate-gradientFlow drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">Start Scaling Predictably.</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Let’s build your outbound system that actually drives revenue, not vanity metrics. Book a free strategy session and see how we can fill your calendar with qualified, ready-to-convert meetings.
             </p>
            <p className="text-gray-500 text-sm">
              ⚡ No retainers. No fluff. Just performance-based growth.
            </p>
          </div>

          {/* RIGHT: Calendly Embed */}
          <div className="lg:w-[48%] w-full animate-fadeUp [animation-delay:0.2s]">
            <div className="relative p-[3px] rounded-3xl bg-gradient-to-r from-sky-500 via-teal-400 to-cyan-500 animate-gradientPulse">
              <div className="relative rounded-3xl bg-[#041225] border border-white/8 shadow-xl overflow-hidden flex justify-center">
              {!loaded && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 opacity-25 animate-pulse" />
                </div>
              )}
              <div
                ref={widgetRef}
                className="calendly-inline-widget w-full max-w-[520px] aspect-square min-w-[320px]"
                data-url="https://calendly.com/plnitude/discovery-call-plnitude"
                style={{}}
                onLoad={() => setLoaded(true)}
              ></div>
            </div>
            </div>
          </div>
        </div>

        {/* Decorative divider removed */}
      </div>
    </section>
  );
}
