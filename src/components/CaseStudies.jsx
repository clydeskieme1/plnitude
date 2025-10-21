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
import LogoArcady from "../assets/client logos/Arcady Media.jpg";
import LogoFirstPage from "../assets/client logos/First Page Digital.jpg";
import LogoFeature from "../assets/client logos/Feature Digital.png";
import LogoRocketech from "../assets/client logos/Rocketech.png";
import LogoImpeccably from "../assets/client logos/Impeccably Clean LLC.png";
import LogoSCCleaning from "../assets/client logos/SC Cleaning.png";
import LogoPropertyOne from "../assets/client logos/Property One.png";
import LogoZerorez from "../assets/client logos/Zerorez.png";

// Inline highlighter: bold only the specific words, preserve lines with <br />
const highlightLabels = (text) => {
  const BEFORE = "Before PLNITUDE:";
  const WITH = "With PLNITUDE:";
  const lines = text.split("\n");
  const out = [];
  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed.startsWith(BEFORE)) {
      const rest = trimmed.slice(BEFORE.length);
      out.push(
        <span key={`before-${i}`}>
          <span className="font-bold text-base md:text-lg text-white">Before PLNITUDE</span>:{rest}
        </span>
      );
    } else if (trimmed.startsWith(WITH)) {
      const rest = trimmed.slice(WITH.length);
      out.push(
        <span key={`with-${i}`}>
          <span className="font-bold text-base md:text-lg text-white">With PLNITUDE</span>:{rest}
        </span>
      );
    } else {
      out.push(<span key={`line-${i}`}>{line}</span>);
    }
    if (i < lines.length - 1) out.push(<br key={`br-${i}`} />);
  });
  return out;
};
const caseStudies = [
  {
    title: "$252,000 in Annual Revenue Added in 2 Months",
    client: "Ahmed Almnaseer, Head of Sales @ Arcady Media",
    result:
      "Before PLNITUDE: Relied on word-of-mouth and struggled to book calls with cold emaill Calls booked from Cold Email previously\nWith PLNITUDE: Signed 6 clients on 12-month retainers, in 2 months from the meetings we booked for them",
    youtubeId: "sfvlrpkBF2o",
    thumbnail: Ahmed_thumbnail,
    clientImage: Ahmed,
    company: "Arcady Media",
    niche: "E-commerce Marketing Agency",
    logo: LogoArcady,
  },
  {
    title: "97 Qualified Meetings Booked In 2 Months",
    client: "Daniel Sherf, Co-Founder @ Feature Digital",
    result:
      "Before PLNITUDE: Completely Reliant on Referrals. Previous Outbound Agency Brought Just 3 Meetings in 3 Months.\nWith PLNITUDE: 97 Sales Meetings Booked In 2 Months, Including Meetings With Vodafone and Robinhood",
    youtubeId: "1R1zDHS3Wnc",
    thumbnail: Daniel_thumbnail,
    clientImage: Daniel,
    company: "Feature Digital",
    niche: "Digital Marketing Agency",
    logo: LogoFeature,
  },
  {
    title: "$300,000 12-Month Revenue Added in 2 Months",
    client: "Eugen Kim, Head of Strategy @ First Page Digital",
    result:
      "Before PLNITUDE: Completely Reliant on Referrals. 0 Calls Booked With Cold Email and LinkedIn Outreach\nWith PLNITUDE: $300,000 in 12-month revenue added in 3 months from the meetings we booked for them",
    youtubeId: "bVtCHb6blRo",
    thumbnail: Eugene_thumbnail,
    clientImage: Eugene,
    company: "First Page Digital",
    niche: "Digital Marketing Agency",
    logo: LogoFirstPage,
  },
  {
    title: "Generated 23 Qualified Commercial Leads in 4 Weeks",
    client: "Cole Winsness, Marketing Director @ Zerorez of Atlanta",
    result:
      "Before PLNITUDE: Reliant on spending money on Google and Facebook Ads To Bring Lead-Flow\nWith PLNITUDE: 23 Qualified Leads Generated In First Month On Performance Basis",
    youtubeId: "AAilalB2iWI",
    thumbnail: Cole_thumbnail,
    clientImage: Cole,
    company: "Zerorez of Atlanta",
    niche: "Commercial Cleaning Company",
    logo: LogoZerorez,
  },
  {
    title: "$120,000 added in 6 Months",
    client: "Taylor Juchs, Operations Manager @ Impeccably Clean LLC",
    result:
      "Before PLNITUDE: Struggled to get deal flow, relying on word-of-mouth and Google Ads\nWith PLNITUDE: $120,000 added in 6 months from leads and meetings we generated for them",
    youtubeId: "p2cEKQRt0YA",
    thumbnail: Taylor_thumbnail,
    clientImage: Taylor,
    company: "Impeccably Clean LLC",
    niche: "Family-Owned Commercial Cleaning Business",
    logo: LogoImpeccably,
  },
  {
    title: "4 Recurring Commercial Clients Signed in 7 Weeks",
    client: "Nickolas Soares, Operations Manager @ SC Cleaning Service, LLC",
    result:
      "Before PLNITUDE: Had no consistent deal flow from their internal Google Ads and outreach\nWith PLNITUDE: 4 recurring commercial contracts signed in 7 weeks from leads and meetings we generated for them",
    youtubeId: "wyjlnJ83H9c",
    thumbnail: Nickolas_thumbnail,
    clientImage: Nickolas,
    company: "SC Cleaning",
    niche: "Family-Owned Commercial Cleaning Business",
    logo: LogoSCCleaning,
  },
  {
    title: "From 2 Qualified Leads A Month, To 33 Generated in 1 Month",
    client: "Arnav Sharma, Head of Business Development @ Property One Limited",
    result:
      "Before PLNITUDE: Struggled to generate real traction from their outreach, resulting in 2 leads a month\nWith PLNITUDE: 33 Qualified Leads Generated In First Month of Working Together",
    youtubeId: "OiC9wdyogwY",
    thumbnail: Arnav_thumbnail,
    clientImage: Arnav,
    company: "Property One",
    niche: "Family-Owned Building Services company",
    logo: LogoPropertyOne,
  },
  {
    title: "From 0 Calls From Outbound To Booking 45 Qualified Meetings In 4 Months",
    client: "Alexey Borisov, Co-Founder @ Rocketech",
    result:
      "Before PLNITUDE: Relied on Networking and Referrals For Deals. Struggled with their in-house outbound to bring meetings.\nWith PLNITUDE: 45 Qualified Meetings Booked In 2 Months",
    youtubeId: "6IylTt9w4vA",
    thumbnail: Alexey_thumbnail,
    clientImage: Alexey,
    company: "Rocketech",
    niche: "Software Development Agency",
    logo: LogoRocketech,
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
            Real results from real agencies and B2B Services companies.
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
                <div className="bg-white/5 rounded-3xl overflow-hidden shadow-md border border-white/10 h-[680px] md:h-[720px] flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                  {/* Header: Company + Niche with compact inline logo */}
                  <div className="px-8 min-h-[84px] md:min-h-[100px] flex items-center">
                    <div className="flex items-center gap-3">
                      {study.logo && (
                        <img
                          src={study.logo}
                          alt={`${study.company} logo`}
                          className={`${[LogoImpeccably, LogoRocketech, LogoSCCleaning, LogoZerorez].includes(study.logo) ? "h-16 w-16 md:h-20 md:w-20" : "h-10 w-10 md:h-12 md:w-12"} object-contain rounded-sm flex-shrink-0`}
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                      <div className="min-w-0">
                        <p className="text-white font-semibold text-sm md:text-base leading-tight">
                          {study.company}
                        </p>
                        <p className="text-gray-400 text-xs md:text-sm leading-tight">
                          {study.niche}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail */}
                  <div className="relative w-full aspect-video overflow-hidden flex-shrink-0 group mt-2">
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
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex-1 overflow-y-auto pr-1">
                      <h3 className="text-xl font-semibold text-white mb-1 leading-snug">
                        {study.title}
                      </h3>
                      <p className="text-sky-400 font-medium mb-2 text-sm">
                        Client: {study.client}
                      </p>
                     {highlightLabels(study.result)}
                    </div>

                    <button
                      onClick={() => handleOpenModal(study)}
                      className="mt-4 bg-gradient-to-r from-sky-500 via-teal-400 to-cyan-400 text-white text-sm py-2.5 rounded-lg shadow transition-all duration-300 hover:brightness-110"
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
                <div className="text-gray-300 mb-6">
                  {highlightLabels(selectedCase.result)}
                 </div>

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
