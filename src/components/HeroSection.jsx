export default function HeroSection() {
  return (
    <section id="hero" className="relative text-center py-24 bg-gradient-to-r from-sky-400 to-sky-600 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeUp">
          Elevate Your Growth with <span className="text-sky-100">PLNITUDE</span>
        </h1>
        <p className="text-lg md:text-xl text-sky-50 mb-8 animate-fadeUp delay-200">
          A performance-driven partner helping B2B companies scale smarter, faster, and stronger.
        </p>
        <button className="px-8 py-4 bg-white text-sky-700 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-sky-100 transition-all duration-500 animate-fadeUp delay-300">
          Book a Call
        </button>
      </div>
    </section>
  );
}
