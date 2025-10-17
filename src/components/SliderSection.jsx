export default function SliderSection() {
  const logos = [
    "https://placehold.co/160x80?text=Logo+1",
    "https://placehold.co/160x80?text=Logo+2",
    "https://placehold.co/160x80?text=Logo+3",
    "https://placehold.co/160x80?text=Logo+4",
    "https://placehold.co/160x80?text=Logo+5",
    "https://placehold.co/160x80?text=Logo+6",
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">Trusted by results‑driven teams</h2>

        {/* Single row: continuous leftward scroll */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent" />
          <div
            className="flex w-max gap-8 animate-scroll hover:[animation-play-state:paused]"
            role="list"
            aria-label="Client logos carousel"
          >
            {[...logos, ...logos].map((src, i) => (
              <div key={`logo-${i}`} role="listitem" className="flex items-center justify-center">
                <img
                  src={src}
                  alt={`Client logo ${i % logos.length + 1}`}
                  className="h-16 w-40 object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
