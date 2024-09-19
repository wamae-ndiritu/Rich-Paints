import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { ArrowLeft, ArrowRight, Close } from "@mui/icons-material";

const projects = [
  { id: 1, image: "/Images/projects/completed-2.jpeg" },
  { id: 2, image: "/Images/projects/completed-6.jpeg" },
  // Add more project images as needed
];

const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setSelectedImage(projects[(currentIndex + 1) % projects.length].image);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
    setSelectedImage(
      projects[(currentIndex - 1 + projects.length) % projects.length].image
    );
  };

  return (
    <div className='py-12 bg-gray-100' id="our-projects">
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-indigo-600 mb-4'>
              Our Projects
            </h2>
            </div>
        {/* Projects Grid */}
        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className='relative cursor-pointer'
              onClick={() => handleImageClick(project.image, index)}
            >
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className='w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105'
              />
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50'>
            <div className='bg-white p-4 rounded-lg mx-auto relative'>
              <IconButton
                onClick={handleCloseModal}
                className='absolute float-right'
                style={{ color: "black" }}
              >
                <Close />
              </IconButton>
              <img
                src={selectedImage}
                alt='Selected'
                className='w-[800px] h-[500px] object-contain rounded-lg'
              />
              <div className='flex justify-between'>
                <IconButton
                  onClick={handlePrevious}
                  className='absolute left-0 top-0 bottom-0 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700'
                  style={{ color: "black" }}
                >
                  <ArrowLeft />
                </IconButton>
                <IconButton
                  onClick={handleNext}
                  className='bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700'
                  style={{ color: "black" }}
                >
                  <ArrowRight />
                </IconButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsSection;
