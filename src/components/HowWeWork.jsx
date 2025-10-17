import { useState, useEffect } from "react";
import {
  FaUsers,
  FaBullhorn,
  FaCogs,
  FaChartLine,
  FaEnvelopeOpenText,
  FaHandshake,
} from "react-icons/fa";

export default function HowWeWork() {
  const steps = [
    {
      id: 1,
      icon: <FaUsers size={22} />,
      title: "Discovery & Onboarding",
      desc: "We collaborate with you to understand your audience, product, and goals — setting the foundation for success.",
    },
    {
      id: 2,
      icon: <FaBullhorn size={22} />,
      title: "Campaign Strategy",
      desc: "We design a personalized outreach roadmap using modern channels and messaging frameworks that resonate.",
    },
    {
      id: 3,
      icon: <FaCogs size={22} />,
      title: "Setup & Preparation",
      desc: "From verified lead lists to technical setup, everything is configured to ensure seamless performance.",
    },
    {
      id: 4,
      icon: <FaChartLine size={22} />,
      title: "Launch & Optimization",
      desc: "We monitor every detail, analyzing metrics to refine campaigns for maximum conversions.",
    },
    {
      id: 5,
      icon: <FaEnvelopeOpenText size={22} />,
      title: "Leads & Reporting",
      desc: "Transparent reporting and real-time access to results — so you’re always in control.",
    },
    {
      id: 6,
      icon: <FaHandshake size={22} />,
      title: "Campaign Adjustments",
      desc: "We run monthly reviews and improvements to keep campaigns fresh and ROI-driven.",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [fade, setFade] = useState(true);
  const [iconVisible, setIconVisible] = useState(Array(steps.length).fill(false));

  const changeStep = (index) => {
    setFade(false);
    setTimeout(() => {
      setActiveStep(index);
      setFade(true);
    }, 250);
  };

  // Sequential wave animation for icons
  useEffect(() => {
    steps.forEach((_, i) => {
      setTimeout(() => {
        setIconVisible((prev) => {
          const newState = [...prev];
          newState[i] = true;
          return newState;
        });
      }, i * 120);
    });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-sky-50 text-gray-800 overflow-hidden relative">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Header */}
        <h2 className="text-4xl font-bold text-sky-700 mb-3">
          How We <span className="text-sky-500">Work</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          A transparent and collaborative approach to driving measurable growth — from onboarding to optimization.
        </p>

        {/* Step Content */}
        <div
          className={`relative max-w-xl mx-auto bg-white/70 backdrop-blur-md border border-sky-100 rounded-2xl shadow-lg p-10 mb-12 transition-all duration-500 transform ${
            fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="flex justify-center mb-4 text-sky-600 transition-all duration-300">
            {steps[activeStep].icon}
          </div>
          <p className="font-semibold text-gray-500 mb-1">
            STEP {steps[activeStep].id}
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            {steps[activeStep].title}
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            {steps[activeStep].desc}
          </p>
        </div>

        {/* Icons Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 relative">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => changeStep(index)}
              className={`relative group w-14 h-14 flex items-center justify-center rounded-full transition-all duration-400 ${
                activeStep === index
                  ? "text-white scale-110"
                  : "bg-white border border-sky-100 text-sky-600 hover:shadow-md hover:scale-105"
              } ${
                iconVisible[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
              style={{
                transitionDelay: `${index * 0.05}s`,
                transitionProperty: "all",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              {/* Active Icon Glow Wrapper */}
              {activeStep === index && (
                <>
                  <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(14,165,233,0.2)_0%,rgba(20,184,166,0.6)_40%,rgba(6,182,212,0.8)_70%,rgba(14,165,233,0.2)_100%)] animate-rotate-glow blur-sm"></span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500 to-sky-700 shadow-lg animate-hue-shift"></span>
                </>
              )}
              <span className="relative z-10">{step.icon}</span>
            </button>
          ))}
        </div>

        {/* Decorative gradient bar */}
        <div className="mt-14 h-[4px] w-40 mx-auto bg-gradient-to-r from-sky-400 to-sky-600 rounded-full"></div>
      </div>
    </section>
  );
}
