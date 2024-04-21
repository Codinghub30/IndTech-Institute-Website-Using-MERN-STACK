import React from 'react';
import { Card } from "flowbite-react";

const Featured = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto mt-20 py-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900 relative mt-8">
          <span className="line-left absolute left-0 h-0.5 w-12 bg-blue-900"></span>
          Featured Courses
          <span className="line-right absolute right-0 h-0.5 w-12 bg-blue-900"></span>
        </h2>
        <div className="grid grid-cols-3 gap-8 mt-32">
          {/* First Card */}
          <div className="col-span-3 md:col-span-1">
            <Card className="max-w-full rounded-lg overflow-hidden shadow-md ">
              <div className="relative">
                <img
                  className="w-full h-64 object-cover object-center rounded-t-lg"
                  src="https://images.unsplash.com/photo-1571563227108-df256fcfb0df"
                  alt="Technology"
                />
                <div className="absolute inset-0 bg-black opacity-25 rounded-t-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h5 className="text-white text-xl font-bold z-10">
                    Noteworthy Technology Acquisitions 2021
                  </h5>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                  Read more
                </button>
              </div>
            </Card>
          </div>

          {/* Second Card */}
          <div className="col-span-3 md:col-span-2">
            <Card className="max-w-full rounded-lg overflow-hidden shadow-md ">
              <div className="relative">
                <img
                  className="w-full h-64 object-cover object-center rounded-t-lg"
                  src="https://images.unsplash.com/photo-1518998057913-92bf8cc2c45b"
                  alt="Business"
                />
                <div className="absolute inset-0 bg-black opacity-25 rounded-t-lg"></div>
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
          </div>

          {/* Third Card */}
          <div className="col-span-3 md:col-span-3">
            <Card className="max-w-full rounded-lg overflow-hidden shadow-md ">
              <div className="relative">
                <img
                  className="w-full h-64 object-cover object-center rounded-t-lg"
                  src="https://images.unsplash.com/photo-1519166081253-91ee17de2f29"
                  alt="Education"
                />
                <div className="absolute inset-0 bg-black opacity-25 rounded-t-lg"></div>
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
    </div>
  );
}

export default Featured;
