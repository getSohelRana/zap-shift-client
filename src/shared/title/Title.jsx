import React from 'react';

const Title = ({children , className = ""}) => {
  return (
    <h2 className={`text-xl font-bold text-secondary ${className}`}>
      {children}
    </h2>
  );
};

export default Title;