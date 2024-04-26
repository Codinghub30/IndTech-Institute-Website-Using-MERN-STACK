import React, { useState } from 'react';
import topFaq from "../Pictures/topFaq1.jpg";

const TopFaq = () => {
  // Array of questions and answers
  const faqs = [
    {
      question: "Do you offer job placement assistance for graduates?",
      answer: "Yes, our career services department offers job placement assistance, resume writing workshops, mock interviews, and networking opportunities to help graduates secure employment in their field of study.",
    },
    {
      question: "Are there opportunities for hands-on training or internships?",
      answer: "Yes, many of our diploma programs include hands-on training components or internship opportunities with industry partners. These experiences provide valuable real-world skills and networking opportunities for students.",
    },
    {
      question: "Is Placements are guaranteed",
      answer: "Yes Placement is 100% guaranteed. We Provide good placements for Students.",
    },
    {
      question: "What diplomas do you offer?",
      answer: "We offer a range of diploma programs in various fields such as engineering, computer science, business administration, healthcare, and more. Please visit our Programs page for a complete list.",
    },
    {
      question: "What is the duration of your diploma programs?",
      answer: "The duration of our diploma programs varies depending on the field of study. Typically, diploma programs range from one to three years of full-time study.",
    },
  ];

  // State to manage visibility of answers
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className="">
      {/* FAQ Section */}
      <div className=" small-faq relative px-12 bg-cover bg-center sm:h-6xl mb-16 mt-24"     style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${topFaq})` }}> 

      
        {/* <h2 className="text-5xl font-bold text-white absolute top-1/3 left-0 right-0 text-center z-10">Top FAQ</h2> */}

        <div className="relative text-xl flex flex-col items-center justify-center text-white">
          <h3 className="font-bold mb-8 mt-24 text-5xl">Frequently Asked Questions</h3>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 w-full max-w-lg">
              <button
                className="text-xl font-bold mb-2 text-left w-full bg-transparent"
                onClick={() => setSelectedQuestion(selectedQuestion === index ? null : index)}
              >
                {faq.question}
              </button>
              {selectedQuestion === index && (
                <p className="text-gray-200 text-lg">{faq.answer}</p>
              )}
              <hr className="border-white my-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopFaq;
