import React from "react";
import Heading from "../../../shared/heading/Heading";
import Text from "../../../shared/text/Text";
import icon from "../../../assets/location-merchant.png"
import bgMerchant from "../../../assets/be-a-merchant-bg.png"
import Button from "../../../shared/button/Button";

const Affiliate = () => {
  return (
    <div className="bg-secondary relative my-20 rounded-3xl">
      <img className="absolute top-0 right-0"  src={bgMerchant} alt="" />
      <div className="flex flex-col md:flex-row gap-6 p-10 items-center justify-center">
        <div className="md:max-w-2xl space-y-2.5">
          <Heading className="text-white/90 text-left">
            Merchant and Customer Satisfaction is Our First Priority
          </Heading>
          <Text align="text-left" className="text-white/70">We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</Text>
          <div className="space-x-2 space-y-1.5">
            <Button to="" variant="primary">Become a Merchant</Button>
            <Button to="" variant="outline">Earn with ZapShift Courier</Button>
          </div>
        </div>
        <div className="">
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
