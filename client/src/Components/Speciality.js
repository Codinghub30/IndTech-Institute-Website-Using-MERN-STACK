import React from 'react';
import { Card } from "flowbite-react";

const Featured = () => {
  return (
    <div className="bg-gray-100 h-fit cursor-pointer">
      <div className="container mx-auto mt-32 py-12 rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900 relative mt-16">
          <span className="line-left absolute left-0 h-0.5 w-12 bg-blue-900"></span>
          What We Provide
          <span className="line-right absolute right-0 h-0.5 w-12 bg-blue-900"></span>
        </h2>

        <div className="grid grid-cols-3 gap-8 mt-20">
          <Card className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <div className="relative">
          
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h5 className="text-white text-xl font-bold z-10">
                  Noteworthy Technology Acquisitions 2021
                </h5>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700">
                Here are the biggest enterprise technology acquisitions of 2021 so
                far, in reverse chronological order.
              </p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
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
                <h5 className="text-white text-xl font-bold z-10">
                  Business Strategies 2021
                </h5>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700">
                Here are the latest business strategies for the year 2021.
              </p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                Read more
              </button>
            </div>
          </Card>

          {/* Card 3 */}
          <Card className="max-w-sm rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <div className="relative">
            
              <div className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h5 className="text-white text-xl font-bold z-10">
                  Innovations in Education 2021
                </h5>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-700">
                Explore the latest innovations in education for the year 2021.
              </p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
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
