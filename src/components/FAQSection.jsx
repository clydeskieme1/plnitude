import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQSection() {
  const faqs = [
    {
      question: "What exactly do we offer?",
      answer:
        "We deliver qualified, show-up meetings with your ideal prospects through primarily cold email. Our campaigns are built to connect, engage, and convert.",
    },
    {
      question: "How do you find the right prospects?",
      answer:
        "We define an Ideal Customer Profile with you, then use firmographic, technographic, and intent data to build clean, verified lists that match your offering.",
    },
    {
      question: "How fast until we see meetings?",
      answer:
        "Most clients see meetings begin within 2–3 weeks once the campaign and deliverability are fully set up and warmed. Momentum compounds in weeks 4–8.",
    },
    {
      question: "Do you integrate with our CRM and calendar?",
      answer:
        "Yes, we integrate with tools like HubSpot, Pipedrive, and Calendly/Google Calendar for routing, tracking, and rescheduling. Your pipeline stays organized.",
    },
    {
      question: "What do you need from us to succeed?",
      answer:
        "A strong offer, clear positioning, and timely approvals. We handle targeting, copy, sending, and booking logistics so your team can focus on closing.",
    },
    {
      question: "How do you price your service?",
      answer:
        "Typically we charge our clients on a performance based engagement, primarily just paying per qualified meeting that shows.",
    },
    {
      question: "Can you guarantee results?",
      answer:
        "We commit to booked, qualified meetings aligned to your ICP. Outcomes depend on market fit and offer strength, but our systems consistently produce pipeline.",
    },
    {
      question: "How do you handle warm leads and follow-ups?",
      answer:
        "We route and prioritize warm replies, handle reschedules, and add sensible follow-up cadences. Your team receives clean hand-offs ready to advance deals.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      id="faq"
      className="py-24 bg-transparent text-gray-200 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 text-center fade-slide-in">
        {/* Header */}
        <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
          Everything You{" "}
          <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-extrabold animate-gradientFlow drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">
            Need to Know
          </span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-14 text-lg">
          Straightforward answers about how our performance-based system works, no fluff, no hidden terms.
        </p>

        {/* FAQ Items */}
        <div className="space-y-6 text-left max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md border ${
                  isOpen ? "border-white/12 bg-white/8" : "border-white/6 bg-white/3"
                }`}
              >
                <button
                  id={`faq-header-${index}`}
                  className="w-full flex justify-between items-center text-left p-6 focus:outline-none focus-visible:ring focus-visible:ring-sky-500/40"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="font-semibold text-white text-lg">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-sky-300 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-header-${index}`}
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="p-6 pt-0 text-gray-300 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
