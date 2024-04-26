import React from 'react';
import { Card } from "flowbite-react";
import { motion } from 'framer-motion';
import { fadeIn } from "../Variant";

const Featured = () => {
  return (
    <div className="bg-white">
      <div className="featured-container mx-auto mt-20 py-20 pl-20">

          <h6 className="text-3xl md:text-4xl  text-center text-teal-500 font-bold">
                  Featured
                </h6>
                
          <span className="line-left absolute left-0  h-0.5 w-12 text-teal-500"></span>
          <h3 className="text-3xl text-center absolute  md:text-5xl font-bold" style={{width:"12%", left:"46%"}}>
               Courses
                </h3>
          <span className="line-right absolute right-0 h-0.5 w-12 bg-blue-900"></span>
               
        <div className="grid grid-cols-3 gap-8 mt-32">  
          {/* First Card */}
          <div
           className="col-span-3 md:col-span-1">
            <Card className="max-w-full rounded-lg overflow-hidden shadow-md ">
              <div className="relative">
                <img
                  className="w-full h-64 object-cover object-center rounded-t-lg"
                  src="https://cache.careers360.mobi/media/article_images/2022/8/29/Diploma-In-Industrial-Safety.webp"
                  alt="Technology"
                />
                <div className="absolute inset-0 bg-black opacity-25 rounded-t-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h5 className="text-white text-xl font-bold z-10">
                  Diploma In Industrial Safety Management
                  </h5>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">
                Technology-aided industrial processes that handle large amounts of energy are primarily focused on safety and protecting workers, equipment, the environment, and society. Hence, a well-engineered safety system is essential and this is the purpose of industrial safety. Industrial safety courses can be pursued at many levels after completing 12th with any stream (Science, Commerce, Arts).This is a one-year Industrial safety diploma programme that is offered full-time. The goal of this diploma programme is to provide students with knowledge, skills, and awareness about workplace safety. It also trains them to handle situations involving failures of safety measures.
                </p>
                <button className="mt-4 border-2 border-teal-500 text-teal-500  hover:bg-teal-500 hover:text-white  font-semibold py-2 px-4 w-64 h-16">
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
                  src="https://carleton.ca/fse/wp-content/uploads/fse-banner-1.jpg"
                  alt="Business"
                />
                <div className="absolute inset-0 bg-black opacity-25 rounded-t-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h5 className="text-white text-xl font-bold z-10">
                  Diploma in Fire and Safety Management
                  </h5>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">
                Diploma in Fire and Safety Management is a full-time diploma course, the period of this course can vary from 1 to 2 years (usually one). It is an open course that helps students to get better job opportunities  in field as fire and safety officer, health and safety manager. For pursuing Diploma in Fire and Safety Management, Candidates need a qualifying certificate for the 12th-grade examination. Its eligibility guidelines are simple, as compared to other courses. You can go for this course irrespective of the background you had in your senior secondary, that is, science or arts or commerce.',
                </p>
                <button className="mt-4 border-2 border-teal-500 text-teal-500  hover:bg-teal-500 hover:text-white  font-semibold py-2 px-4 w-64 h-16">
                  Read more
                </button>
              </div>
            </Card>
          </div>

          {/* Third Card */}
          <div    className="col-span-3 md:col-span-3">
            <Card className="max-w-full rounded-lg overflow-hidden shadow-md ">
              <div className="relative">
                <img
                  className="w-full h-64 object-cover object-center rounded-t-lg"
                  src="https://aztechtraining.com/wp-content/uploads/2023/12/Warehouse-Management-image.jpg"
                  alt="Education"
                />
                <div className="absolute inset-0 bg-black opacity-25 rounded-t-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h5 className="text-white text-xl font-bold z-10">
                  Diploma in Material Management
                  </h5>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">
                Materials Management is the study of managing raw material, optimum production and delivery of the product to the customer. The course content includes aspects, of logistics, supply chain management, storage management, risk management etc. Courses in Material Management are specialized to give education in handling materials in the inventory of a production or manufacturing company.Since material management is a specialized degree course, it is offered in limited courses like PG Diploma, Diploma, and Certificate courses etc. The duration of diploma courses varies from 1 to 2 years depending upon the institutions that offer the courses.
                </p>
                <button className="mt-4 border-2 border-teal-500 text-teal-500  hover:bg-teal-500 hover:text-white  font-semibold py-2 px-4 w-64 h-16">
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
