import React, { useEffect, useState } from 'react';
import StudentProfile from './StudentProfile';
import CompanyLogo from './CompanyLogo';
import Footer from '../../Components/Footer';
import { Card } from "flowbite-react";
import placement from  "../../Pictures/placement3.jpg"
import Header from '../Header';

const Placement = () => {
    const [placementData, setPlacementData] = useState([]);

    useEffect(() => {
        // Simulate fetching placement data from an API
        const fetchData = async () => {
            // Dummy data - Replace with actual API call
            const dummyPlacementData = [
                {
                    id: 1,
                    name: 'John Doe',
                    company: 'XYZ Industries',
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    company: 'XYZ Industries',
                },
                {
                  id: 3,
                  name: 'Jane Smith',
                  company: 'XYZ Industries',
              },
               {
                id: 4,
                name: 'Jane Smith',
                company: 'XYZ Industries',
            }
            ];
            setPlacementData(dummyPlacementData);
        };

        fetchData();
    }, []);

    return (
      <div className="placement-page">
        <Header />
                <img
          src={placement}
          alt="Admission Image"
          className="" style={{width:"44vw", height:"39vh", marginLeft: "28%"}}
        />
        
        <div className=" overlay-text absolute bottom-4xl w-full bg-black  text-white text-center py-4">
          <h1 className="text-3xl font-bold">Placement</h1>
        </div>
          <div className="placement-content flex mt-44 h-96 ml-16 gap-32">
              {placementData.map((student) => (
                   <Card
                   className="max-w-sm"
                   imgAlt="Meaningful alt text for an image that is not purely decorative"
                   imgSrc="/images/blog/image-1.jpg"
                 >
                   <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {student.name}
                   </h5>
                   <p className="font-normal text-gray-700 dark:text-gray-400">
                    {student.company}
                   </p>
                 </Card>
              ))}
          </div>
          <Footer />
          <div className="company-logos">
              <h2>Our Partner Companies</h2>
              <div className="company-logo-list">
                  {placementData.map((student) => (
                      <CompanyLogo key={student.company.id} company={student.company} />
                  ))}
              </div>
          </div>
      </div>
  );
}

export default Placement;
