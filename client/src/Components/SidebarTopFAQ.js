import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import  LeftSidebar  from "../Components/LeftSidebar";
import { HiOutlinePlus } from "react-icons/hi";
import { useState } from "react";

function SidebarTopFAQ() {
  const faqs = [
    {
      question: "Question 1",
      answer: "Answer to question 1.",
    },
    {
      question: "Question 2",
      answer: "Answer to question 2.",
    },
    {
      question: "Question 2",
      answer: "Answer to question 2.",
    },
    {
      question: "Question 2",
      answer: "Answer to question 2.",
    },
    {
      question: "Question 2",
      answer: "Answer to question 2.",
    },

    {
      question: "Question 2",
      answer: "Answer to question 2.",
    },

    {
      question: "Question 2",
      answer: "Answer to question 2.",
    },


    {
      question: "Question 2",
      answer: "Answer to question 2.",
    },

    {
      question: "Question 2",
      answer: "Answer to question 2.",
    },


    

    

    // Add more questions and answers as needed
  ];

  // State to manage the expanded state of each FAQ item
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 flex gap-12 mt-12">
        {/* Left Sidebar */}
        <div className="w-1/5 py-4 px-2 border-r-4 border-l-4 border-t-4 border-b-6 shadow-lg">
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-grow">
          {/* FAQ Box */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
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
                    <div className="px-4 py-3 bg-gray-200">
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
