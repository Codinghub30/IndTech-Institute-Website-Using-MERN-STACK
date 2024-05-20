import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="foot bg-teal-500 text-white py-12 2xl:h-96 sm:h-6xl mt-12">
      <div className="container-footer mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="about-footer text-center md:text-left">
            <h4 className=" text-3xl font-bold mb-4">About Us</h4>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit nunc sed ipsum consectetur.</p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-bold mb-4">Quick Links</h4>
            <ul className="list-none p-0 m-0 text-xl">
              <li ><Link to="/" className="text-lg">Home</Link></li>
              <li><Link to="/about" className="text-lg">About</Link></li>
              <li><Link to="/admission" className="text-lg">Admission</Link></li>
              <li><Link to="/placement" className="text-lg">Placement</Link></li>
              <li><Link to="/contact" className="text-lg">Contact Us</Link></li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-3xl font-bold mb-4">Follow Us</h4>
            <div className="social-footer flex items-center space-x-4">
              <a href="#" className="text-lg">Facebook</a>
              <a href="#" className="text-lg">Twitter</a>
              <a href="#" className="text-lg">Instagram</a>
            </div>
          </div>
          <div className="contact-footer text-center md:text-left">
            <h4 className="text-3xl font-bold mb-4">Contact Us</h4>
            <p className="text-lg">Address: AT & P.O.: PURBAKOTE, P.S.: KORAI, DIST: JAJPUR (ODISHA), PIN: 755022
</p>
            <p className="text-lg">Email: indtechins@gmail.com</p>
            <p className="text-lg">Phone:   +91 7205664231; <br/>
                                    Phone: +91 9643922840
</p>
          </div>
        </div>
      </div>
      <hr className="mt-28 border-white" />
      <div className="text-center text-sm mt-4">© {new Date().getFullYear()} IndTech Education and Technical Institute. All rights reserved.</div>
      <div className="text-center text-sm mt-2">Website developed by Anup Kumar Chakra</div>
    </footer>
  );
}

export default Footer;
