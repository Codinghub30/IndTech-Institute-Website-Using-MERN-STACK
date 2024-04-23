import React from "react";
import { Carousel } from "flowbite-react";
import Header from "../Header";
import Footer from "../Footer";
import admissionImg from "../../Pictures/admissionCriteria.jpg";
import img2 from "../../Pictures/img2.jpg";
import img3 from "../../Pictures/img3.jpg";
import img4 from "../../Pictures/img4.jpg";
import img5 from "../../Pictures/img5.jpg";
import img6 from "../../Pictures/img6.jpg";
import admission from "../../Pictures/admission.jpg"
import LeftSidebar from "../LeftSidebar";

const Gallery = () => {
  return (
    <div>
      <Header />

      <img
        src={admissionImg}
        alt="Admission Image"
        className=""
        style={{ width: "100vw", height: "44vh" }}
      />
      <div className=" overlay-text absolute bottom-4xl w-full bg-black  text-white text-center py-4">
        <h1 className="text-3xl font-bold">Gallery</h1>
      </div>
     
  
      <div className="flex  gap-4 sm:h-64 xl:h-80 2xl:h-96 mt-20">
        <Carousel>
          <img src={img2} alt="..." />
          <img src={img3} alt="..." />
          <img src={img4} alt="..." />
          <img src={img2} alt="..." />
          <img src={img5} alt="..." />
          <img src={img6} alt="..." />
        </Carousel>
        <Carousel indicators={false}>
          <img src={img5} alt="..." />
          <img src={img4} alt="..." />
          <img src={img3} alt="..." />
          <img src={img5} alt="..." />
          <img src={admission} alt="..." />
        </Carousel>
      </div>
     
      <Footer />
    </div>
  );
};

export default Gallery;
