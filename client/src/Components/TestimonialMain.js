import React from "react";
import "../Components/Testimonial/testimonial.css";
import profile from "../Pictures/profile.jpg"

// import img1 from "../../Pictures/img1.jpg"

const TestimonalMain = () => {
  return (
    <>
   
      <section className="testimonal padding">
      <h6 className=" text-teal-500 font-bold text-center mt-20 text-5xl">Testimonial</h6>
      <h3 className="text-center text-3xl">Our Students </h3>
        <div className="container-testi mt-12">

          <div className="content grid2">
            <div className="items shadow">
              <div className="box flex">
                <div className="img" style={{width:"169px", height:"110px"}}>
                  <img src={profile} alt="" />
                  <i className="fa fa-quote-left icon"></i>
                </div>
                <div className="name">
                  <h2>Saroj Kumar Panda</h2>
                  <span>Tata Industrial Park, Gopalpur</span>
                  <span>Industrial Safety Supervisor</span>
                
                </div>
              </div>
              <p>
              I've had an amazing experience at this institute. The curriculum is well-structured and the faculty are not only knowledgeable but also very supportive. The practical sessions and projects have greatly enhanced my understanding and skills.
              </p>
            </div>
          </div>

          
          <div className="content grid2">
            <div className="items shadow">
              <div className="box flex">
              <div className="img" style={{width:"190px", height:"110px"}}>
                  <img src={profile} alt="" />
                  <i className="fa fa-quote-left icon"></i>
                </div>
                <div className="name">
                  <h2>Pradeep Rout</h2>
                  <span>Tata Steel LTD, KalingaNagar </span>
                  <span>Industrial Safety Supervisor</span>
                </div>
              </div>
              <p>
              This institute  offers great opportunities for internships and networking with industry professionals. The support services, such as career counseling and workshops, have been invaluable in preparing me for the job market. I’m very satisfied with my education here."
              </p>
            </div>
          </div>
          
          <div className="content grid2">
            <div className="items shadow">
              <div className="box flex">
              <div className="img" style={{width:"160px", height:"110px"}}>
                  <img src={profile} alt="" />
                  <i className="fa fa-quote-left icon"></i>
                </div>
                <div className="name">
                  <h2>Alok Kumar Jena</h2>
                  <span>Jindal Steel limited</span>
                  <span>Industrial Safety Supervisor</span>
                </div>
              </div>
              <p>
              "Attending this institute has been one of the best decisions of my life.The hands-on experience with modern machinery and the emphasis on research have prepared me well for my career. Additionally, the institute’s focus on innovation and sustainability has inspired me to pursue new ideas and projects. I’m grateful for the education and opportunities I’ve received here."
              </p>
            </div>
          </div>
        </div>
      </section>
  
    </>
  );
};

export default TestimonalMain;
