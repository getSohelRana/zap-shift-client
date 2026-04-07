import React from 'react';
import Banner from './banner/Banner';
import HowItWorks from './works/HowItWorks';
import Services from './services/Services';
import Brands from './brands/Brands';
import ChoseUs from './choseUs/ChoseUs';


const Home = () => {
  return (
    <div className='space-y-5'>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <Brands></Brands>
      <ChoseUs></ChoseUs>
    </div>
  );
};

export default Home;