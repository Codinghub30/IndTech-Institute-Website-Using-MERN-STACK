import React from 'react';

const FeesStructure = ({ courses }) => {
  return (
    <div className="fees-structure ml-0">
     <h3 className=" text-center text-4xl">
      <span className="line-left absolute left-0 h-0.5 w-32 bg-blue-900"></span>
        Complete 
        <span className="line-right absolute right-0 h-0.5 w-12 bg-blue-900"></span>
      </h3>
      
      <h1 className=" text-teal-500 font-bold text-center mt-4 text-5xl"> Fees Structure</h1>
      <div className="fees-table ml-0 mt-24 grid grid-cols-4 cursor-pointer">
        <div className="fees-header fees-cell">Course Name</div>
        <div className="fees-header fees-cell">Duration</div>
        <div className="fees-header fees-cell">Fees</div>
        <div className="fees-header fees-cell">Eligibility</div>
        {courses.map(course => (
          <React.Fragment key={course.id}>
            <div className="fees-cell hover:bg-gray-200">{course.title}</div>
            <div className="fees-cell hover:bg-gray-200">{course.duration}</div>
            <div className="fees-cell hover:bg-gray-200">{course.fees}</div>
            <div className="fees-cell hover:bg-gray-200">{course.eligibility}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default FeesStructure;
