import React, { useState } from 'react';

const TopFaq = () => {
  // Array of questions and answers
  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis nunc ut est volutpat, a posuere felis volutpat. Vivamus maximus, ex sit amet fermentum congue."
    },
    {
      question: "How do I apply for a scholarship?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis nunc ut est volutpat, a posuere felis volutpat. Vivamus maximus, ex sit amet fermentum congue."
    },
    {
      question: "What majors are offered?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis nunc ut est volutpat, a posuere felis volutpat. Vivamus maximus, ex sit amet fermentum congue."
    },
    {
      question: "Is there on-campus housing?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis nunc ut est volutpat, a posuere felis volutpat. Vivamus maximus, ex sit amet fermentum congue."
    },
    {
      question: "Can I transfer credits from another institution?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis nunc ut est volutpat, a posuere felis volutpat. Vivamus maximus, ex sit amet fermentum congue."
    },
  ];

  // State to manage visibility of answers
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className="">
      {/* FAQ Section */}
      <div className=" small-faq relative px-12 bg-cover bg-center sm:h-6xl mb-16 mt-24" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url("https://plus.unsplash.com/premium_photo-1673306778968-5aab577a7365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww")'}}>
        {/* <h2 className="text-5xl font-bold text-white absolute top-1/3 left-0 right-0 text-center z-10">Top FAQ</h2> */}

        <div className="relative z-10 flex flex-col items-center justify-center text-white">
          <h3 className="font-bold mb-8 mt-24 text-5xl">Frequently Asked Questions</h3>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 w-full max-w-lg">
              <button
                className="text-lg font-bold mb-2 text-left w-full bg-transparent"
                onClick={() => setSelectedQuestion(selectedQuestion === index ? null : index)}
              >
                {faq.question}
              </button>
              {selectedQuestion === index && (
                <p className="text-gray-200">{faq.answer}</p>
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
