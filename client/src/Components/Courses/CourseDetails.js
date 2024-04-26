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
    return <div>Course not found</div>;
  }

  return (
    <div>
      <Header />

      <div className="">
        <img
          src={course.image}
          alt="Admission Image"
          className=""
          style={{ width: "83vw", height: "44vh", marginLeft: "8%" }}
        />

        <div className=" overlay-text absolute bottom-4xl w-full bg-black  text-white text-center py-4">
          <h1 className="text-3xl font-bold">{course.title}</h1>
        </div>
        <div className="flex ml-24 mt-20 mr-44">
          <LeftSidebar />
          <div className="flex flex-col ml-48 mt-16 mr-20 border border-gray-300 p-6 rounded-lg">
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
