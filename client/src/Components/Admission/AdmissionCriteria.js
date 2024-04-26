import React from "react";
import Header from "../Header";
import Footer from "../Footer";
// import LeftSidebar from '../LeftSidebar';
import LeftSidebar from "../LeftSidebar";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import admissionImg from "../../Pictures/admissionCriteria.jpg"



function AdmissionCriteria() {
  
  const admissionCriteria = [
    { category: "Dip. in Industrial Safety Management", details: "ITI, +2, +3, Diploma & B.E/B. Tech (Any Stream)" },
    { category: "Dip. in Fire & Safety Management", details: "ITI, +2, +3, Diploma & B.E/B. Tech (Any Stream)" },
    {
      category: "NEBOSH-IGC (International General Certificate)",
      details: "Basic English",
    },
    {
      category: "NEBOSH-RAW (Risk Assessment at Work)",
      details: "Basic English",
    },
    {
      category: "IOSH-MS",
      details: "Basic English",
    },
    {
      category: "First Aid  ",
      details: "10th board",
    },
    {
      category: "Scaffolding – Inspector & Erector",
      details: "Feild Experience",
    },
    {
      category: "BBS (Behaviour Based Safety)",
      details: "Feild Experience",
    },
    {
      category: "Certificate Course in Industrial Safety Management",
      details: "Feild Experience",
    }, 
     {
      category: "Certificate Course in Fire & Safety Management",
      details: "Feild Experience",
    },  {
      category: "Diploma in Material Management",
      details: "ITI, +2, +3 (Any Stream)",
    },  {
      category: "Lab Technician",
      details: "+2, +3 (Science -Chemistry) ",
    },  {
      category: "Sponsored Course – Fitter, Welder, Gas Cutter, Electrician, AC Technician etc.",
      details: "Feild Experience",
    }, {
      category: "5S Methodology",
      details: "Feild Experience",
    },
  ];

  return (
    <div >

      <Header />
      <img
          src={admissionImg}
          alt="Admission Image"
          className="" style={{width:"100vw", height:"44vh"}}
        />
        
        <div className=" overlay-text absolute bottom-4xl w-full bg-black  text-white text-center py-4">
          <h1 className="text-3xl font-bold">Admission Criteria</h1>
        </div>
      <div className=" admission-criteria min-h-screen bg-gray-100 flex  gap-60 ">

        <div
          className=" admission-link flex flex-col justify-between  w-1/5 py-4 px-2  ml-44"
          style={{ height: "44vh", width:"17%", marginTop:"90px" }}
     >
          
          <div className="admisssion-link2">
          {/* <h2 className="text-center text-2xl">Heading</h2> */}

         <LeftSidebar />
         
        </div>
        </div>
        <div className="admission-content bg-white shadow-md rounded px-8 pt-6 pb-8 w-full md:max-w-3xl" style={{height:"140%"}}>
       
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Details</th>
              </tr>
            </thead>
            <tbody>
              {admissionCriteria.map((criteria, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{criteria.category}</td>
                  <td className="border px-4 py-2">{criteria.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="" style={{marginTop:"-80px"}}>
      {/* <img src={admission} alt="img" /> */}
      <Footer/>
      </div>
     
    </div>
  );
}

export default AdmissionCriteria;
