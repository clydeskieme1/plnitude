import React from "react";

export default function WhereAgenciesGetStuck() {
  const items = [
    {
      title: "Inconsistent Client Flow",
      desc:
        "Some months, deals are flying in. Other months, nothing but silence. Relying on referrals and word-of-mouth keeps your revenue swinging up and down. This makes it hard to plan, hire, or scale confidently.",
    },
    {
      title: "Wasted Time on Unqualified Calls",
      desc:
        "You’ve taken enough sales calls that go nowhere. People who “just wanted to learn,” had no budget, or weren’t even decision-makers.",
    },
    {
      title: "Unpredictable Pipeline",
      desc:
        "When clients pause retainers or projects wrap up, there’s no consistent way to replace that revenue. You find yourself starting from scratch again.",
    },
  ];

  return (
    <section
      id="where-agencies-get-stuck"
      className="py-20 bg-transparent text-gray-200 relative overflow-hidden fade-slide-in"
      aria-labelledby="stuck-title"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 id="stuck-title" className="text-5xl font-bold text-white mb-4 tracking-tight text-center">
          Where Most Agencies {" "}
          <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-extrabold animate-gradientFlow drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">
            Get Stuck
          </span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg text-center">
           
        </p>
        

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={`stuck-${i}`}
              className="relative bg-white/5 backdrop-blur-sm border border-white/6 rounded-2xl p-8 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01]"
            >
              <div className="h-[4px] w-12 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full mb-4"></div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-white tracking-tight leading-tight mb-2">{item.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}