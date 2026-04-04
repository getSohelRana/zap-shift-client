import React from 'react';

const Container = ({children}) => {
  return (
    <div className='max-w-screen-2xl mx-auto px-3'>
      {children}
    </div>
  );
};

export default Container;