import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import contact from  "../Pictures/contact.jpg"

const Contact = () => {
  return (
    <div>
      <Header />
      <img
          src={contact}
          alt="contact page is not loaded"
          className="" style={{width:"30vw", height:"44vh", marginLeft:"35%"}}
        />
        
        <div className=" overlay-text absolute bottom-4xl w-full bg-black  text-white text-center py-4">
          <h1 className="text-3xl font-bold">
            Contact Us
          </h1>
        </div>
      <div className="container mx-auto px-4 py-8">
      

        <div className="mt-16 ml-64">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-4">
              Have any questions or feedback? We'd love to hear from you. Fill
              out the form below, and we'll get back to you as soon as possible.
            </p>
            <div className="flex gap-80">
              <form className="ml-4">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none"
                >
                  Submit
                </button>
              </form>

              <div className="bg-white shadow-md rounded-lg p-6 ml-80 mt-0" style={{marginTop:"-80px"}}>
                <h2 className="text-xl font-bold mb-4">Our Location</h2>
                <p className="text-gray-700 mb-4">
                  {" "}
                  Hat, Kantore, Purbakote, Odisha, India 755022
                </p>
                <p className="text-gray-700 mb-4"> PH: 072056 64231</p>
                <iframe
                  title="Map"
                  width="100%"
                  height="300"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/place/Indtech+Education+%26+Technical+Institute/@21.0283499,86.1662742,15z/data=!4m6!3m5!1s0x3a1953086d474283:0x4d9c7b840cf0ea5f!8m2!3d21.0283499!4d86.1662742!16s%2Fg%2F11st_vck_d?entry=ttu"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
