import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-teal-500 text-white py-12 h-96 mt-24 ">
      <div className="container mx-auto mt-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0 text-3xl">
            <h4 className="text-3xl font-bold mb-4">About Us</h4>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit nunc sed ipsum consectetur.</p>
          </div>
          <div className="mb-8 md:mb-0">
            <h4 className="text-3xl font-bold mb-4">Quick Links</h4>
            <ul className="list-none p-0 m-0">
              <li><Link to="/" className="text-sm">Home</Link></li>
              <li><Link to="/about" className="text-sm">About</Link></li>
              <li><Link to="/services" className="text-sm">Services</Link></li>
              <li><Link to="/contact" className="text-sm">Contact</Link></li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 text-3xl">

            <h4 className="text-3xl font-bold mb-4 ">Follow Us</h4>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-lg">Facebook</a>
              <a href="#" className="text-lg">Twitter</a>
              <a href="#" className="text-lg">Instagram</a>
            </div>
          </div>
          <div>
            <h4 className="text-3xl font-bold mb-4">Contact Us</h4>
            <p className="text-lg">123 Street, City Name</p>
            <p className="text-lg">Email: example@example.com</p>
            <p className="text-lg">Phone: +1234567890</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
