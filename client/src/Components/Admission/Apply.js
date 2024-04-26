import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import registration from "../../Pictures/register122.jpg"
import LeftSidebar from '../LeftSidebar'

const Apply = () => {
  return (
    <div className="p-8">
      <Header />
      <img
          src={registration}
          alt="Admission Image"
          className="" style={{width:"34vw", height:"46vh", marginLeft: "36%"}}
        />
                <div className=" overlay-text absolute bottom-4xl w-full bg-black  text-white text-center py-4">
          <h1 className="text-3xl font-bold">Admission Form</h1>
        </div>
    <h2 className="text-2xl font-bold mb-4 mt-36 text-center">Apply for Admission and Make your Career Bright</h2>
        <div className='flex ml-32'>
<LeftSidebar />
 

    <form className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6" style={{ marginLeft: "18%", width:"70%", marginTop:"2%" }} action="https://formspree.io/f/xwkgadya" method="POST">
    <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
        <input type="text" name="name" className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500" placeholder="Enter your name" />
    </div>
    <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email:</label>
        <input type="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
    </div>
    <div className="mb-4">
        <label htmlFor="number" className="block text-sm font-medium text-gray-700">Your Contact Number:</label>
        <input type="tel" name="number" className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500" placeholder="Enter your contact number" />
    </div>
    <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Enter the course:</label>
        <textarea id="message" name="message" required className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500" placeholder="Enter the course you are interested in"></textarea>
    </div>
    <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send</button>
</form>

</div>
    <Footer />
</div>
  )
}

export default Apply
