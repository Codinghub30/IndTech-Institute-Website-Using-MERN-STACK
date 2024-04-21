import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-purple-800 to-purple-600 py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Contact Us</h2>
          <p className="text-lg text-gray-200 mt-4">Got a question? We'd love to hear from you! Reach out to us using the form below.</p>
        </div>
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500" placeholder="John Doe" />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500" placeholder="johndoe@example.com" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message</label>
              <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-purple-500" placeholder="Enter your message here..."></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="py-2 px-6 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 focus:outline-none focus:bg-purple-700">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
