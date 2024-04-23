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


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}  />
      <Route path="/course" element={<Course />}  />
      <Route path="/feeStructure" element={<MainPage />}  />
      <Route path="/topFAQ" element={<SidebarTopFAQ />}  />
      <Route path="/admission" element={<AdmissionMain />}  />
      <Route path="/admission-criteria" element={<AdmissionCriteria />}  />
      <Route path="/gallery" element={<Gallery />}  />
      <Route path="/StaffAndFaculty" element={<FacultyAndStaff/>}  />
      <Route path="/ApplyForAdmission" element={<Apply/>}  />
    
    </Routes>

  
    
    </>
  );
}

export default App;
