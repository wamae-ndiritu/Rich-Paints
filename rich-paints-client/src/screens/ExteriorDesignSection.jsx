import React from "react";

const ExteriorDesignSection = () => {
  return (
    <section id='exterior-design' className='bg-gray-100 py-16'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='flex flex-col md:flex-row items-center'>
          {/* Left Side: Images */}
          <div className='md:w-1/2 mb-8 md:mb-0'>
            <img
              src='/new/images/painters.jpg'
              alt='Exterior Design'
              className='rounded-lg shadow-lg mb-3'
            />
            {/* <img
              src='/new/images/painted-wall.jpg'
              alt='Exterior Design'
              className='rounded-lg shadow-lg'
            /> */}
          </div>
          {/* Right Side: Text Content */}
          <div className='md:w-1/2 md:pl-12 text-gray-700'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>
              Exterior Design
            </h2>
            <p className='mb-4'>
              Rich Paints also specializes in exterior paints to give your house
              a beautiful exterior. We use Rich Paints Weatherguard Silicone
              Wall Coatings, which are ideal for harsh exterior conditions.
              Silicone wall coatings are commonly used as a protective layer for
              exterior walls, acting as an insulant that protects against water
              penetration.
            </p>
            <p className='mb-4'>
              We also offer Rich Paints Wallmaster, a textured paint formulated
              with Pure Acrylic and marble grits as the main base materials. The
              Wallmaster comes in three grit sizes: 3mm, 2mm, and 0.5mm marble
              grits.
            </p>
            <p className='mb-4'>
              Application of the Wallmaster is done using both stainless steel
              and plastic trowels. Thinning of Wallmaster is not recommended, as
              it comes ready for application.
            </p>
            <p className='font-bold text-gray-900 mb-6'>
              To get a quote, call us on:{" "}
              <a
                href='tel:0208097068'
                className='text-red-600 hover:text-red-800'
              >
                0208097068
              </a>{" "}
              or email your requirements to:{" "}
              <a
                href='mailto:richpaintskenya@gmail.com'
                className='text-red-600 hover:text-red-800'
              >
                richpaintskenya@gmail.com
              </a>{" "}
              for a site visit and quotation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExteriorDesignSection;
