import React from 'react';

const Text = ({children}) => {
  return (
    <p className='text-base font-medium text-black-8'>
      {children}
    </p>
  );
};

export default Text;