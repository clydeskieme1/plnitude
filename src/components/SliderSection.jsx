import React from "react";
import Bingx from "../assets/logos/Bingx.png";
import Campbells from "../assets/logos/Campbells.png";
import HargreavesLansdown from "../assets/logos/HargreavesLansdown.png";
import RollsRoyce from "../assets/logos/RollsRoyce.png";
import Uber from "../assets/logos/Uber.png";
import Robinhood from "../assets/logos/Robinhood.png";
import Plus500 from "../assets/logos/Plus500.png";
import Vodafone from "../assets/logos/Vodafone.png";

export default function SliderSection() {
  const logos = [
    { src: Bingx, name: "BingX" },
    { src: Campbells, name: "Campbell's" },
    { src: HargreavesLansdown, name: "Hargreaves Lansdown" },
    { src: Plus500, name: "Plus500" },
    { src: Robinhood, name: "Robinhood" },
    { src: RollsRoyce, name: "Rolls-Royce" },
    { src: Uber, name: "Uber" },
    { src: Vodafone, name: "Vodafone" },
  ];

  return (
    <section className="bg-transparent py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-2xl font-bold text-white mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
          Brands we’ve <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-extrabold animate-gradientFlow drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">booked meetings</span> with for our clients
        </h2>

        {/* Slider only */}
        <div
          className="relative overflow-hidden rounded-2xl shadow-soft"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 64px, black calc(100% - 64px), transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 64px, black calc(100% - 64px), transparent)",
          }}
        >
          <div
            className="flex w-max gap-8 animate-scroll"
            role="list"
            aria-label="Client logos carousel"
          >
            {[...logos, ...logos].map((item, i) => (
              <div
                key={`logo-${i}`}
                role="listitem"
                className={`flex items-center justify-center h-24 px-6 shrink-0 ${item.name === "Robinhood" ? "-mr-2" : ""} ${item.name === "Uber" ? "-ml-2" : ""}`}
              >
                <div className={`h-20 w-40 flex items-center justify-center rounded-xl bg-transparent p-0 ${item.name === "Robinhood" ? "scale-[1.15]" : ""}`}>
                  <img
                    src={item.src}
                    alt={`${item.name} logo`}
                    className="h-full w-full object-contain filter brightness-105 contrast-110 saturate-125 transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
