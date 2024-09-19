import React from "react";
import { services } from "./serviceData";
import EastIcon from "@mui/icons-material/East";

const Services = () => {
  return (
    <>
      <div className='py-12 bg-white' id="our-services">
        <div className='container mx-auto px-4'>
          {/* Section Title and Description */}
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-indigo-600 mb-4'>
              Our Services
            </h2>
            <p className='text-lg text-gray-600'>
              Discover the exceptional services we offer to meet your needs. Our
              team is dedicated to providing high-quality solutions tailored to
              your requirements.
            </p>
          </div>

          {/* Services grid */}
          <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {services.slice(0, 3).map((service) => {
              const { _id, title, image, descrption: description } = service;
              return (
                <div
                  key={_id}
                  className='bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300'
                >
                  {/* Image Section */}
                  <div className='h-64 bg-indigo-200 flex items-center justify-center overflow-hidden'>
                    <img
                      src={image}
                      alt={title}
                      className='object-cover w-full h-full transition-transform duration-500 hover:scale-110'
                    />
                  </div>
                  {/* Content Section */}
                  <div className='p-6'>
                    <h6 className='text-xl font-semibold text-indigo-600 mb-3'>
                      {title}
                    </h6>
                    <p className='text-gray-600'>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View More Button */}
          <div className='flex justify-center mt-8'>
            <div
              className='cursor-pointer inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300'
            >
              <h6 className='text-lg font-semibold'>View More</h6>
              <div className='ml-2'>
                <EastIcon className='text-indigo-600 hover:ml-3 transition-all duration-300' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
