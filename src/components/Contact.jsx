import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className=" text-white py-16 ">
      <div className="container mx-auto px-6">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <h4 className="text-2xl font-semibold text-center mb-4">Send me a message!</h4>
          <p className="text-center mb-6">Got a question or want to collaborate? Feel free to reach out.</p>
          
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-4"
          >
            <input
              type="hidden"
              name="access_key"
              value="d79ee2b8-ec2e-4bd5-a78c-79dbda8a3422"
            />
            
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full p-3 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full p-3 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              rows="6"
              className="w-full p-3 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gray-600 text-white rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
