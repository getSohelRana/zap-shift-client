import React from "react";
import icon1 from "../../../assets/live-tracking.png";
import icon2 from "../../../assets/safe-delivery.png";
import icon3 from "../../../assets/24_hours service.png";
import Title from "../../../shared/title/Title";
import Text from "../../../shared/text/Text";

const ChoseUs = () => {
  const choses = [
    {
      imgage: icon1,
      title: "Live Parcel Tracking",
      desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      imgage: icon2,
      title: "100% Safe Delivery",
      desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      imgage: icon3,
      title: "24/7 Call Center Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];
  return (
    <div className="my-20 border-b-2 border-dashed border-b-secondary pb-10">
      {choses.map((chose, idx) => (
        <div className=" py-10">
          <div
            key={idx}
            className="bg-base-200 rounded-2xl p-6 md:p-10 shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Left Image */}
              <div className="shrink-0">
                <img
                  src={chose.imgage}
                  alt="tracking"
                  className="w-40 md:w-52"
                />
              </div>

              {/* Divider */}
              <div className="hidden md:block h-30 border-l border-dashed border-base-300"></div>

              {/* Right Content */}
              <div className="max-w-4xl md:text-left">
                <Title>{chose.title}</Title>
                <Text align="text-left">{chose.desc}</Text>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChoseUs;
