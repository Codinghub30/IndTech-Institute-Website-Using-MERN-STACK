import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import faculty from "../../Pictures/facultystaff.png";
import lecture1 from "../../Pictures/lecture1.jpg";
import lecture2 from "../../Pictures/lecture2.jpg";
import director from "../../Pictures/director.png.jpg";
import LeftSidebar from "../LeftSidebar";

const FacultyAndStaff = () => {
  // Sample data for faculty and staff
  const facultyAndStaff = [
    {
      id: 1,
      image: lecture1,
      name: "Shri Raju Pandit",
      position: "Professor",
      qualification: [
        "B.Sc. from Jai Prakash University,",
        "Bihar PDIS is Pursuing from BTE-UPNEBOSH IGC Pursuing.",
        "Diploma in Industrial Safety Management From Patna in 2014",
        " IOSH Managing Safely from NIST Pvt. Ltd. Delhi.in 2020. Qualified Rope Access Level 1 (Work At Height Training), From IRATA International in 2017.",
        "Basic First Aid and CPR AED Training from Mediclear India ",
      ],
      experience:
        "7 Years of experience as  Industrial  Safety Trainer at Various leading company such as Tata Projects, Vodafone India Ltd., Jindal Steel Ltd. etc.And, 02Years of experience in the field of SHE (Safety, Health & Environment",
    },

    {
      id: 2,
      name: "Shri Akshya Kumar Rana",
      image: lecture2,
      position: "Professor",
      qualification: [
        "Bse- SSVM, Jajpur Road (2003) ",
        "Chse- VN College, Jajpur Road (2005) ",
        "Bsc. (Physics) – VN College, Jajpur Road (2008) ",
        " B.tech (Mechanical) – SMIT, Berhampur (2012) ",
        "Basic First Aid and CPR AED Training from Mediclear India ",
        "M.tech (Power Plant) – BCET, Balasore (2017) ",
      ],
      experience:
        "Having 18yrs of teaching experience in engineering college like KIET, Jajpur etc.",
    },
    {
      id: 3,
      name: "Shri Shashi Kumar",
      image: director,
      position: "Director",
      qualification: [
        "B.SC. (Electronics Hon’s) from A. N. College, Patna, Magadh University, Bodh Gaya, Bihar ",
        "Diploma in Industrial Safety Management from Patna University, Bihar  ",
        "IOSH-MS (IOSH – Managing Safely) from U.K",
        "NEBOSH-IGC (NEBOSH – International General Certificate) from U.K.",
        "FIRST AID from National Safety Council (NSC), Odisha Chapter ",
        "INTERNAL AUDITOR from RLI (Regional Labour Institute), Kolkata",
      ],
      experience:
        "15Years of Industrial Experience in the field of SHE (Safety, Health & Environment",
    },
  ];

  return (
    <div>
      <Header />
      <div  className="faculty-img">

      <img
        src={faculty}
        alt="Faculty and Staff Image is not loaded"
       className="img-facul"
        
      />
      </div>

      <div className="faculty-line overlay-text absolute bottom-4xl w-full bg-black  text-white text-center py-4">
        <h1 className="text-3xl font-bold">Faculty and Staff</h1>
      </div>
      <div className="flex mt-16 ml-16">
        <div className="sidebar-faculty">

        <LeftSidebar />
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyAndStaff.map((member) => (
              <div
                key={member.id}
                className="bg-white  shadow-md rounded-lg p-6"
              >
                <img src={member.image} />
                <h2 className="text-2xl font-bold mb-4">{member.name}</h2>
                <p className="text-gray-700 mb-2 text-80">{member.position}</p>
                <div className="text-lg">
                  <label className="font-bold text-lg">Qualification:</label>
                  {member.qualification && member.qualification.length > 0 && (
                    <ul>
                      {member.qualification.map((qual, index) => (
                        <li key={index}>{qual}</li>
                      ))}
                    </ul>
                  )}
                  <label className="font-bold text-lg">Experience:</label>
                  <p className="text-gray-700 mb-2 text-80">
                    {member.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FacultyAndStaff;
