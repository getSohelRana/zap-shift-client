import React from "react";
import icon from "../../../assets/service.png";
import Text from "../../../shared/text/Text";
import Heading from "../../../shared/heading/Heading";
import Title from "../../../shared/title/Title";

const Services = () => {
  const services = [
    {
      title: "Express  & Standard Delivery",
      desc: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      title: "Nationwide Delivery",
      desc: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      title: "Fulfillment Solution",
      desc: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      title: "Cash on Home Delivery",
      desc: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      title: "Corporate Service / Contract In Logistics",
      desc: "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      title: "Parcel Return",
      desc: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];
  return (
    <div className="bg-secondary p-15  rounded-3xl my-20">
      <div>
        <Heading className="text-white/90">Our services</Heading>
        <Text className="max-w-3xl mx-auto text-white/90">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </Text>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="card bg-base-200  shadow-md text-center p-2 lg:p-5"
          >
            <div className="card-body">
              <figure>
                <img src={icon} alt="Shoes" />
              </figure>
              <Title>{service.title}</Title>
              <Text>{service.desc}</Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
