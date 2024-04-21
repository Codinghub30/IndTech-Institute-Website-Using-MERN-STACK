import React from "react";
import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";
import Featured from "./Featured";
import Speciality from "./Speciality";
import TopFaq from "./TopFaq";
import Footer from "./Footer";
import Slider from "react-slick";
import "./About.css";

import img1 from "../Pictures/slider2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Testimonal from "./Testimonial/Testimonial";

const HeroSection = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="sm:h-64 " style={{ height: "36rem" }}>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src={img1} alt="" />
          </div>
          <div className="right row">
            {/* <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' /> */}
            <h6 className=" text-3xl text-teal-500 font-bold">SPECIALITY</h6>
            <h3 className="text-5xl font-bold"> OF OUR INSTITUTION</h3>
            <div className="items">
              <div className="item flexSB">
                <div className="img">
                  <img
                    src="https://img.icons8.com/dotty/80/000000/storytelling.png"
                    alt=""
                  />
                </div>
                <div className="text">
                  <h2>Online Courses</h2>
                  <p>
                    {" "}
                    "Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts."
                  </p>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="item flexSB">
                <div className="img">
                  <img
                    src="https://img.icons8.com/dotty/80/000000/storytelling.png"
                    alt=""
                  />
                </div>
                <div className="text">
                  <h2>Online Courses</h2>
                  <p>
                    {" "}
                    "Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts."
                  </p>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="item flexSB">
                <div className="img">
                  <img
                    src="https://img.icons8.com/dotty/80/000000/storytelling.png"
                    alt=""
                  />
                </div>
                <div className="text">
                  <h2>Online Courses</h2>
                  <p>
                    {" "}
                    "Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Carousel className="h mt-4">
        <img className="img1"
          src={img1}
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel> */}

      <Featured />

      <Speciality />
      <div className="bg-teal-500 h-96 rounded-lg p-8 shadow-md mt-8">
        <h2 className="text-6xl mt-24 font-bold text-center mb-4 text-white">
          Need More Information?
        </h2>
        <p className="text-white  text-xl text-center mb-8">
          If you’re thinking about how to prepare for the next stage in your
          career, we can help. Request more information today.
        </p>
        <div className="flex justify-center text-xl">
          <button className="bg-gradient-to-r from-white-700 to-gray-500 hover:from-pink-500 hover:to-yellow-500 text-white font-semibold py-2 px-8 rounded-full">
            Contact Us
          </button>
        </div>
      </div>






      <Testimonal />
      <TopFaq />

      <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
        <Carousel indicators={false}>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>

     
      <Footer />
    </div>
  );
};

export default HeroSection;
