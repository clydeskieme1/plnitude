import { useEffect, useState, useRef } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Nicholas Lopez",
      role: "Co-Founder of Prosal",
      quote:
        "There’s a lot of people blowing smoke… You came in and did exactly what you said you were going to do. You’ve created a top of funnel machine.",
      avatar: "https://via.placeholder.com/80?text=N",
    },
    {
      name: "Alex Farman-Farmaian",
      role: "Co-Founder of Compound",
      quote:
        "Strongly recommend – they felt like a part of the team very quickly.",
      avatar: "https://via.placeholder.com/80?text=A",
    },
    {
      name: "Branson Packard",
      role: "Co-Founder of StoryIt",
      quote:
        "Given the results we’ve seen with you, email is quickly becoming our top one or two sales channels.",
      avatar: "https://via.placeholder.com/80?text=B",
    },
    {
      name: "Lindsay Liu",
      role: "Co-Founder of Super",
      quote:
        "We've been responsive, thoughtful, and strategic in our approach.",
      avatar: "https://via.placeholder.com/80?text=L",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [fade, setFade] = useState(true);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Auto-cycle testimonials every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 300); // fade out before switching
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Scroll fade-up animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 bg-sky-50 text-gray-800 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-sky-700 mb-8">
          Hear It From Our Clients
        </h2>

        <div className="relative bg-white rounded-2xl shadow-lg p-10 md:p-14">
          <div
            className={`flex flex-col items-center space-y-4 transition-all duration-700 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={testimonials[activeIdx].avatar}
              alt={testimonials[activeIdx].name}
              className="w-20 h-20 rounded-full object-cover shadow-md"
            />
            <p className="text-lg italic text-gray-700 leading-relaxed max-w-2xl">
              “{testimonials[activeIdx].quote}”
            </p>
            <p className="font-semibold text-gray-900 text-lg">
              {testimonials[activeIdx].name}
            </p>
            <p className="text-gray-600 text-sm">
              {testimonials[activeIdx].role}
            </p>
          </div>

          {/* Avatar navigation */}
          <div className="mt-10 flex justify-center items-center space-x-5">
            {testimonials.map((t, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setFade(false);
                  setTimeout(() => {
                    setActiveIdx(idx);
                    setFade(true);
                  }, 300);
                }}
                className={`w-14 h-14 rounded-full overflow-hidden border-2 transition-all duration-500 ${
                  idx === activeIdx
                    ? "border-sky-600 scale-110 shadow-lg"
                    : "border-gray-300 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
