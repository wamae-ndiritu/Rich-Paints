import React from "react";
import { tips } from "../components/paintingTips/tipsData";

const PaintingTipsPage = () => {
  return (
    <div className='bg-gray-100 min-h-screen py-8'>
      <div className='md:container mx-auto md:px-12'>
        <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
          <img
            src='/banners/tips-10.png'
            alt='10 painting tips'
            className='w-full h-32 md:h-64 object-cover'
          />
          <div className='p-8'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>
              Top 10 Essential Painting Tips for a Flawless Finish
            </h2>
            {tips.map((tipItem, index) => {
              const { _id, title, description } = tipItem;
              return (
                <div className='mb-6 border-b last:border-b-0 pb-4' key={_id}>
                  <h6 className='text-xl font-semibold text-gray-800 mb-2'>
                    {index + 1}. {title}
                  </h6>
                  <p className='text-gray-700'>{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingTipsPage;
