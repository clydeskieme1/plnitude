import { useState, useEffect, useRef } from "react";
import {
  FaUsers,
  FaBullhorn,
  FaCogs,
  FaChartLine,
  FaEnvelopeOpenText,
  FaHandshake,
} from "react-icons/fa";

export default function HowWeWork() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [prevStep, setPrevStep] = useState(null);
  const [iconVisible, setIconVisible] = useState(Array(6).fill(false));
  const [isPaused, setIsPaused] = useState(false);

  // Scroll fade-up animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      id: 1,
      icon: <FaUsers size={24} />,
      title: "Discovery & Targeting",
      desc: "We define your ideal client profile and uncover where they actually spend time.",
    },
    {
      id: 2,
      icon: <FaBullhorn size={24} />,
      title: "Value-First Strategy",
      desc: "Together, we craft messaging that earns attention instead of demanding it.",
    },
    {
      id: 3,
      icon: <FaCogs size={24} />,
      title: "Setup & Launch",
      desc: "From domain warm-up to data verification and inbox management — we handle the technical setup.",
    },
    {
      id: 4,
      icon: <FaChartLine size={24} />,
      title: "Meetings on Your Calendar",
      desc: "Calls are booked directly on your calendar — all you do is show up and close.",
    },
    {
      id: 5,
      icon: <FaEnvelopeOpenText size={24} />,
      title: "Conversion Coaching",
      desc: "We help refine your scripts and follow-ups so meetings consistently turn into clients.",
    },
    {
      id: 6,
      icon: <FaHandshake size={24} />,
      title: "Scale & Optimize",
      desc: "Continuous testing, cleanup, and message refreshes to increase ROI as we scale.",
    },
  ];

  // Sequential reveal for icons
  useEffect(() => {
    steps.forEach((_, i) => {
      setTimeout(() => {
        setIconVisible((prev) => {
          const copy = [...prev];
          copy[i] = true;
          return copy;
        });
      }, i * 120);
    });
  }, []);

  // Cross-fade transition between steps
  const changeStep = (nextStep) => {
    setPrevStep(activeStep);
    setActiveStep(nextStep);
  };

  // Auto-step rotation (pause on manual interaction)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setPrevStep(activeStep);
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeStep, isPaused, steps.length]);

  const handleIconClick = (index) => {
    setIsPaused(true);
    changeStep(index);
    setTimeout(() => setIsPaused(false), 1000); // resume after 2s
  };

  return (
    <section
      id="how-we-work"
      ref={sectionRef}
      className={`py-28 bg-gradient-to-b from-white to-sky-50 text-gray-800 overflow-hidden relative transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Header */}
        <h2 className="text-5xl font-bold text-sky-700 mb-4">
          How We <span className="bg-gradient-to-r from-sky-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent font-extrabold animate-gradientFlow">Work</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          A clear, structured process that turns cold outreach into predictable, qualified meetings.
        </p>

        {/* Step Card with Cross-Fade Layers */}
        <div className="relative max-w-2xl md:max-w-3xl mx-auto mb-14 min-h-[340px]">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`absolute inset-0 bg-white/90 backdrop-blur-md border border-sky-100 rounded-3xl shadow-xl p-12 flex flex-col justify-center transition-opacity duration-700 ease-in-out ${
                index === activeStep
                  ? "opacity-100 z-20"
                  : index === prevStep
                  ? "opacity-0 z-10"
                  : "opacity-0 z-0"
              }`}
            >
              <div className="flex justify-center mb-5 text-sky-600 transition-all duration-300">
                {step.icon}
              </div>
              <p className="font-semibold text-gray-500 mb-1 text-base">
                STEP {step.id}
              </p>
              <h3 className="text-3xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 max-w-lg mx-auto text-lg leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Icons Row */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-10 flex-wrap sm:flex-nowrap">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => handleIconClick(index)}
              className={`relative group w-[56px] h-[56px] sm:w-[62px] sm:h-[62px] flex items-center justify-center rounded-full transition-all duration-400 ${
                activeStep === index
                  ? "text-white scale-110"
                  : "bg-white border border-sky-100 text-sky-600 hover:shadow-md hover:scale-105"
              } ${iconVisible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
              style={{
                transitionDelay: `${index * 0.05}s`,
                transitionProperty: "all",
                transitionTimingFunction: "ease-in-out",
              }}
              aria-label={`Step ${step.id}: ${step.title}`}
            >
              {activeStep === index && (
                <>
                  <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(14,165,233,0.12)_0%,rgba(20,184,166,0.28)_40%,rgba(6,182,212,0.36)_70%,rgba(14,165,233,0.12)_100%)] blur-sm animate-rotate-glow"></span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500 to-sky-700 shadow-lg opacity-30 animate-hue-shift"></span>
                </>
              )}
              <span className="relative z-10">{step.icon}</span>
            </button>
          ))}
        </div>

        {/* Decorative Bar */}
        <div className="mt-16 h-[4px] w-40 mx-auto bg-gradient-to-r from-sky-400 to-sky-600 rounded-full"></div>
      </div>
    </section>
  );
}
