import React from "react";
import { Navbar, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import logo from "../Pictures/logo.png";

const Header = () => {
  return (
    <Navbar fluid rounded className="custom-navbar ">
      <div className="flex justify-between items-center  px-4 custom-inner">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">IndTech</span>
        </Navbar.Brand>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="px-4 mr-96">
        <div className=" custom-ul mt-4 flex gap-12  small-screen">
          <Navbar.Link as={Link} to="/" active className="navbar-link">
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} to="/about" className="navbar-link">
            About
          </Navbar.Link>
          <Navbar.Link as={Link} to="/course" className="navbar-link">
            Courses
          </Navbar.Link>
          <Navbar.Link as={Link} to="/feeStructure" className="navbar-link">
            Fees Structure
          </Navbar.Link>
          <Navbar.Link as={Link} to="/contact" className="navbar-link">
            Contact
          </Navbar.Link>
       
          <Dropdown label={<span style={{ fontSize: '130%' }}> Admission </span>} inline>
            <Dropdown.Item as={Link} to="/admission-criteria" className="text-lg">Admission Criteria</Dropdown.Item>
            <Dropdown.Item as={Link} to="/admission" className="text-lg">Admission Process</Dropdown.Item>
            <Dropdown.Item as={Link} to="/ApplyForAdmission" className="text-lg">Apply</Dropdown.Item>
         
            <Dropdown.Item as={Link} to="/course" className="text-lg">Courses</Dropdown.Item>
          </Dropdown>
          <Navbar.Link as={Link} to="/placement" className="navbar-link">
            Placement
          </Navbar.Link>
          <Dropdown label={<span style={{ fontSize: '130%' }}> Others </span>} inline>
          
            <Dropdown.Item  as={Link} to="/StaffAndFaculty" className="text-lg">Faculty and Staff</Dropdown.Item>
            <Dropdown.Item as={Link} to="/topFAQ" className="text-lg">FAQ</Dropdown.Item>
            <Dropdown.Item as={Link} to="/gallery" className="text-lg">Gallery</Dropdown.Item>
            <Dropdown.Item as={Link} to="/course" className="text-lg">Courses</Dropdown.Item>
            <Dropdown.Item as={Link} to="/testimonials" className="text-lg">Testimonials</Dropdown.Item>
          </Dropdown>
          
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
