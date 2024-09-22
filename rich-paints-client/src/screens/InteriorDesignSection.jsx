import React from "react";

const InteriorDesignSection = () => {
  return (
    <section id='interior-design' className='bg-gray-100 py-16'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='flex flex-col md:flex-row items-center'>
          {/* Left Side: Image */}
          <div className='md:w-1/2 mb-8 md:mb-0'>
            <img
              src='/new/images/interior.jpeg'
              alt='Interior Design'
              className='rounded-lg shadow-lg'
            />
            <img
              src='/new/images/wall-painting-with-roller-concept.jpg'
              alt='Interior Design'
              className='rounded-lg shadow-lg mb-3'
            />
          </div>
          {/* Right Side: Text Content */}
          <div className='md:w-1/2 md:pl-12 text-gray-700'>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>
              Interior Design
            </h2>
            <p className='mb-4'>
              Rich Paints has an interior design arm that specializes in wall
              paint designs. We place emphasis on the aesthetics of your space,
              ensuring it fits your unique style and beauty. Our goal is to
              transform your walls into dynamic spaces that brim with life. Our
              exquisite range of room wall paints keeps your walls looking
              beautiful.
            </p>
            <p className='mb-4'>
              Our projects are a testament to our close attention to detail. We
              work with clients to ensure that the proposed design perfectly
              fits their requirements. We make your spaces functional, safe, and
              beautiful.
            </p>
            <p className='mb-4'>
              With the agreed design and color shades, our team embarks on the
              design process: laying out gypsum aluminum metal works, fitting
              gypsum and MDF boards, and preparing the walls. At every stage, we
              apply paints and perform quality checks to ensure the desired
              result is achieved. Attention to detail is our strength, and we
              never compromise on quality.
            </p>
            <p className='mb-4'>
              When choosing paints, we always consider the different room
              environments. For instance:
              <ul className='list-disc list-inside pl-4'>
                <li>
                  High-humidity spaces like kitchens and bathrooms need
                  weather-resistant emulsions or enamels.
                </li>
                <li>
                  Children’s play areas require easy-to-clean paints like Vinyl
                  Silk.
                </li>
                <li>
                  For couples’ bedrooms, we recommend soft, romantic colors.
                </li>
              </ul>
              These are just a few of the recommendations we offer to ensure the
              best results for our clients.
            </p>
            <p className='mb-6'>
              Our team includes professional interior designers, painters, and
              aluminum metal experts, ready to bring your vision to life.
            </p>
            <p className='font-bold text-gray-900'>
              To get a quote, call us on:{" "}
              <a
                href='tel:0208097068'
                className='text-red-600 hover:text-red-800'
              >
                0208097068
              </a>{" "}
              or email us at:{" "}
              <a
                href='mailto:richpaintskenya@gmail.com'
                className='text-red-600 hover:text-red-800'
              >
                richpaintskenya@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorDesignSection;
