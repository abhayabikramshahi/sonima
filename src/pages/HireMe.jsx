import React from "react";

function HireMe() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Hire Me
        </h2>

        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          I’m always open to exciting projects, internships, collaborations, and
          freelance work. Feel free to drop me a message below!
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xwkgkyyn" // replace with your form handler or backend API
          method="POST"
          className="bg-white shadow-lg rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default HireMe;
