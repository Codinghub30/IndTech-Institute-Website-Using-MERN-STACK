import React from 'react';
import { Card } from "flowbite-react";

const Featured = () => {
  return (
    <div className="small-speciality bg-gray-100 h-auto md:h-fit cursor-pointer">
    <div className="container mx-auto mt-8 md:mt-32 py-8 md:py-12 rounded-lg ml-4 md:ml-0 ">
      <h2 className="text-teal-500 font-bold text-center text-3xl md:text-5xl mt-8 md:mt-36 relative">
        <span className="side-left absolute left-0 h-0.5 w-6 md:w-12 bg-teal-500 "></span>
        What We Provide
        <span className="side-right absolute right-0 h-0.5 w-6 md:w-12 bg-teal-500"></span>
      </h2>
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-20">
        <Card className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
          <div className="relative">
            <div className="absolute inset-0 bg-black opacity-25"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h5 className="text-white text-base md:text-xl font-bold z-10">
                Noteworthy Technology Acquisitions 2021
              </h5>
            </div>
          </div>
          <div className="p-4 md:p-6">
            <p className="text-gray-700 text-sm md:text-base">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <button className="mt-2 md:mt-4 border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold py-2 px-4 w-full md:w-52 h-12 md:h-16">
              Read more
            </button>
          </div>
        </Card>
  
        {/* Repeat the Card component for additional items */}
        {/* Card 2 */}
        <Card className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
          <div className="relative">
            <div className="absolute inset-0 bg-black opacity-25"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h5 className="text-white text-base md:text-xl font-bold z-10">
                Business Strategies 2021
              </h5>
            </div>
          </div>
          <div className="p-4 md:p-6">
            <p className="text-gray-700 text-sm md:text-base">
              Here are the latest business strategies for the year 2021.
            </p>
            <button className="mt-2 md:mt-4 border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold py-2 px-4 w-full md:w-52 h-12 md:h-16">
              Read more
            </button>
          </div>
        </Card>
  
        {/* Card 3 */}
        <Card className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
          <div className="relative">
            <div className="absolute inset-0 bg-black opacity-25"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h5 className="text-white text-base md:text-xl font-bold z-10">
                Innovations in Education 2021
              </h5>
            </div>
          </div>
          <div className="p-4 md:p-6">
            <p className="text-gray-700 text-sm md:text-base">
              Explore the latest innovations in education for the year 2021.
            </p>
            <button className="mt-2 md:mt-4 border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold py-2 px-4 w-full md:w-52 h-12 md:h-16">
              Read more
            </button>
          </div>
        </Card>
      </div>
    </div>
  </div>
  
  );
}

export default Featured;
