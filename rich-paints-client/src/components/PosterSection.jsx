import React, { useState } from "react";

const posters = [
  { id: 1, image: "/new/posters/poster-1.jpeg", title: "Poster 1" },
  { id: 2, image: "/new/posters/poster-2.jpeg", title: "Poster 2" },
  { id: 3, image: "/new/posters/poster-3.jpeg", title: "Poster 3" },
  { id: 4, image: "/new/posters/poster-4.jpeg", title: "Poster 4" },
  { id: 5, image: "/new/posters/poster-5.jpeg", title: "Poster 5" },
  { id: 6, image: "/new/posters/poster-6.jpeg", title: "Poster 6" },
  { id: 7, image: "/new/posters/poster-7.jpeg", title: "Poster 7" },
  { id: 8, image: "/new/posters/poster-8.jpeg", title: "Poster 8" },
  { id: 9, image: "/new/posters/poster-9.jpeg", title: "Poster 9" },
  { id: 10, image: "/new/posters/poster-10.jpeg", title: "Poster 10" },
  { id: 11, image: "/new/posters/poster-11.jpeg", title: "Poster 11" },
];

const PosterSection = () => {
  const [selectedPoster, setSelectedPoster] = useState(null);

  const handleOpenModal = (poster) => {
    setSelectedPoster(poster);
  };

  const handleCloseModal = () => {
    setSelectedPoster(null);
  };

  return (
    <section id='gallery' className='bg-gray-100 py-16'>
      <div className='container mx-auto px-6 md:px-12'>
        <h2 className='text-3xl font-bold text-gray-900 mb-3 text-center'>
          Spotlight on Social Moments: Our Top Posters
        </h2>
        <p className="text-gray-600 text-sm py-4">
          Explore a curated collection of our most eye-catching and impactful
          posters from various social media campaigns. Each poster captures the
          essence of our brand's message and creativity, showcasing our standout
          moments and engaging visuals. Click on any poster to view it in detail
          and get inspired by our creative journey!
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {posters.map((poster) => (
            <div
              key={poster.id}
              className='bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105'
              onClick={() => handleOpenModal(poster)}
            >
              <img
                src={poster.image}
                alt={poster.title}
                className='w-full h-48 object-cover'
              />
            </div>
          ))}
        </div>
      </div>

      {selectedPoster && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
          onClick={handleCloseModal}
        >
          <div
            className='bg-white rounded-lg overflow-hidden max-w-4xl w-full relative'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className='absolute top-2 right-2 text-gray-600 text-2xl'
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              src={selectedPoster.image}
              alt={selectedPoster.title}
              className='w-full h-auto'
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default PosterSection;
