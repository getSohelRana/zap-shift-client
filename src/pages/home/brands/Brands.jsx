import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import brand1 from "../../../assets/brands/amazon.png";
import brand2 from "../../../assets/brands/casio.png";
import brand3 from "../../../assets/brands/moonstar.png";
import brand4 from "../../../assets/brands/randstad.png";
import brand5 from "../../../assets/brands/star.png";
import brand6 from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";
import Heading from "../../../shared/heading/Heading";

const Brands = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];
  return (
    <div className="my-20 border-b-2 border-dashed border-b-secondary pb-10">
      <Heading className="text-secondary mb-20">We've helped thousands of sales teams</Heading>
      <Swiper
        className="mySwiper w-full h-full"
        slidesPerView={5}
        centeredSlides={true}
        loop={true}
        spaceBetween={50}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay]}
      >
        {brands.map((brand, idx) => (
          <SwiperSlide key={idx}>
            <img src={brand} alt="brands_logo"  className="grayscale-0 hover:grayscale transition duration-300" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
