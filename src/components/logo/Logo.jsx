import React from 'react';
import logo from "../../assets/logo.png"
const Logo = () => {
  return (
    <div className='flex items-end'>
      <img className='h-12' src={logo} alt="site-logo" />
      <h2 className='text-xl sm:text-3xl -ms-4.5 font-bold'>zapShift</h2>
    </div>
  );
};

export default Logo;