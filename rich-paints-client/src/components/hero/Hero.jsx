import React, { useState, useEffect } from "react";
import { banners } from "./BannerData";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"; // For arrows

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPreviousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? banners.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const isLastSlide = currentIndex === banners.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='relative container mx-auto mb-6'>
      {/* Carousel container */}
      <div className='w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg relative group'>
        {/* Slide */}
        <div
          className='w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out'
          style={{ backgroundImage: `url(${banners[currentIndex].img})` }}
        ></div>

        {/* Left Arrow */}
        <button
          onClick={goToPreviousSlide}
          className='absolute top-1/2 left-5 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition'
        >
          <ChevronLeftIcon className='h-6 w-6' />
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNextSlide}
          className='absolute top-1/2 right-5 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-80 transition'
        >
          <ChevronRightIcon className='h-6 w-6' />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className='flex justify-center mt-4 space-x-2'>
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
