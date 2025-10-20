import React from "react";
import Robinhood from "../assets/logos/Robinhood.png";
import Plus500 from "../assets/logos/Plus500.png";
import Vodafone from "../assets/logos/Vodafone.png";
import HargreavesLansdown from "../assets/logos/HargreavesLansdown.png";
import Uber from "../assets/logos/Uber.png";
import Campbells from "../assets/logos/Campbells.png";
import BingX from "../assets/logos/Bingx.png";
import RollsRoyce from "../assets/logos/RollsRoyce.png";

export default function SliderSection() {
  const logos = [
    { src: Robinhood, name: "Robinhood" },
    { src: Plus500, name: "Plus500" },
    { src: Vodafone, name: "Vodafone" },
    { src: HargreavesLansdown, name: "Hargreaves Lansdown" },
    { src: Uber, name: "Uber" },
    { src: Campbells, name: "Campbells" },
    { src: BingX, name: "BingX" },
    { src: RollsRoyce, name: "Rolls Royce" },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">Brands we’ve <span className="bg-gradient-to-r from-sky-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent font-extrabold animate-gradientFlow">booked meetings</span> with for our clients</h2>

        {/* Single row: continuous leftward scroll */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent" />
          <div
            className="flex w-max gap-8 animate-scroll hover:[animation-play-state:paused]"
            role="list"
            aria-label="Client logos carousel"
          >
            {[...logos, ...logos].map((item, i) => {
              const isRollsRoyce = item.name.toLowerCase().includes("rolls");
              const isRobinhood = item.name.toLowerCase().includes("robinhood");
              const isCampbells = item.name.toLowerCase().includes("campbells");
              return (
                <div
                  key={`logo-${i}`}
                  role="listitem"
                  className={`flex items-center justify-center h-16 px-5 ${isRollsRoyce ? "-mx-3" : ""} shrink-0`}
                >
                  <div className={`${isRollsRoyce ? "h-16 w-32" : isRobinhood ? "h-[60px] w-[120px]" : isCampbells ? "h-[60px] w-[120px]" : "h-14 w-28"} flex items-center justify-center`}>
                    <img
                      src={item.src}
                      alt={`${item.name} logo`}
                      className="h-full w-full object-contain transition"
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
