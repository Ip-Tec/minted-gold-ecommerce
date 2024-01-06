import React from 'react';

const Center = ({ children }) => {
  return (
    <div className="text-black max-w-screen-lg mx-auto px-1 overflow-x-hidden">
      {children}
    </div>
  );
};

export default Center;
