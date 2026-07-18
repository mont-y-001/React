import React from 'react';

const Button = ({ handleClick, text, children }) => {
  return (
    <div>
      {children}
      <button onClick={handleClick}>{text}</button>
    </div>
  );
};

export default Button;
