import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { q: "What is PLNITUDE?", a: "We are a performance-driven partner focused on measurable B2B growth." },
    { q: "How do you work?", a: "We apply revenue engineering, operations excellence, and modern GTM to drive outcomes." },
    { q: "What industries do you serve?", a: "Primarily B2B SaaS, services, and technology companies looking to scale." },
  ];

  return (
    <section id="faq" className="py-20 bg-sky-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-sky-600 mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-item-${idx}`}
              >
                <span className="text-lg font-semibold text-gray-900">{item.q}</span>
                <svg
                  className={`w-6 h-6 text-sky-600 transform transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div id={`faq-item-${idx}`} className="mt-4 text-gray-700">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
