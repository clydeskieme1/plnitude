import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Ahmed_thumbnail from "../assets/Ahmed_thumbnail.jpg";
import Ahmed from "../assets/Ahmed.jpg";
import Alexey_thumbnail from "../assets/Alexey_thumbnail.jpg";
import Alexey from "../assets/Alexey.jpg";
import Arnav_thumbnail from "../assets/Arnav_thumbnail.jpg";
import Arnav from "../assets/Arnav.jpg";
import Daniel_thumbnail from "../assets/Daniel_thumbnail.png";
import Daniel from "../assets/Daniel.jpg";
import Cole_thumbnail from "../assets/Cole_thumbnail.jpg";
import Cole from "../assets/Cole.jpg";
import Eugene_thumbnail from "../assets/Eugene_thumbnail.jpg";
import Eugene from "../assets/Eugene.jpg";
import Taylor_thumbnail from "../assets/Taylor_thumbnail.jpg";
import Taylor from "../assets/Taylor.jpg";
import Nickolas_thumbnail from "../assets/Nickolas_thumbnail.jpg";
import Nickolas from "../assets/Nickolas.jpg";

const caseStudies = [
  {
    title: "6 Deals Closed in 2 Months",
    client: "Ahmed Almnaseer, Head of Sales @ Arcady Media, United States",
    result:
      "From 0 Calls Booked with Cold Email To Closing 6 E-commerce Email Marketing Clients Signed in 2 Months With Cold Email.",
    youtubeId: "sfvlrpkBF2o",
    thumbnail: Ahmed_thumbnail,
    clientImage: Ahmed,
  },
  {
    title: "1 Call a Month to 97 Calls in 2 Months",
    client: "Daniel Sherf, Co-Founder @ Feature Digital, Israel",
    result:
      "From Booking 1 Meeting A Month To Booking 97 Meetings in 2 Months (Including a meeting with Vodafone).",
    youtubeId: "1R1zDHS3Wnc",
    thumbnail: Daniel_thumbnail,
    clientImage: Daniel,
  },
  {
    title: "Networking & Referrals To Booking 63 Meetings",
    client: "Eugen Kim, Head of Strategy @ First Page Digital, Singapore",
    result:
      "How A Marketing Agency Went From Relying On Inbound To Booking 63 Calls In 2 Months",
    youtubeId: "bVtCHb6blRo",
    thumbnail: Eugene_thumbnail,
    clientImage: Eugene,
  },
  {
    title: "Generate 23 Qualified Commercial Leads in 4 Weeks",
    client: "Cole Winsness, Marketing Director @ Zerorez of Atlanta, United States",
    result:
      "How This 80+ Location Commercial Cleaning Company Generated 23 Qualified Commercial Leads in 4 Weeks.",
    youtubeId: "AAilalB2iWI",
    thumbnail: Cole_thumbnail,
    clientImage: Cole,
  },
  {
    title: "Add $120,000 in 6 Months",
    client: "Taylor Juchs, Operations Manager @ Impeccably Clean LLC, United States",
    result:
      "How This Family-Owned Cleaning Business Added $120K In 6 Months With AI.",
    youtubeId: "p2cEKQRt0YA",
    thumbnail: Taylor_thumbnail,
    clientImage: Taylor,
  },
  {
    title: "4 Recurring Commercial Clients in 7 Weeks",
    client: "Nickolas Soares, Operations Manager @ SC Cleaning Service, LLC, United States",
    result:
      "How A Commercial Cleaning Business Signed 4 Recurring Cleaning Clients in 7 Weeks.",
    youtubeId: "wyjlnJ83H9c",
    thumbnail: Nickolas_thumbnail,
    clientImage: Nickolas,
  },
  {
    title: "Generated 33 Qualified Leads In 1 Month",
    client: "Arnav Sharma, Head of Business Development @ Property One Limited, United Kingdom",
    result:
      "How We Generated 33 Quote-Ready Leads In 1 Month For A $2.9M Per Year Cleaning Business.",
    youtubeId: "OiC9wdyogwY",
    thumbnail: Arnav_thumbnail,
    clientImage: Arnav,
  },
  {
    title: "From 0 Calls To Booking 45 Meetings In 4 Months",
    client: "Alexey Borisov, Co-Founder @ Rocketech, Singapore",
    result:
      "From 0 Calls From Outbound To Booking 45 Qualified Meetings In 4 Months For Their Software Development Services.",
    youtubeId: "6IylTt9w4vA",
    thumbnail: Alexey_thumbnail,
    clientImage: Alexey,
  },
];

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null);
  const swiperRef = useRef(null);
  const [isFading, setIsFading] = useState(false);

  const handleOpenModal = (study) => {
    setSelectedCase(study);
    swiperRef.current?.autoplay.stop();
  };

  const handleCloseModal = () => {
    setSelectedCase(null);
    swiperRef.current?.autoplay.start();
  };

  const handleSlideChange = () => {
    setIsFading(true);
    setTimeout(() => setIsFading(false), 600);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="case-studies"
      className="py-24 bg-transparent text-gray-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Case{" "}
            <span className="bg-gradient-to-r from-sky-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent font-extrabold animate-gradientFlow drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">
              Studies
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Proven client outcomes powered by precision targeting and
            data-driven outbound execution.
          </p>
        </div>

        {/* Swiper */}
        <div
          className={`transition-opacity duration-700 ${
            isFading ? "opacity-40" : "opacity-100"
          }`}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={36}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            speed={700}
            pagination={{ clickable: true, dynamicBullets: false }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
            className="pb-20 case-studies-swiper"
          >
            {caseStudies.map((study, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white/5 rounded-3xl overflow-hidden shadow-md border border-white/10 h-full flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 min-h-[520px]">
                  {/* Thumbnail */}
                  <div className="relative w-full aspect-video overflow-hidden flex-shrink-0 group">
                    <img
                      src={study.thumbnail}
                      alt={study.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <button
                      onClick={() => handleOpenModal(study)}
                      className="absolute bottom-3 right-3 bg-white/90 text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-md shadow hover:bg-white"
                      aria-label={`Play ${study.title}`}
                    >
                      ▶ Play
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1 leading-snug">
                        {study.title}
                      </h3>
                      <p className="text-sky-400 font-medium mb-2 text-sm">
                        Client: {study.client}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {study.result}
                      </p>
                    </div>

                    <button
                      onClick={() => handleOpenModal(study)}
                      className="mt-6 bg-gradient-to-r from-sky-500 via-teal-400 to-cyan-400 text-white text-sm py-2.5 rounded-lg shadow transition-all duration-300 hover:brightness-110"
                    >
                      View Case Study
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Modal */}
        {selectedCase && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
            onClick={handleCloseModal}
            aria-modal="true"
            role="dialog"
          >
            <div
              className="p-[2px] rounded-3xl bg-gradient-to-r from-sky-500 via-teal-400 to-cyan-500 animate-gradientFlow"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-[#061022] rounded-3xl p-8 max-w-3xl w-full relative text-gray-100 shadow-2xl animate-fadeIn">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 text-2xl"
                  onClick={handleCloseModal}
                  aria-label="Close"
                >
                  ✕
                </button>

                {/* Client Info */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={selectedCase.clientImage}
                    alt={`${selectedCase.client} profile`}
                    className="w-14 h-14 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold text-white leading-snug">
                      {selectedCase.title}
                    </h3>
                    <p className="text-sky-400 text-sm font-medium">
                      Client: {selectedCase.client}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6">{selectedCase.result}</p>

                {/* Video */}
                <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedCase.youtubeId}`}
                    title={selectedCase.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
