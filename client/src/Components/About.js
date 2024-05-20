import React from "react";
import Headers from "./Header";
import Footer from "./Footer";
import img1 from "../Pictures/Picture1.jpg";
import img2 from "../Pictures/Picture2.jpg";
import director from "../Pictures/director.png.jpg";

const AboutSection = () => {
  return (
    <div>
      <Headers />
      <section id="about" className="bg-gray-100 py-16 mt-16">
        <div className="container mx-auto px-6 ">
          <div className="flex flex-col md:flex-col items-center justify-center ml-20">
            <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0">
              {/* <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left text-gray-800">
                Welcome to Indtech Education & Technical Institute
              </h2> */}
              <h3 className=" text-teal-500 font-bold text-center mt-20 text-5xl">
                Welcome to
              </h3>
              <h6 className="text-center text-3xl">
                {" "}
                Indtech Education & Technical Institute
              </h6>
              <p className="text-lg leading-relaxed mb-6 text-center md:text-left text-gray-700 mt-16 ml-12">
                Indtech Education & Technical Institute is established under
                partnership act, 1932 at Purbakote, Jajpur, Odisha – 755022 on 2nd
                May, 2023. Partners of our institute are Mrs. Anita Kumari
                (Managing Partner) residence of Bihar and Mr. Dillip Kumar
                Behera (Partner) residence of Odisha. We are committed to
                providing top-notch education in Several Diploma Courses. Our
                institute offers comprehensive courses designed to equip you
                with the skills and knowledge needed to succeed in the rapidly
                evolving modern world.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-center md:text-left text-gray-700 ml-12">
                With experienced instructors, hands-on projects, and a
                supportive learning environment, we ensure that you receive the
                best training possible. Join us on the journey to become a
                expert in this feild!
              </p>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="about-details flex  gap-36 gray-100  rounded-lg  w-12  ">
                <div className="">
                  <h2>
                    {" "}
                    <strong> SMT. ANITA KUMARI MANAGING PARTNER</strong>
                  </h2>
                  <img src={img1} alt="About Institute" className="h-66 mt-8" />
                  <p className="w-52">
                    {" "}
                    <strong> Qualification:</strong> I.Sc. (Intermediate
                    Science) – Physics, Chemistry & Biology from Bihar
                    Intermediate Examination Council, Patna
                  </p>
                </div>
                <div className="">
                  <h2 className="w-96">
                    {" "}
                    <strong>
                      {" "}
                      SHRI DILLIP KUMAR BEHERA <br /> PARTNER
                    </strong>
                  </h2>
                  <img src={img2} alt="About Institute" className="h-66 mt-8" />
                  <p className="para2 ">
                    {" "}
                    <strong> Qualification:</strong> B. A. (History Hon’s) from
                    Patitapabana College, Sainkul, Jajpur; Utkal University,
                    Bhubaneswar <br />
                    Dip. in Physical Education from GCP Kalinga Stadium,
                    Bhubaneswar Dip. <br />
                    <strong>Inital Experience: </strong> 14Years of experience
                    as Physical Teacher at various Schools & Colleges eg. Mother
                    International H.S. School, New Delhi; V. P.S. Jajpur etc.
                  </p>
                </div>

                <div className="">
                  <h2 className="w-96">
                    {" "}
                    <strong>
                      {" "}
                      SHRI SHASHI KUMAR <br /> DIRECTOR
                    </strong>
                  </h2>
                  <img
                    src={director}
                    alt="About Institute"
                    className=" img-director h-66 mt-8"
                   
                  />
                  <p className="para3  ">
                    {" "}
                    <strong> Qualification:</strong> B.SC. (Electronics Hon’s)
                    from A. N. College, Patna, Magadh University, Bodh Gaya,
                    Bihar <br />
                    Diploma in Industrial Safety Management from Patna
                    University, Bihar <br />
                    IOSH-MS (IOSH – Managing Safely) from U.K,
                    <br />
                    NEBOSH-IGC (NEBOSH – International General Certificate) from
                    U.K.,
                    <br />
                    FIRST AID from National Safety Council (NSC), Odisha Chapter
                    ,<br />
                    INTERNAL AUDITOR from RLI (Regional Labour Institute),
                    Kolkata,
                    <br />
                    <strong>Inital Experience: </strong> 15Years of Industrial
                    Experience in the field of SHE (Safety, Health &
                    Environment)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutSection;
