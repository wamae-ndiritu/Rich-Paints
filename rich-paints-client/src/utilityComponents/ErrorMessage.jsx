// ErrorMessage.js
import React from "react";

const ErrorMessage = ({ children }) => {
  return (
    <div className='bg-red-800 text-white p-4 rounded'>
      <p className="text-white">{children}</p>
    </div>
  );
};

export default ErrorMessage;
