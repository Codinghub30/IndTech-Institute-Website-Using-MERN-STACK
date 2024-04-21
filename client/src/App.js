import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Course from './Components/Courses/MainSection';
import { Routes, Route } from 'react-router-dom'; 
import MainPage from './Components/FeesStructure/MainPage';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}  />
      <Route path="/course" element={<Course />}  />
      <Route path="/feeStructure" element={<MainPage />}  />
    
    </Routes>

  
    
    </>
  );
}

export default App;
