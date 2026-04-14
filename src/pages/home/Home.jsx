import React from 'react';
import Banner from './banner/Banner';
import HowItWorks from './works/HowItWorks';
import OurServices from './services/OurServices';
import Brands from './brands/Brands';
import ChoseUs from './choseUs/ChoseUs';
import Affiliate from './affiliate/Affiliate';
import Reviews from './reviews/Reviews';
import FAQ from './faq/Faq';


const Home = () => {
  return (
    <div className='space-y-5'>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <ChoseUs></ChoseUs>
      <Affiliate></Affiliate>
      <Reviews></Reviews>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;