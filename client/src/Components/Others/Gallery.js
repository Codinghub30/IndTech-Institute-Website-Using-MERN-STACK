import React from "react";
import { Carousel } from "flowbite-react";
import Header from "../Header";
import Footer from "../Footer";
import admissionImg from "../../Pictures/admissionCriteria.jpg";
import img1 from "../../Pictures/img1.jpg";
import img2 from "../../Pictures/img2.jpg";
import img3 from "../../Pictures/img3.jpg";
import img4 from "../../Pictures/img4.jpg";
import img5 from "../../Pictures/img5.jpg";
import img6 from "../../Pictures/img6.jpg";
import img9 from "../../Pictures/img9.jpg";
import img10 from "../../Pictures/img10.jpg";
import admission from "../../Pictures/admission.jpg";
import LeftSidebar from "../LeftSidebar";

const Gallery = () => {
  return (
    <div>
      <Header />

      <div className="container-gallery relative">
        <img
          src={img5}
          alt="Admission Image"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 h-96">
          <h1 className="text-3xl font-bold text-white">Gallery</h1>
        </div>
      </div>
      <div className="carousel-container">
  
      <div className="carousel1 mt-56 ml-8 h-96">
        
        <Carousel>
          <img src={img5} alt="..." />
          <img src={img4} alt="..." />
          <img src={img3} alt="..." />
          <img src={img5} alt="..." />
          <img src={img10} alt="..." />
          <img src={admission} alt="..." />
          <img src={img1} alt="..." />
        </Carousel>
      </div>
      <div className="carousel2 ml-8 h-96">
        <Carousel>
          <img src={img6} alt="..." />
          <img src={img2} alt="..." />
          <img src={img3} alt="..." />
          <img src={img6} alt="..." />
          <img src={img9} alt="..." />
          <img src={admission} alt="..." />
        </Carousel>
      </div>

      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
