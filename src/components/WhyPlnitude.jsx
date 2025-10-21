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
      desc: "No retainers. No contracts. You only pay when a qualified prospect shows up.",
    },
    {
      title: "Fully Done-for-You System",
      desc: "From domains to data, copy to deliverability, we handle everything behind the scenes.",
    },
    {
      title: "Meetings That Convert",
      desc: "We don’t book calls for vanity metrics. Every meeting is vetted and qualified to your ICP.",
    },
    {
      title: "Value-First Outreach",
      desc: "Your prospects don’t get spammed. Every touchpoint provides genuine value first.",
    },
    {
      title: "Trusted by Growth-Focused Agencies",
      desc: "From SaaS to eCommerce, we’ve helped partners book meetings with brands like Rolls-Royce and Vodafone.",
    },
    {
      title: "Data-Driven Optimization",
      desc: "We continuously refine campaigns using real performance data improving response rates, conversions, and ROI.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="why-plnitude"
      className={`py-20 bg-transparent text-center transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <h2 className="text-4xl font-bold text-white mb-6">
        Why Agencies Choose{" "}
        <span className="font-display bg-gradient-to-r from-sky-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-extrabold animate-gradientFlow drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">
          PLNITUDE
        </span>
      </h2>
      <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
        We’re not another lead gen agency, we’re your growth partner on a
        performance only model. Here’s what makes us different:
      </p>

      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-2xl shadow-md p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold text-white mb-3">
              {item.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
