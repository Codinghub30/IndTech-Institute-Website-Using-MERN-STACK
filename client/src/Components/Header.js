import React from 'react'
import { Navbar } from "flowbite-react";
import { Link } from 'react-router-dom'
import logo from '../Pictures/logo.png';
import { Dropdown } from "flowbite-react";    


const Header = () => {
  return (
  
    <Navbar fluid rounded className='custom-navbar'>
      <div className='mt-4'>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">IndTech</span>
      </Navbar.Brand>
      </div>
      <Navbar.Toggle />
      <div className='mr-16 mt-4'>
     
      <Navbar.Collapse >
        <Navbar.Link as={Link} to="/"  active className='navbar-link'>
          Home
        </Navbar.Link>
        <Navbar.Link  as={Link} to="/about" className='navbar-link'>
          About
        </Navbar.Link>
        <Navbar.Link as={Link} to="/course" className='navbar-link'>Courses</Navbar.Link>
        <Navbar.Link as={Link} to="/feeStructure" className='navbar-link'>Fees Structure</Navbar.Link>
        <Navbar.Link as={Link} to="/about" className='navbar-link'>Contact</Navbar.Link>
        <Navbar.Link as={Link} to="/admission" className='navbar-link'>Admission</Navbar.Link>
        <Dropdown label="Others" className="text-lg" inline>
      <Dropdown.Item className="text-lg">Faculty and Staff</Dropdown.Item>
      <Dropdown.Item className="text-lg">Gallery</Dropdown.Item>
      <Dropdown.Item as={Link} to="/course" className="text-lg">Courses</Dropdown.Item>
      </Dropdown>
      </Navbar.Collapse>
         
      </div>
    </Navbar>
  );
}
export default Header
