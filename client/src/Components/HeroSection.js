import React from "react";
import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";
import Featured from "./Featured";
import Speciality from "./Speciality";
import TopFaq from "./TopFaq";
import Footer from "./Footer";
// import Slider from "react-slick";
import "./About.css";

// import arrow from "../Pictures.png"
import img1 from "../Pictures/wallpaer1.jpg";
import img2 from "../Pictures/wallpaper.jpg";
import img3 from "../Pictures/welder.jpg";
import img4 from "../Pictures/technician.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion } from "framer-motion";
import { transition1 } from "../transition";
import { fadeIn } from "../Variant";

import Testimonal from "./Testimonial/Testimonial";

// import mainImg from "../Pictures/png1.png.png";
import VisionAndMission from "./VisionAndMission";

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
        <Carousel>
          <img src={img1} alt="..." />
          <img src={img2} alt="..." />
          <img src={img3} alt="..." />
        </Carousel>
        {/* <div className="hero-container">
          <h2 className="heading mt-72">
            {" "}
            <span></span>Master The Skill to
            <br /> Drive Your Career
          </h2>
          <a href="/course">View All Course</a>
        </div> */}
        {/* <img src={arrow} alt="arrow" /> */}
        <div className="card">
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">
              Academic Excellence
            </h5>
            <p class="font-normal text-xl text-black dark:text-gray-400">
              Institutes focus on academic excellence by offering high-quality
              education and rigorous academic programs. Our Institutes offer a
              structured curriculum delivered through lectures, and practical
              sessions. This instruction covers various subjects and disciplines
              to impart knowledge and skills.
            </p>
          </a>

          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">
              Faculty and Staff
            </h5>
            <p class="font-normal text-xl text-gray-700 dark:text-gray-400">
              Institutes employ qualified faculty and staff members who are
              experts in their respective fields. These educators deliver
              lectures, mentor students, provide guidance, and assess academic
              performance.
            </p>
          </a>

          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl uppercase font-bold tracking-tight text-gray-900 dark:text-white">
              Student-Centered Approach
            </h5>
            <p class="font-normal text-xl text-gray-700 dark:text-gray-400">
              Institutes prioritize the needs and well-being of students,
              fostering a supportive and inclusive learning environment. They
              offer personalized attention, small class sizes, and opportunities
              for student engagement to ensure that every student receives
              individualized support and guidance.
            </p>
          </a>
        </div>
        <motion.div
          className="image"
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
        >
          <img className="img1" src={img4} alt="Main Pic" />
        </motion.div>
      </div>
      <div className=" second-main sm:h-auto mt-56">
        <motion.section
         variants={fadeIn("up", 0.4)}
         initial="hidden"
         animate={"show"}
          className="aboutHome"
        >
          <div className="container flex flex-col md:flex-row items-center">
            <div className="left row md:w-1/2 mb-4 md:mb-0">
              {/* <img src={img1} alt="" /> */}
            </div>
            <div className="right row md:w-1/2 p-4 ">
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate={"show"}
                
              >
                {/* <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' /> */}
                <h6 className="text-3xl md:text-3xl text-teal-500 font-bold">
                  SPECIALITY
                </h6>
                <h3 className="text-5xl   md:text-5xl font-bold">
                  OF OUR INSTITUTION
                </h3>
              </motion.div>
              <div>
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
                        Practical Experience
                      </h2>
                      <p>
                      "Practical experience, particularly through internships, is invaluable for students and professionals alike. It provides hands-on exposure to real-world scenarios, enhancing theoretical knowledge with practical skills and insights."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ transition1 }}
              >
                <div className="items">
                  <a href="/courses">
                  <div className="item flex flex-col md:flex-row items-center mb-4">
                    <div className="img">
                      <img
                        src="https://img.icons8.com/dotty/80/000000/storytelling.png"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h2 className="text-lg md:text-xl font-semibold mb-1"> 100% Placement Assurance </h2>
                      <p>
                        "At IETI, we are dedicated to ensuring the success of our students. That's why we proudly offer a 100% placement assurance for qualified graduates in their relevant industries. "
                      </p>
                    </div>
                  </div>
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-100%" }}
                transition={{ transition1 }}
              >
                <div className="items">
                  <div className="item flex flex-col md:flex-row items-center mb-4">
                    <div className="img">
                      <img
                        src="https://img.icons8.com/dotty/80/000000/storytelling.png"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h2 className="text-lg md:text-xl font-semibold mb-1">Experienced Faculty</h2>
                      <p>
                        "Our faculty members are distinguished experts in their respective fields, committed to ensuring the success of our students. Our faculty hold advanced degrees from prestigious institutions around the world. "
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <Featured />

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
            <a href="/contact" className="mt-4 text-center  border-teal-500 text-teal-500 transform transition duration-500 hover:scale-110 bg-white  font-semibold py-4 px-8 w-52 h-16" >
              Contact Us
            </a>
          </div>
        </div>

        <Testimonal />
        <TopFaq />

        <VisionAndMission />

        <Footer />
      </div>
    </div>
  );
};

export default HeroSection;
