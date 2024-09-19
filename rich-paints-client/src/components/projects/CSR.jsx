import React from "react";
import { CSRs } from "./data/projectData";
import "./projects.css"

const CSR = () => {
  return (
    <div className='container mx-auto my-8'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl font-semibold text-indigo-600 mb-4'>
          Corporate Social Responsibility
        </h2>
      </div>
      {CSRs.map((CSR) => {
        const { _id, title, images, after } = CSR;
        return (
          <div className='mb-8' key={_id}>
            <div className='project-subtitle'>
              <h6 className='h6'>{title}</h6>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              {images?.map((image, index) => (
                <div
                  className='relative bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl'
                  key={index}
                >
                  <div className='absolute inset-x-0 bottom-0 bg-red-800 text-white py-2 text-center rounded-b-lg'>
                    <p className='text-sm text-white'>{title}</p>
                  </div>
                  <img
                    src={image}
                    alt={title}
                    className='w-full h-48 object-cover rounded-lg'
                  />
                </div>
              ))}

              {after?.map((image, index) => (
                <div
                  className='relative bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl'
                  key={index}
                >
                  <div className='absolute inset-x-0 bottom-0 bg-red-800 text-white py-2 text-center rounded-b-lg'>
                    <p className='text-sm text-white'>{title}</p>
                  </div>
                  <img
                    src={image}
                    alt={title}
                    className='w-full h-48 object-cover rounded-lg'
                  />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CSR;
