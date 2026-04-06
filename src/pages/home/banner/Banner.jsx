import React from "react";
import slide1 from "../../../assets/banner/banner1.png";
import slide2 from "../../../assets/banner/banner2.png";
import slide3 from "../../../assets/banner/banner3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router";

const Banner = () => {
  const slides = [
    {
      imgage: slide1,
      title:
        "Enjoy fast reliable parcel delivery with real-time tracking and zero hassle.",
      button: [
        { text: "Track Your Parcel", link: "/track-parcel" },
        { text: "Be a Rider", link: "/be-rider" },
      ],
    },
    {
      imgage: slide2,
      title:
        "From personal packages to business shipments — we deliver on time, every time.",
      button: [
        { text: "Track Your Parcel", link: "/track-parcel" },
        { text: "Be a Rider", link: "/be-rider" },
      ],
    },
    {
      imgage: slide3,
      title:
        "Safe, fast, and reliable delivery service you can trust anywhere.",
      button: [
        { text: "Track Your Parcel", link: "/track-parcel" },
        { text: "Be a Rider", link: "/be-rider" },
      ],
    },
  ];

  return (
    <div className="my-6 md:my-10">
      <Swiper
        className="w-full h-full"
        centeredSlides={true}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]   rounded-2xl overflow-hidden">
              {/* Image */}
              <img
                className="w-full h-full object-cover"
                src={slide.imgage}
                alt=""
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-end">
                {/* Content */}
                <div className="p-4 sm:p-6 md:p-10 max-w-4xl space-y-3 md:space-y-4">
                  <h2 className="text-white text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold leading-snug">
                    {slide.title}
                  </h2>

                  <div className="flex flex-wrap gap-2">
                    {slide.button.map((btn, i) => (
                      <Link
                        key={i}
                        to={btn.link}
                        className="bg-primary text-black px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium hover:scale-105 transition"
                      >
                        {btn.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
