import React from 'react';
import CourseList from './CourseList';
import Courses from './Courses'; 
import Header from '../Header';
import Footer from '../Footer';

const MainSection = () => {
    return (
        <div>
            <Header />
            <CourseList courses={Courses} /> {/* Pass the courses data as a prop */}
            <Footer />
        </div>
    );
}

export default MainSection;
