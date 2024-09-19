import React from "react";

const AboutUs = () => {
  return (
    <div className='py-12 bg-gray-100' id="about-us">
      <div className='container mx-auto px-4'>
        {/* Section Title */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-indigo-600 mb-4'>About Us</h2>
        </div>

        {/* About Us Content */}
        <div className='flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8'>
          {/* Image Section */}
          <div className='flex-shrink-0 w-full md:w-1/2'>
            <img
              src='/Images/products/about-us.PNG'
              alt='About Us'
              className='w-full h-auto rounded-lg shadow-lg'
            />
          </div>

          {/* Text Section */}
          <div className='w-full md:w-1/2 space-y-6'>
            <div>
              <h2 className='text-3xl font-normal text-indigo-400 mb-3'>
                Rich Paints Limited
              </h2>
              <p className='text-lg text-gray-600'>
                Rich Paints is a privately held company and duly registered
                under the Company Laws of Kenya. We are a team of young,
                energetic, vibrant, and free-thinking individuals with only one
                objective: Making Rich Paints the number one paint company in
                Kenya.
              </p>
            </div>
            <div>
              <h2 className='text-3xl font-normal text-indigo-400 mb-3'>
                Our Mission
              </h2>
              <p className='text-lg text-gray-600'>
                We are not just a paint manufacturing company; we sell beauty
                and happiness. Our aim is to deliver top-quality painting
                solutions that exceed our clients' expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
