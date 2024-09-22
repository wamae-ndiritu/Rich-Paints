import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import EastIcon from "@mui/icons-material/East";
import { Link } from "react-router-dom";

const paints = [
  {
    _id: 1,
    title: "Rich Super Gloss",
    img: "/new/products/super-gloss.png",
    description:
      "Rich Super Gloss is a superior quality protective finish producing a deep gloss finish on properly prepared surfaces. Suitable for use on wood, metal, plaster, wallboards, brickwork and stonework etc., over the appropriate primer and undercoat. Rich Super Gloss is formulated to offer maximum durability in extreme tropical coastal weather conditions.",
  },
  {
    _id: 2,
    title: "Rich Silk Vinyl Emulsion",
    img: "/new/products/silk-vinyl-emulsion.png",
    description:
      "Rich Silk Vinyl Emulsion is a water based paint made from acrylic vinyl copolymer emulsion resin and good quality, light fast pigments. It is designed to give good and durable sheen finish on substrates. Rich Silk Vinyl Emulsion has Easy Clean properties against stains and is therefore ideal to use in kitchens, hospital and heavy traffic areas",
  },
  {
    _id: 3,
    title: "Rich Vinyl Matt Emulsion",
    img: "/new/products/vinyl-matt.png",
    description:
      "Rich Vinyl Matt Emulsion is a top quality matt emulsion which improves stain resistance to allow minimal to zero penetration of normal household liquids e.g.: coffee, tea, ketchup etc, allowing these to be simply cleaned off with water without leaving stains on the surface. Suitable for new and previously painted plaster, cement, brick, stone, soft and hardboard sheets etc. It has exceptional ease of application and dries to a smooth, matt highly washable finish.",
  },
  {
    _id: 4,
    title: "Cover Matt",
    img: "/new/products/cover-matt.png",
    description:
      "Rich Cover Matt possesses excellent obliterating characteristics and is extremely easy to apply. Characteristics: It is high opacity copolymer emulsion paint and it has been added fungicide to inhibit mold growth.",
  },
  {
    _id: 5,
    title: "Wall Master",
    img: "/new/products/wall-master.png",
    description:
      "Rich Wall Master is a cement based wall coating used for both interior and exterior wall cladding. It can be applied as a troweled coat or textured to create designer effects thus providing a beautiful finish.",
  },
  {
    _id: 6,
    title: "Weather Guard",
    img: "/new/products/weather-guard.png",
    description:
      "Rich Weatherguard is a uniquely formulated coating based on an acrylic copolymer emulsion. Weatherguard is highly bound film offers excellent flexibility, toughness and low dust retention properties. been added fungicide to inhibit mold and algae growth.",
  },
  {
    _id: 7,
    title: "Plastic Emulsion",
    img: "/new/products/plastic-emulsion.png",
    description:
      "Plastic emulsion paint is water based wall paint. It is based on acrylic and provides a smooth matte finish to the walls.",
  },
];
export default function PaintsSection() {
  const location = useLocation();
  const path = location ? location.pathname : null;
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (path === "/") {
      setIsHomePage(true);
    }
  }, [path]);

  return (
    <section className='bg-gray-100 pt-12' id='explore-paints'>
      {/* Section Title and Description */}
      <div className='text-center w-full md:w-4/5 mx-auto mb-5'>
        <h1 className='text-4xl font-bold text-indigo-600 mb-4'>
          Explore Our Premium Paint Collection
        </h1>
        <p className='text-lg text-gray-600'>
          Discover our range of high-quality paints, designed for all your
          decorative and protective needs. Whether you're working on interior,
          exterior, or specialty surfaces, we have a solution for you.
        </p>
      </div>

      <div className='w-full md:w-4/5 mx-auto md:p-8'>
        {isHomePage ? (
          <>
            <div
              key={paints[0]._id}
              className={`group flex flex-col md:flex-row items-center justify-center md:flex-row hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Image Section */}
              <div className='w-full md:w-1/2 flex justify-center mx-6 p-8 bg-indigo-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <img
                  src={paints[0].img}
                  alt={paints[0].title}
                  className='w-full h-72 object-contain rounded-lg md:h-80 transition-transform duration-300 hover:scale-105'
                />
              </div>

              {/* Description Section */}
              <div className='w-full md:w-1/2 p-8 md:py-16 md:px-10'>
                <h2
                  className='text-4xl font-semibold text-indigo-500 italic mb-6 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-100'
                  style={{
                    animation: "slideInFromLeft 1.5s ease forwards",
                    opacity: 0,
                  }}
                >
                  {paints[0].title}
                </h2>
                <p
                  className='text-lg leading-relaxed text-gray-700 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-100'
                  style={{
                    animation: "slideInFromLeft 2s ease forwards",
                    animationDelay: "0.5s",
                    opacity: 0,
                  }}
                >
                  {paints[0].description}
                </p>
              </div>
            </div>

            {/* View More Button */}
            <div className='flex justify-center my-4'>
              <Link
                to='/our-paints'
                className='cursor-pointer inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300'
              >
                <h6 className='text-lg font-semibold'>View More</h6>
                <div className='ml-2'>
                  <EastIcon className='text-indigo-600 hover:ml-3 transition-all duration-300' />
                </div>
              </Link>
            </div>
          </>
        ) : (
          paints.map((paint, index) => (
            <div
              key={paint._id}
              className={`group flex flex-col md:flex-row items-center justify-center mb-12 focus-within:shadow-lg hover:shadow-lg transition-shadow duration-300 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              tabIndex={paint._id} // Allow focus via keyboard
            >
              {/* Image Section */}
              <div className='w-full md:w-1/2 flex justify-center mx-6 p-8 bg-indigo-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <img
                  src={paint.img}
                  alt={paint.title}
                  className='w-full h-72 object-contain rounded-lg md:h-80 transition-transform duration-300 hover:scale-105'
                />
              </div>

              {/* Description Section */}
              <div className='w-full md:w-1/2 p-8 md:py-16 md:px-10'>
                <h2 className='text-4xl font-semibold text-indigo-500 italic mb-6 transition-transform duration-300 group-hover:scale-105'>
                  {paint.title}
                </h2>
                <p className='text-lg leading-relaxed text-gray-700 transition-transform duration-300 group-hover:scale-105'>
                  {paint.description}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
