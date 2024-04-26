import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Course from './Components/Courses/MainSection';
import { Routes, Route } from 'react-router-dom'; 
import MainPage from './Components/FeesStructure/MainPage';


import { motion } from 'framer-motion';
import AdmissionMain from './Components/Admission/AdmissionMain';
import AdmissionCriteria from './Components/Admission/AdmissionCriteria';

import SidebarTopFAQ from './Components/SidebarTopFAQ';
import Gallery from './Components/Others/Gallery';
import FacultyAndStaff from './Components/Others/FacultyAndStaff';
import Apply from './Components/Admission/Apply';
import Blog from './Components/Others/Blog';
import CourseDetails from './Components/Courses/CourseDetails';
import Contact from './Components/Contact';
import Placement from './Components/Placements/Placement';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}  />
      <Route path="/course" element={<Course />}  />
      <Route path="/courses/:id" element={   <CourseDetails />}/>
       
      <Route path="/contact" element={<Contact />}  />

      <Route path="/feeStructure" element={<MainPage />}  />
     
      <Route path="/topFAQ" element={<SidebarTopFAQ />}  />
      <Route path="/admission" element={<AdmissionMain />}  />
      <Route path="/admission-criteria" element={<AdmissionCriteria />}  />
      <Route path="/gallery" element={<Gallery />}  />
      <Route path="/StaffAndFaculty" element={<FacultyAndStaff/>}  />
      <Route path="/ApplyForAdmission" element={<Apply/>}  />
      <Route path="/placement" element={<Placement/>}  />
    
    </Routes>

  
    
    </>
  );
}

export default App;
