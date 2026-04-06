import React from 'react';
import Banner from './banner/Banner';
import HowItWorks from './works/HowItWorks';


const Home = () => {
  return (
    <div className='space-y-5'>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;