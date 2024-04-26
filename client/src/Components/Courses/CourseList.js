import React from "react";
import { Link } from "react-router-dom";

const CourseList = ({ courses }) => {
  return (
    <div>
      <h2 className="text-5xl font-bold text-center mb-12 text-blue-900 relative mt-16">
        <span className="line-left absolute left-0 h-0.5 w-32 bg-blue-900"></span>
        Courses Offered
        <span className="line-right absolute right-0 h-0.5 w-12 bg-blue-900"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-40 m-44 cursor-pointer">
        {courses.map((course) => (
          <Link to={`/courses/${course.id}`} key={course.id}>
          <div
            key={course.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            <img
              className="w-full h-64 object-cover object-center"
              src={course.image}
              alt={course.title}
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <a
                href={`/courses/${course.id}`}
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
              >
                Learn more
              </a>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
