import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import admissionImg from '../../Pictures/admissionCriteria.jpg'
import LeftSidebar from '../LeftSidebar';


function AdmissionPage() {


  const admissionSteps = [
    "Step 1: open the Apply page or Click on this link ",
    "Step 2: Fill up the form",
    "Step 3: Select the course",
    "Step 4: After Filling the form Click on the Submit Button",
    "Step 5: After we get your Form details we will contact you back",
    "Step 6: Otherwise Click on the contact page ",
    "Step 7: Call us for admission",
  ];
  return (
    <div>
        <Header/>
        <img
          src={admissionImg}
          alt="Admission Image"
          className="" style={{width:"100vw", height:"44vh"}}
        />
        <div className=" overlay-text absolute bottom-4xl w-full bg-black  text-white text-center py-4 mt-8">
          <h1 className="text-3xl font-bold">Admission Process</h1>
        </div>
  <div className=' flex ml-44 mt-16'>
    <div className='sidebar-admissionProcess'>
        <LeftSidebar/>

    </div>
        {/* Right Box - Admission Steps */}
        <div className="admission-process bg-white shadow-md rounded px-8 py-6 mb-8 ml-32">
            <h2 className="text-xl font-bold mb-4">Admission Steps</h2>
            <div className="list-decimal pl-6 text-xl">
              {/* Render admission steps */}
              {admissionSteps.map((step, index) => (
                <li key={index} className="mb-2">{step}</li>
              ))}
            </div>
        
        </div>
        
        </div>
<Footer/>
    </div>
  );
}

export default AdmissionPage;
