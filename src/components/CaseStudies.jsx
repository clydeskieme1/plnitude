import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const caseStudies = [
  {
    title: "From 0 to 25 Meetings in 30 Days",
    client: "B2B Marketing Agency",
    result:
      "Helped a B2B marketing agency secure 25 meetings in the first 30 days of campaign launch.",
    youtubeId: "VIDEO_ID_1",
    thumbnail: "/assets/case1-thumb.jpg",
  },
  {
    title: "$300k Pipeline in 6 Weeks",
    client: "Cloud Security Provider",
    result:
      "Built a $300k sales pipeline within 6 weeks by refining ICP targeting and multi-channel outreach.",
    youtubeId: "VIDEO_ID_2",
    thumbnail: "/assets/case2-thumb.jpg",
  },
  {
    title: "Boosted Conversion Rates by 3x",
    client: "HR Tech Startup",
    result:
      "Achieved a 3x boost in conversion rates through A/B tested outreach and optimized follow-ups.",
    youtubeId: "VIDEO_ID_3",
    thumbnail: "/assets/case3-thumb.jpg",
  },
  {
    title: "40 Meetings Booked in 60 Days",
    client: "AI Software Development Firm",
    result:
      "Generated 40 booked meetings in under 60 days for an AI software development company through refined targeting and messaging.",
    youtubeId: "VIDEO_ID_4",
    thumbnail: "/assets/case4-thumb.jpg",
  },
  {
    title: "$450k Pipeline in 90 Days",
    client: "B2B SaaS Company",
    result:
      "Created $450k in sales pipeline within 90 days through optimized outbound campaigns and strategic outreach.",
    youtubeId: "VIDEO_ID_5",
    thumbnail: "/assets/case5-thumb.jpg",
  },
  {
    title: "30 Qualified Demos in 45 Days",
    client: "Cybersecurity Startup",
    result:
      "Booked 30 qualified demos in 45 days using hyper-personalized messaging and improved lead segmentation.",
    youtubeId: "VIDEO_ID_6",
    thumbnail: "/assets/case6-thumb.jpg",
  },
  {
    title: "20 Enterprise Meetings in 2 Months",
    client: "IT Solutions Provider",
    result:
      "Delivered 20 meetings with enterprise clients within 2 months of engagement start.",
    youtubeId: "VIDEO_ID_7",
    thumbnail: "/assets/case7-thumb.jpg",
  },
  {
    title: "10x ROI from Cold Outreach",
    client: "Financial Software Company",
    result:
      "Generated 10x ROI on outreach investment by improving personalization and timing of campaigns.",
    youtubeId: "VIDEO_ID_8",
    thumbnail: "/assets/case8-thumb.jpg",
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
    <section className="py-20 bg-transparent text-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Case Studies
        </h2>

        <div
          className={`transition-opacity duration-700 ${
            isFading ? "opacity-40" : "opacity-100"
          }`}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
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
          >
            {caseStudies.map((study, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 h-full flex flex-col transition-all duration-300 hover:shadow-lg min-h-[480px]">
                  {/* Thumbnail */}
                  <div className="w-full aspect-video overflow-hidden flex-shrink-0">
                    <img
                      src={study.thumbnail}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold mb-1">
                        {study.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        Client: {study.client}
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {study.result}
                      </p>
                    </div>

                    <button
                      onClick={() => handleOpenModal(study)}
                      className="mt-5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm py-2 rounded-lg transition"
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
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={handleCloseModal}
          >
            <div
              className="bg-white rounded-2xl p-6 max-w-3xl w-full relative text-gray-900"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
                onClick={handleCloseModal}
              >
                ✕
              </button>
              <h3 className="text-2xl font-semibold mb-2">
                {selectedCase.title}
              </h3>
              <p className="text-gray-500 mb-4">
                Client: {selectedCase.client}
              </p>
              <p className="text-gray-700 mb-6">{selectedCase.result}</p>
              <div className="aspect-video">
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
