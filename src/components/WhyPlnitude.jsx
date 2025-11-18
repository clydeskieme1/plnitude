import { useEffect, useRef, useState } from "react";

export default function WhyPlnitude() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      title: "Pay Only for Results",
      desc: "No monthly retainers. No contracts. You only pay when a qualified prospect shows up.",
    },
    {
      title: "No Onboarding Fee To Get Started",
      desc: "No setup fees are needed to start with us.",
    },
    {
      title: "Fully Done-for-You System",
      desc: "From domains to data, copy to deliverability, we handle everything behind the scenes.",
    },
    {
      title: "Meetings That Convert",
      desc: "Before calls are booked in your calendar, they are vetted by your criteria. You are also trained on how to effectively convert these meetings into long-term clients.",
    },
    {
      title: "Value-First Outreach",
      desc: "Your prospects don't get spammed with generic templates. Every touchpoint provides genuine value first to build trust.",
    },
    {
      title: "Trusted by Arranged of B2B Service Industries",
      desc: "From industries ranging from SaaS to Commerce, we've helped B2B service companies book meetings with brands like Rolls-Royce and Vodafone.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="why-plnitude"
      className={`py-20 bg-transparent text-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
        Why Choose{" "}
        <span className="font-display bg-gradient-to-r from-sky-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-extrabold animate-gradientFlow drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">
          PLNITUDE
        </span>
      </h2>
      <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
        
      </p>

      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="relative bg-white/5 backdrop-blur-sm border border-white/6 rounded-2xl p-8 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] text-left"
          >
            <div className="h-[4px] w-12 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full mb-4"></div>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight leading-tight mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
