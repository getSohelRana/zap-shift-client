import React from 'react';
import Banner from './banner/Banner';
import HowItWorks from './works/HowItWorks';
import Services from './services/Services';


const Home = () => {
  return (
    <div className='space-y-5'>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
    </div>
  );
};

export default Home;