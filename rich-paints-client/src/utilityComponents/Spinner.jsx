// Spinner.js
import React from "react";

const Spinner = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='loader bg-red-800 h-6 w-6 rounded-full animate-spin'></div>
    </div>
  );
};

export default Spinner;
