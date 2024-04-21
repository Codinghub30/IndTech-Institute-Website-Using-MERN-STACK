import React from "react";
import "./testimonial.css";
// import img1 from "../../Pictures/img1.jpg"

const Testimonal = () => {
  return (
    <>
      <section className="testimonal padding">
      <h6 className=" text-teal-500 font-bold text-center mt-20 text-5xl">Testimonial</h6>
      <h3 className="text-center text-3xl">Our Students </h3>
        <div className="container mt-12">

          <div className="content grid2">
            <div className="items shadow">
              <div className="box flex">
                <div className="img">
                  <img src="" alt="" />
                  <i className="fa fa-quote-left icon"></i>
                </div>
                <div className="name">
                  <h2>ROGER SCOTT</h2>
                  <span>MARKETING MANAGER</span>
                </div>
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>

          
          <div className="content grid2">
            <div className="items shadow">
              <div className="box flex">
                <div className="img">
                  <img src="" alt="" />
                  <i className="fa fa-quote-left icon"></i>
                </div>
                <div className="name">
                  <h2>ROGER SCOTT</h2>
                  <span>MARKETING MANAGER</span>
                </div>
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          
          <div className="content grid2">
            <div className="items shadow">
              <div className="box flex">
                <div className="img">
                  <img src="" alt="" />
                  <i className="fa fa-quote-left icon"></i>
                </div>
                <div className="name">
                  <h2>ROGER SCOTT</h2>
                  <span>MARKETING MANAGER</span>
                </div>
              </div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonal;
