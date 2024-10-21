import React from 'react';
import bgImage from '../assets/Redjeep.jpg'; // Adjust the path as needed

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Optional Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-50">
        <div className="flex flex-col items-center justify-center mb-48">
          <p className="text-lg mb-2">Hyderabad's finest collection of used cars</p>
          <h1 className="text-4xl font-bold">Find Your Perfect Vehicle Online</h1>
        </div>
      </div>

      {/* Footer Section with Dropdowns */}
      <div className="h-16 md:h-20 lg:h-24 absolute bottom-0 w-full bg-cyan-950 text-white px-2 py-4">
        <div className="container mx-auto flex flex-wrap justify-center space-x">
          {/* Dropdowns */}
          <select className="bg-cyan-950 px-2 py-2 rounded-md text-xs">
            <option>Explore By</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>

          <select className="bg-cyan-950 px-2 py-2 rounded-md text-xs">
            <option>Price Range</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>

          <select className="bg-cyan-950 px-2 py-2 rounded-md text-xs">
            <option>Make and Model</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>

          <select className="bg-cyan-950 px-2 py-2 rounded-md text-xs">
            <option>Year</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>

          <select className="bg-cyan-950 px-2 py-2 rounded-md text-xs">
            <option>Fuel</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>

          <select className="bg-cyan-950 px-2 py-2 rounded-md text-xs">
            <option>KM Driven</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>

          <select className="bg-cyan-950 px-2 py-2 rounded-md text-xs">
            <option>Body Type</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>

          <select className="bg-cyan-950 px-2 py-2 rounded-md text-xs">
            <option>Transmission</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>

          <input
            type="text"
            placeholder="Search cars"
            className="bg-cyan-950 px-2 py-2 rounded-md focus:outline-none text-black text-xs"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
