


// components/BlogPage.js

import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import BlogPost from './BlogPost';
import { Card, Button } from "flowbite-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '../Header';
import Footer from '../Footer';

const BlogPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [expandedIndexes, setExpandedIndexes] = useState([]);
    const sliderRef = useRef(null);
    const [sliderHeight, setSliderHeight] = useState(0);


const blogs = [
    { title: 'Importance of Education', content: 'Education is the cornerstone of societal progress, empowering individuals to unlock their full potential and contribute meaningfully to the world. It serves as a catalyst for personal growth, fostering critical thinking, creativity, and problem-solving skills essential for navigating life complexities. Beyond the acquisition of knowledge, education instills values of empathy, compassion, and tolerance, shaping individuals into responsible global citizens. With equitable access to quality education, societies can break the cycle of poverty, promote social mobility, and build prosperous futures for generations to come.' },
    { title: 'What is Fire Safety', content: 'Fire safety is a critical aspect of maintaining a secure environment in both residential and commercial settings. Understanding the causes of fires and implementing preventive measures are essential steps in safeguarding lives and property. This includes installing smoke alarms, fire extinguishers, and emergency exit plans. Additionally, educating individuals on fire safety protocols, such as proper handling of flammable materials and safe evacuation procedures, can mitigate the risk of fire-related accidents. Regular inspections and maintenance of electrical systems, heating appliances, and cooking equipment further ensure a proactive approach to fire prevention. By prioritizing fire safety measures, we can create a resilient environment that protects against the devastating impact of fires.' },
    { title: 'What is First Aid', content: 'First aid is the initial assistance given to a person who has been injured or suddenly taken ill. It is essential knowledge that can make a significant difference in emergencies, potentially saving lives and preventing further harm. Basic first aid skills include assessing the situation, ensuring safety for both the rescuer and the injured person, and providing appropriate care until professional medical help arrives. This may involve actions such as controlling bleeding, performing CPR (cardiopulmonary resuscitation), stabilizing fractures, and administering medication or other treatments as necessary. Properly administered first aid can alleviate pain, reduce the severity of injuries, and improve the chances of recovery. Moreover, it empowers individuals to act decisively in crisis situations, promoting community resilience and well-being.' },
    { title: 'Emerging Trends of Industrial Safety Management', content: 'Industrial safety management is an ever-evolving field, with emerging trends reflecting advancements in technology, changes in regulatory requirements, and a growing emphasis on proactive risk mitigation strategies. Some of the emerging trends in industrial safety management include: Use of Technology: Industrial safety management is increasingly leveraging technology such as IoT (Internet of Things), AI (Artificia Intelligence), and machine learning to enhance safety protocols. IoT sensors can monitor equipment performance and environmental conditions in real-time, detecting potential hazards and triggering alerts before accidents occur. AI-powered predictive analytics can identify patterns and trends in safety data, enabling proactive interventions to prevent incidents.Digitalization of Safety Processes: There is a shift towards digitalizing safety processes, including incident reporting, safety inspections, and training. Digital platforms and mobile apps streamline communication, facilitate data collection and analysis, and ensure real-time access to safety information across organizational levels. This digital transformation improves the efficiency, transparency, and accountability of safety management systems.' },
    { title: 'Role of Discipline', content: 'Discipline plays a crucial role in shaping individuals, organizations, and societies, contributing to their overall well-being and success. Here are some key aspects highlighting the importance of discipline:Achieving Goals and Success: Discipline is essential for setting and achieving goals. It involves adhering to a structured plan, staying focused, and consistently taking action towards desired outcomes. Whether in personal endeavors, academic pursuits, or professional aspirations, discipline provides the necessary framework for progress and success.Building Self-Control and Willpower: Discipline cultivates self-control and willpower, enabling individuals to resist temptations, overcome obstacles, and persevere through challenges. By practicing discipline, individuals develop resilience, grit, and determination, which are essential qualities for navigating life ups and downs with resilience and fortitude.' },
    { title: 'Accountabilty Trend', content: 'Accountability refers to the obligation of individuals or organizations to take responsibility for their actions, decisions, and outcomes. It is a fundamental aspect of integrity, transparency, and ethical behavior in both personal and professional contexts. Here are some key points highlighting the importance of accountability: Promoting Trust and Credibility: Accountability fosters trust and credibility by demonstrating reliability, honesty, and integrity in actions. When individuals hold themselves or others accountable for their commitments and obligations, it builds confidence and respect among stakeholders, whether they are colleagues, clients, or the public.Encouraging Responsibility and Ownership: Accountability encourages individuals to take ownership of their actions and decisions. By acknowledging their role in achieving desired outcomes or addressing challenges, individuals demonstrate a sense of responsibility and commitment to their duties and obligations. This ownership mindset fosters a culture of empowerment and proactivity.' },
];


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        afterChange: (index) => setCurrentSlide(index),
        autoplay: true,
        autoplaySpeed: 5000, // Adjust as needed
    };

    const toggleExpand = (index) => {
        if (expandedIndexes.includes(index)) {
            setExpandedIndexes(expandedIndexes.filter((item) => item !== index));
        } else {
            setExpandedIndexes([...expandedIndexes, index]);
        }
    };

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div>
            <Header/>
            <div>
                <h2 className='text-3xl text-center uppercase font-bold drop-shadow mt-20 text-teal-500'>Blog Page</h2>
            </div>
       
        <div className="relative mt-20 h-24">
            <Slider  className='ml-44 mt-44' {...settings} ref={sliderRef} initialSlide={currentSlide}>
                {blogs.map((blog, index) => (
                    <div key={index}>
                         <BlogPost
                            title={blog.title}
                            content={expandedIndexes.includes(index) ? blog.content : blog.content.slice(0, 100) + '...'}
                        />
                        {!expandedIndexes.includes(index) && (
                               
                           <Button onClick={() => toggleExpand(index)
                           }>
                           Read more
                           <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                             <path
                               fillRule="evenodd"
                               d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                               clipRule="evenodd"
                             />
                           </svg>
                         </Button>)}
                            {expandedIndexes.includes(index) && (
                            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => toggleExpand(index)}>
                                Read Less
                            </button>
                        )}
                    </div>
                ))}
            </Slider>
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 w-16 h-16  bg-gray-800 text-white p-2 rounded-full"
                onClick={goToPrev}
            >
                {"<"}
            </button>
            <button
                className="absolute top-1/2 right-4  w-16 h-16 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
                onClick={goToNext}
            >
                {">"}
            </button>
            <div className='mt-72'>
        <Footer />
        </div>

        </div>
        
                
        </div>
    );
};

export default BlogPage;

