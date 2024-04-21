import React from 'react';

const FeesStructure = ({ courses }) => {
  return (
    <div className="fees-structure ml-0">
      <h2 className="fees-title text-4xl font-bold text-center mb-12 text-blue-900 relative mt-16">
        <span className="line-left absolute left-0 h-0.5 w-12  bg-blue-900"></span>
        Complete Fees Structure
        <span className="line-right absolute right-0 h-0.5  bg-blue-900"></span>
      </h2>
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
