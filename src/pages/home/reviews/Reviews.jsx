import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import quoteIcon from "../../../assets/reviewQuote.png";
import img1 from "../../../assets/customer-top.png";
import Text from "../../../shared/text/Text";
import Title from "../../../shared/title/Title";
import Heading from "../../../shared/heading/Heading";
const Reviews = () => {
  const reviewers = [
    {
      id: 1,
      name: "John Smith",
      designation: "Software Engineer",
      photo: "https://i.pravatar.cc/150?img=1",
      review:
        "Amazing service! The delivery was super fast and everything arrived in perfect condition.",
      rating: 5,
    },
    {
      id: 2,
      name: "Emma Johnson",
      designation: "UI/UX Designer",
      photo: "https://i.pravatar.cc/150?img=2",
      review:
        "Very smooth experience. The interface is clean and easy to use. Highly recommended!",
      rating: 4,
    },
    {
      id: 3,
      name: "Michael Brown",
      designation: "Frontend Developer",
      photo: "https://i.pravatar.cc/150?img=3",
      review:
        "Good service overall, but there is room for improvement in response time.",
      rating: 4,
    },
    {
      id: 4,
      name: "Sophia Davis",
      designation: "Product Manager",
      photo: "https://i.pravatar.cc/150?img=4",
      review:
        "Absolutely awesome! The support team was very helpful and solved my issue quickly.",
      rating: 5,
    },
    {
      id: 5,
      name: "Daniel Wilson",
      designation: "Backend Developer",
      photo: "https://i.pravatar.cc/150?img=5",
      review:
        "Reliable and efficient. I use this regularly for my business needs.",
      rating: 5,
    },
    {
      id: 6,
      name: "Olivia Martinez",
      designation: "QA Engineer",
      photo: "https://i.pravatar.cc/150?img=6",
      review: "Decent experience. Some minor bugs, but nothing too serious.",
      rating: 3,
    },
    {
      id: 7,
      name: "James Anderson",
      designation: "DevOps Engineer",
      photo: "https://i.pravatar.cc/150?img=7",
      review:
        "Fast, secure, and trustworthy. I’m really impressed with the performance.",
      rating: 5,
    },
    {
      id: 8,
      name: "Isabella Thomas",
      designation: "Digital Marketer",
      photo: "https://i.pravatar.cc/150?img=8",
      review: "Great platform! Helped me manage my work more efficiently.",
      rating: 4,
    },
    {
      id: 9,
      name: "William Taylor",
      designation: "Mobile App Developer",
      photo: "https://i.pravatar.cc/150?img=9",
      review: "The features are excellent, but UI can be improved slightly.",
      rating: 4,
    },
    {
      id: 10,
      name: "Ava Moore",
      designation: "Content Strategist",
      photo: "https://i.pravatar.cc/150?img=10",
      review:
        "Loved it! Everything works perfectly and the design is beautiful.",
      rating: 5,
    },
  ];
  return (
    <div className="my-20">
      <div className=" max-w-4xl mx-auto space-y-4">
        <img className="mx-auto" src={img1} alt="" />
        <Heading className="text-secondary">
          What our customers are sayings
        </Heading>
        <Text>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </Text>
      </div>
      <Swiper
        className="mySwiper reviewer mt-10"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={50}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 110,
          modifier: 1,
          slideShadows: true,
          scale: 1,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={true}
        modules={[Pagination, EffectCoverflow, Autoplay, Navigation]}
      >
        {reviewers.map((review, idx) => (
          <SwiperSlide className="mb-10" key={idx}>
            <div className="bg-base-200 p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-sm h-full flex flex-col justify-between">
              {/* Quote Icon */}
              <img
                src={quoteIcon}
                alt=""
                className="w-6 sm:w-8 md:w-10 mb-2 sm:mb-3"
              />

              {/* Review Text */}
              <Text className="text-xs sm:text-sm md:text-base leading-relaxed">
                {review.review}
              </Text>

              {/* Divider */}
              <div className="border-t border-dashed border-secondary my-3 sm:my-4 md:my-5"></div>

              {/* User Info */}
              <div className="flex flex-col md:flex-row items-center gap-2 sm:gap-3 md:gap-4">
                {/* Avatar */}
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover"
                  src={review.photo}
                  alt={review.name}
                />

                {/* Name & Role */}
                <div>
                  <Title className="text-xs sm:text-sm md:text-base font-semibold">
                    {review.name}
                  </Title>

                  <Text
                    align="text-left"
                    className="text-[10px] sm:text-xs md:text-sm opacity-70"
                  >
                    {review.designation}
                  </Text>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
