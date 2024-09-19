import React from "react";

const paints = [
  {
    _id: 0,
    title: "Rich Super Gloss",
    img: "/new/products/super-gloss.png",
    description:
      "Rich Super Gloss is a superior quality protective finish producing a deep gloss finish on properly prepared surfaces. Suitable for use on wood, metal, plaster, wallboards, brickwork and stonework etc., over the appropriate primer and undercoat. Rich Super Gloss is formulated to offer maximum durability in extreme tropical coastal weather conditions.",
  },
  {
    _id: 1,
    title: "Rich Silk Vinyl Emulsion",
    img: "/new/products/silk-vinyl-emulsion.png",
    description:
      "Rich Silk Vinyl Emulsion is a water based paint made from acrylic vinyl copolymer emulsion resin and good quality, light fast pigments. It is designed to give good and durable sheen finish on substrates. Rich Silk Vinyl Emulsion has Easy Clean properties against stains and is therefore ideal to use in kitchens, hospital and heavy traffic areas",
  },
  {
    _id: 2,
    title: "Rich Vinyl Matt Emulsion",
    img: "/new/products/vinyl-matt.png",
    description:
      "Rich Vinyl Matt Emulsion is a top quality matt emulsion which improves stain resistance to allow minimal to zero penetration of normal household liquids e.g.: coffee, tea, ketchup etc, allowing these to be simply cleaned off with water without leaving stains on the surface. Suitable for new and previously painted plaster, cement, brick, stone, soft and hardboard sheets etc. It has exceptional ease of application and dries to a smooth, matt highly washable finish.",
  },
  {
    _id: 3,
    title: "Rich Sanding Sealer",
    img: "/new/products/silk-vinyl-emulsion.png",
    description:
      "Rich Sanding sealer can be used on bare, unstained floors, doors, furniture and cabinets prior to applying either an oil-based or a water-based clear finish. It is designed as a base coat that will dry quickly, seal the pores, and sand easily with fine sandpaper to create an ultra-smooth foundation.",
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
    title: "Nitrocellulose (NC)",
    img: "/new/products/nitrocellulose.png",
    description:
      "NC is a highly flammable, known to quickly ignite and explosively burns if a heat source is added to it, the vapor from the nitrocellulose along with the oxygen in the air will catch fire at low temperature as low as 13°C. Keep away from any form of fire",
  },
  {
    _id: 8,
    title: "Plastic Emulsion",
    img: "/new/products/plastic-emulsion.png",
    description:
      "Plastic emulsion paint is water based wall paint. It is based on acrylic and provides a smooth matte finish to the walls.",
  },
];
;

export default function PaintsSection() {
  return (
    <section className='bg-gray-100 py-12'>
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
        {paints.map((paint, index) => (
          <div
            key={paint._id}
            className={`flex flex-col md:flex-row items-center justify-center mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image Section */}
            <div className='w-full md:w-1/2 flex justify-center mx-6 p-6 bg-indigo-200 rounded-lg'>
              <img
                src={paint.img}
                alt={paint.title}
                className='w-full md:h-56 object-contain rounded-lg'
              />
            </div>

            {/* Description Section */}
            <div className='w-full md:w-1/2 p-6 md:py-12 md:px-6'>
              <h2 className='text-3xl font-normal text-indigo-400 italic mb-4'>
                {paint.title}
              </h2>
              <p className='text-lg leading-relaxed'>{paint.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

