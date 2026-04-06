import React from 'react';

const Title = ({children}) => {
  return (
    <h2 className='text-xl font-bold text-secondary'>
      {children}
    </h2>
  );
};

export default Title;