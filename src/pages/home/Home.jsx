import React from 'react';
import Banner from './banner/Banner';
import HowItWorks from './works/HowItWorks';
import Services from './services/Services';
import Brands from './brands/Brands';
import ChoseUs from './choseUs/ChoseUs';
import Affiliate from './affiliate/Affiliate';


const Home = () => {
  return (
    <div className='space-y-5'>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <Brands></Brands>
      <ChoseUs></ChoseUs>
      <Affiliate></Affiliate>
    </div>
  );
};

export default Home;