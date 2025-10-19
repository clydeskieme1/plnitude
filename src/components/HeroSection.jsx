import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 150);
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-sky-50 py-20 overflow-hidden">
      <div
        className="
          max-w-7xl mx-auto px-6 md:px-12 lg:px-20
          flex flex-col-reverse md:flex-row 
          items-center justify-between gap-16
        "
      >
        {/* LEFT COLUMN - TEXT */}
        <div
          className={`flex-1 transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          } text-center md:text-left`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
            Only Pay for Meetings <br />
            <span className="text-sky-600">That Actually Happen.</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            We build predictable pipelines for agencies and B2B service companies — so you stop chasing leads and start closing deals. No retainers. No risk. Just qualified prospects showing up, ready to talk.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start">
            <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-4 rounded-full shadow-md transition-all">
              Book Your Free Strategy Call
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-8 text-sm text-gray-500 font-medium">
            <span>🚀 10–15 Qualified Meetings Monthly</span>
            <span>⭐ 100% Pay-Per-Result Model</span>
          </div>
        </div>

        {/* RIGHT COLUMN - VIDEO */}
        <div
          className={`flex-1 flex justify-center md:justify-end transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } relative`}
        >
          <div
            className="
              relative 
              w-[90%] sm:w-[80%] md:w-[500px] lg:w-[560px]
              aspect-video 
              rounded-3xl overflow-hidden 
              shadow-2xl border border-gray-100 bg-gray-300
              mx-auto
              hover:scale-[1.02] transition-transform duration-300
            "
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_HERE?autoplay=0&rel=0"
              title="Plnitude Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Glow effect */}
          <div className="absolute right-[-80px] md:right-[-100px] top-1/2 -translate-y-1/2 w-[320px] md:w-[400px] h-[320px] md:h-[400px] bg-gradient-to-r from-cyan-300/25 to-sky-400/25 blur-3xl rounded-full z-[-1]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
