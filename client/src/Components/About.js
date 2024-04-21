import React from 'react';
import Headers from './Header';
import Footer from './Footer';

const AboutSection = () => {
  return (
    <div>
    <Headers />
    <section id="about" className="bg-gray-100 py-16 mt-16">
      <div className="container mx-auto px-6 ">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left text-gray-800">Welcome to Indtech Education & Technical Institute</h2>
            <p className="text-lg leading-relaxed mb-6 text-center md:text-left text-gray-700">
              We are committed to providing top-notch education in Several Diploma Courses. Our institute offers comprehensive courses designed to equip you with the skills and knowledge needed to succeed in the rapidly evolving modern world.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-center md:text-left text-gray-700">
              With experienced instructors, hands-on projects, and a supportive learning environment, we ensure that you receive the best training possible. Join us on the journey to become a proficient ReactJS developer!
            </p>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/images/about.jpg" alt="About Institute" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
}

export default AboutSection;
