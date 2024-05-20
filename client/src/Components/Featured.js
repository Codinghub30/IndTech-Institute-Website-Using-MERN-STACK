import React from 'react';
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Featured = () => {
  const courses = [
    {
      id: 1,
      title: 'Diploma In Industrial Safety Management',
      description: 'Technology-aided industrial processes that handle large amounts of energy are primarily focused on safety and protecting workers, equipment, the environment, and society.',
      image: 'https://cache.careers360.mobi/media/article_images/2022/8/29/Diploma-In-Industrial-Safety.webp'
    },
    {
      id: 2,
      title: 'Diploma in Fire and Safety Management',
      description: 'Diploma in Fire and Safety Management is a full-time diploma course, the period of this course can vary from 1 to 2 years (usually one). It is an open course that helps students to get better job opportunities in field as fire and safety officer, health and safety manager.',
      image: 'https://carleton.ca/fse/wp-content/uploads/fse-banner-1.jpg'
    },
    {
      id: 3,
      title: 'IOSH-MS',
      description: 'The IOSH Managing Safely (IOSH-MS) course is designed to provide participants with a comprehensive understanding of health and safety management principles and practices.',
      image: 'https://aztechtraining.com/wp-content/uploads/2023/12/Warehouse-Management-image.jpg'
    }
  ];
  return (
    <div className="bg-white">
      <div className="featured-container mx-auto mt-20 py-20 pl-20">
        <h6 className="text-3xl md:text-4xl text-center text-teal-500 font-bold">
          Featured
        </h6>
        
        <span className="line-left absolute left-0 h-0.5 w-12 text-teal-500"></span>
        <h3 className="text-3xl text-center absolute md:text-5xl font-bold" style={{ width: "12%", left: "46%" }}>
          Courses
        </h3>
        <span className="line-right absolute right-0 h-0.5 w-12 bg-blue-900"></span>
        
        <div className="grid grid-cols-3 gap-8 mt-32">
          
          {courses.map((course, index) => (
            <div key={course.id} className={`col-span-3 md:col-span-${index === 1 ? 2 : 1}`}>
              <Link to={`/courses/${course.id}`}>
              <Card className="max-w-full rounded-lg overflow-hidden shadow-md">
                <div className="relative">
                  <img
                    className="w-full h-64 object-cover object-center rounded-t-lg"
                    src={course.image}
                    alt={course.title}
                  />
                  <div className="absolute inset-0 bg-black opacity-25 rounded-t-lg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h5 className="text-white text-xl font-bold z-10">
                      {course.title}
                    </h5>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">
                    {course.description}
                  </p>
                  <Link to={`/courses/${course.id}`}>
                    <button className="mt-4 border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold py-2 px-4 w-64 h-16">
                      Read more
                    </button>
                  </Link>
                </div>
              </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
