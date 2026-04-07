import React from "react";
import icon1 from "../../../assets/bookingIcon.png";
import Text from "../../../shared/text/Text";
import Title from "../../../shared/title/Title";
const HowItWorks = () => {
  const cards = [
    {
      title: "Booking Pick & Drop",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Cash On Delivery",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Delivery Hub",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Booking SME & Corporate",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];
  return (
    <div className="my-20">
      <h1 className="font-extrabold text-3xl text-secondary py-8">How it works</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, idx) => (
          <div key={idx} className="card bg-base-200  shadow-md">
            <div className="card-body">
              <figure className="justify-start">
                <img src={icon1} alt="Shoes" />
              </figure>
              <Title>{card.title}</Title>
              <Text align="left">{card.desc}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
