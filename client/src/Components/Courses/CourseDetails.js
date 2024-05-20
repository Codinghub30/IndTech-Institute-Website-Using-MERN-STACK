import React from "react";
import { useParams } from "react-router-dom";
import Courses from "./Courses";
import Header from "../Header";
import Footer from "../Footer";
import LeftSidebar from "../LeftSidebar";

const CourseDetails = () => {
  const { id } = useParams();
  const course = Courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <div>
      <Header />

      <div className="">
        <img
          src={course.image}
          alt="Admission Image"
          className="course-img"
       
        />

        <div className="overlay-alpha overlay-text absolute bottom-4xl w-full bg-black  text-white text-center py-4">
          <h1 className="text-3xl font-bold">{course.title}</h1>
        </div>
        <div className=" course-content flex ml-24 mt-20 mr-44">
          <div className="sidebar-course">
          <LeftSidebar />

          </div>
          <div className=" container-course flex flex-col ml-0 mt-16 mr-20 border border-gray-300 p-6 rounded-lg" style={{width:"900%"}}>
            <label className="text-2xl font-bold ">Description:</label>
            <p className="mt-4 text-lg">{course.description}</p>
            <div className="bg-gray-100 rounded-md p-4 mt-6">
              <h2 className="text-xl font-bold mb-4">Eligibility:</h2>
              <p className="text-lg">{course.eligibility}</p>
            </div>
            <div className="bg-gray-100 rounded-md p-4 mt-6">
              <h2 className="text-xl font-bold mb-4">Duration:</h2>
              <p className="text-lg">{course.duration}</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetails;
