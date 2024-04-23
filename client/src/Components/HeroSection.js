import React from "react";
import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";
import Featured from "./Featured";
import Speciality from "./Speciality";
import TopFaq from "./TopFaq";
import Footer from "./Footer";
import Slider from "react-slick";
import "./About.css";

import arrow from "../Pictures/arrow.png"
import img1 from "../Pictures/slider2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";
import { transition1 } from "../transition";

import Testimonal from "./Testimonial/Testimonial";

import mainImg from "../Pictures/png1.png.png";

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
    <div>
      <div
        className="main"
        style={{
          backgroundColor:
            "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
        }}
      >
        <h2 className="heading">
          {" "}
          <span>I</span>NDTECH EDUCATION AND TECHNICAL INSTITUTE
        </h2>
        {/* <img src={arrow} alt="arrow" /> */}
        <div className="card">
          <a
            href="#"
            class="block max-w-sm p-6 bg-teal-500 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-black dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>

          <a
            href="#"
            class="block max-w-sm p-6 bg-teal-500 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>

          <a
            href="#"
            class="block max-w-sm p-6 bg-teal-500 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        </div>

        <img className="img1" src={mainImg} alt="Main Pic" />
      </div>
      <div className=" second-main sm:h-auto mt-56">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 4 }}
          exit={{ opacity: 0 }}
          transition={{ transition1 }}
          className="aboutHome"
        >
          <div className="container flex flex-col md:flex-row items-center">
            <div className="left row md:w-1/2 mb-4 md:mb-0">
              {/* <img src={img1} alt="" /> */}
            </div>
            <div className="right row md:w-1/2 p-4 ">
              <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-50%" }}
                transition={{ transition1 }}
              >
                {/* <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' /> */}
                <h6 className="text-3xl md:text-3xl text-teal-500 font-bold">
                  SPECIALITY
                </h6>
                <h3 className="text-5xl   md:text-5xl font-bold">
                  OF OUR INSTITUTION
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ transition1 }}
              >
                <div className="items">
                  <div className="item flex flex-col md:flex-row items-center mb-4">
                    <div className="img mr-2 md:mr-4 mb-2 md:mb-0">
                      <img
                        src="https://img.icons8.com/dotty/80/000000/storytelling.png"
                        alt=""
                      />
                    </div>

                    <div className="text">
                      <h2 className="text-lg md:text-xl font-semibold mb-1">
                        Online Courses
                      </h2>
                      <p>
                        "Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ transition1 }}
              >
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
                        "Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ transition1 }}
              >
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
                        "Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ transition1 }}
        >
          <Featured />
        </motion.div>

        <Speciality />
        <div className="need-more-info bg-teal-500 h-auto rounded-lg p-8 shadow-md mt-8">
          <h2 className="text-6xl mt-24 font-bold text-center mb-4 text-white">
            Need More Information?
          </h2>
          <p className="text-white  text-xl text-center mb-8">
            If you’re thinking about how to prepare for the next stage in your
            career, we can help. Request more information today.
          </p>
          <div className="flex justify-center text-xl">
            <button className="mt-4  border-teal-500 text-teal-500 transform transition duration-500 hover:scale-110 bg-white  font-semibold py-2 px-4 w-52 h-16">
              Contact Us
            </button>
          </div>
        </div>

        <Testimonal />
        <TopFaq />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:h-auto xl:h-auto">
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
    </div>
  );
};

export default HeroSection;
