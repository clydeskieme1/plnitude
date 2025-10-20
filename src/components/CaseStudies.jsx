import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const caseStudies = [
  {
    title: "6 Deals Closed in 2 Months",
    client: "Ahmed Almnaseer, Head of Sales @ Arcady Media, United States",
    result:
      "From 0 Calls Booked with Cold Email To Closing 6 E-commerce Email Marketing Clients Signed in 2 Months With Cold Email.",
    youtubeId: "sfvlrpkBF2o",
    thumbnail: "src/assets/Ahmed_thumbnail.jpg",
    clientImage: "src/assets/Ahmed.jpg", // 👈 Placeholder
  },
  {
    title: "1 Call a Month to 97 Calls in 2 Months",
    client: "Daniel Sherf, Co-Founder @ Feature Digital, Israel",
    result:
      "From Booking 1 Meeting A Month To Booking 97 Meetings in 2 Months (Including a meeting with Vodafone).",
    youtubeId: "1R1zDHS3Wnc",
    thumbnail: "src/assets/Daniel_thumbnail.png",
    clientImage: "src/assets/Daniel.jpg",
  },
  {
    title: "Networking & Referrals To Booking 63 Meetings",
    client: "Eugen Kim, Head of Strategy @ First Page Digital, Singapore",
    result:
      "How A Marketing Agency Went From Relying On Inbound To Booking 63 Calls In 2 Months",
    youtubeId: "bVtCHb6blRo",
    thumbnail: "src/assets/Eugene_thumbnail.jpg",
    clientImage: "src/assets/Eugene.jpg",
  },
  {
    title: "Generate 23 Qualified Commercial Leads in 4 Weeks",
    client: "Cole Winsness, Marketing Director @ Zerorez of Atlanta, United States",
    result:
      "How This 80+ Location Commercial Cleaning Company Generated 23 Qualified Commercial Leads in 4 Weeks.",
    youtubeId: "AAilalB2iWI",
    thumbnail: "src/assets/Cole_thumbnail.jpg",
    clientImage: "src/assets/Cole.jpg",
  },
  {
    title: "$450k Pipeline in 90 Days",
    client: "B2B SaaS Company",
    result:
      "Created $450k in sales pipeline within 90 days through optimized outbound campaigns and strategic outreach.",
    youtubeId: "VIDEO_ID_5",
    thumbnail: "/assets/case5-thumb.jpg",
    clientImage: "/assets/client-placeholder.jpg",
  },
  {
    title: "30 Qualified Demos in 45 Days",
    client: "Cybersecurity Startup",
    result:
      "Booked 30 qualified demos in 45 days using hyper-personalized messaging and improved lead segmentation.",
    youtubeId: "VIDEO_ID_6",
    thumbnail: "/assets/case6-thumb.jpg",
    clientImage: "/assets/client-placeholder.jpg",
  },
  {
    title: "20 Enterprise Meetings in 2 Months",
    client: "IT Solutions Provider",
    result:
      "Delivered 20 meetings with enterprise clients within 2 months of engagement start.",
    youtubeId: "VIDEO_ID_7",
    thumbnail: "/assets/case7-thumb.jpg",
    clientImage: "/assets/client-placeholder.jpg",
  },
  {
    title: "10x ROI from Cold Outreach",
    client: "Financial Software Company",
    result:
      "Generated 10x ROI on outreach investment by improving personalization and timing of campaigns.",
    youtubeId: "VIDEO_ID_8",
    thumbnail: "/assets/case8-thumb.jpg",
    clientImage: "/assets/client-placeholder.jpg",
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

  return (
    <section
      id="case-studies"
      className="py-24 bg-gradient-to-b from-white to-sky-50 text-gray-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-sky-700 mb-4 tracking-tight">
            Case{" "}
            <span className="bg-gradient-to-r from-sky-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent font-extrabold animate-gradientFlow">
              Studies
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
            className="pb-20"
          >
            {caseStudies.map((study, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 h-full flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:-translate-y-1 min-h-[520px]">
                  {/* Thumbnail */}
                  <div className="w-full aspect-video overflow-hidden flex-shrink-0">
                    <img
                      src={study.thumbnail}
                      alt={study.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 leading-snug">
                        {study.title}
                      </h3>
                      <p className="text-sky-600 font-medium mb-2 text-sm">
                        Client: {study.client}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {study.result}
                      </p>
                    </div>

                    <button
                      onClick={() => handleOpenModal(study)}
                      className="mt-6 bg-sky-600 hover:bg-sky-700 text-white text-sm py-2.5 rounded-lg shadow transition-all duration-300"
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
          >
            <div
              className="bg-white rounded-3xl p-8 max-w-3xl w-full relative text-gray-900 shadow-2xl animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
                onClick={handleCloseModal}
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
                  <h3 className="text-2xl font-semibold text-gray-800 leading-snug">
                    {selectedCase.title}
                  </h3>
                  <p className="text-sky-600 text-sm font-medium">
                    Client: {selectedCase.client}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6">{selectedCase.result}</p>

              {/* Video */}
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedCase.youtubeId}`}
                  title={selectedCase.title}
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
