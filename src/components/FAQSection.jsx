import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQSection() {
  const faqs = [
    {
      question: "What exactly do we offer?",
      answer:
        "We deliver qualified, show-up meetings with your ideal prospects — not just cold leads. Our campaigns are built to connect, engage, and convert.",
    },
    {
      question: "What counts as a 'qualified' meeting?",
      answer:
        "Before we launch, we define your ideal client criteria together — job title, company size, industry, and buying intent. You only pay for meetings that match those parameters.",
    },
    {
      question: "What happens if someone doesn’t show up?",
      answer:
        "You don’t pay. We replace no-shows or unqualified calls, guaranteed. Our performance-based model means we only win when you do.",
    },
    {
      question: "Do I need a contract or retainer?",
      answer:
        "No retainers. No long-term lock-ins. It’s month-to-month and performance-based — you can pause anytime.",
    },
    {
      question: "How soon will I see meetings?",
      answer:
        "Most clients start seeing qualified meetings within 2–3 weeks of launch. Everything is pre-tested — deliverability, messaging, and ICP validation — before campaigns go live.",
    },
    {
      question: "Will this hurt my domain or brand reputation?",
      answer:
        "Never. We use brand-safe copy, warmed domains, and advanced deliverability setups to protect your sender reputation and ensure every message lands safely.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-white to-sky-50 text-gray-800 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 text-center fade-slide-in">
        {/* Header */}
        <h2 className="text-5xl font-bold text-sky-700 mb-4 tracking-tight">
          Everything You <span className="text-sky-500">Need to Know</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          Straightforward answers about how our performance-based system works —
          no fluff, no hidden terms.
        </p>

        {/* FAQ Items */}
        <div className="space-y-6 text-left max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-sky-100 rounded-2xl bg-white/90 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center text-left p-6"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-800 text-lg">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-sky-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="p-6 pt-0 text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
