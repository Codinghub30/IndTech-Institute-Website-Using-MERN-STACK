import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import  LeftSidebar  from "../Components/LeftSidebar";
import { HiOutlinePlus } from "react-icons/hi";
import { useState } from "react";
import faq from "../Pictures/gaq.png"

function SidebarTopFAQ() {
  const faqs = [
    {
      question: "Is Placements are guaranteed",
      answer: "Yes Placement is 100% guaranteed. We Provide good placements for Students.",
    },
    {
      question: "What are top companies",
      answer: "Tata Steel Plants(Jajpur), Jindal Plants, Visa steel.",
    }, 
     {
      question: "Are there opportunities for hands-on training or internships?",
      answer: "Yes, many of our diploma programs include hands-on training components or internship opportunities with industry partners. These experiences provide valuable real-world skills and networking opportunities for students.",
    },
    {
      question: "Is Admission Open for all students",
      answer: "Yes. Our course is eligible for all students who qualify the eligibilty of the choosen courses "
    },
    {
      question: "What diplomas do you offer?",
      answer: "We offer a range of diploma programs in various fields such as Lab Technician, Diploma in meterial Mangement and fire and Safety management etc. Please visit our Course page for a complete list.",
    },
    {
      question: "How do I apply for admission?",
      answer: "To apply for admission, you can fill out the online application form available on our website. After submission our admissions team will guide you through the process.",
    },

    {
      question: "What is the duration of your diploma programs?",
      answer: "The duration of our diploma programs varies depending on the field of study. Typically, diploma programs range from one to three years of full-time study.",
    },

    {
      question: "Do you offer online/distance learning options for your diploma programs?",
      answer: "No We are not providing the online or distance learning options for your diploma programs. But We will add this features soon to our institute",
    },


    {
      question: "How can I contact your institute for more information?",
      answer: "This is our Number: 072056 64231. You can contact us via phone, email, or visit our campus during office hours. Our contact information is available on our website's Contact Us page. Our staff members are here to assist you with any questions or concerns you may have.",
    },
    {
      question: "Do you offer job placement assistance for graduates?",
      answer: "Yes, our career services department offers job placement assistance, resume writing workshops, mock interviews, and networking opportunities to help graduates secure employment in their field of study.",
    },

    {
      question: "What are the career prospects after completing a diploma program?",
      answer: "Our diploma programs are designed to prepare students for entry-level positions in their chosen field or for further studies. Graduates may pursue careers in industries such as engineering, healthcare, information technology, business, and more. Our career services department offers support with job placement and career development.",
    },
    
  ];


  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div>
      <Header />
      <img
          src={faq}
          alt="FAQ Image is not loaded "
          className="img-Topfaq" 
        />
        
        <div className="overlay-Topfaq overlay-text absolute bottom-4xl w-full bg-black  text-white text-center py-4">
          <h1 className="text-3xl font-bold">Frequently Asked Question</h1>
        </div>
      <div className="min-h-screen bg-gray-100 flex gap-12 mt-12">
        {/* Left Sidebar */}
        <div className="left-sidebar ml-20 mt-20  ">
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-grow">
          {/* FAQ Box */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8 mt-20">
            {/* <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2> */}
            {/* Render FAQ questions and answers */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                  {/* Question */}
                  <div
                    className="flex items-center justify-between cursor-pointer bg-gray-100 px-4 py-3"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  >
                    <h3 className="text-xl font-semibold">{faq.question}</h3>
                    <HiOutlinePlus className={`text-xl transition-transform ${expandedIndex === index ? 'transform rotate-45' : ''}`} />
                  </div>
                  {/* Answer */}
                  {expandedIndex === index && (
                    <div className="px-4 py-3 bg-gray-200 text-lg">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SidebarTopFAQ;
