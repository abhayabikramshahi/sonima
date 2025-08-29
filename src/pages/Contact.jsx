import React from 'react';

function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8 text-center">Contact Me</h1>
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow max-w-md w-full">
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 outline-none transition"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 outline-none transition"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="px-4 py-3 rounded bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 outline-none transition"
            required
          />
          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold py-3 rounded-xl shadow hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8 text-center text-gray-400 text-sm">
          <div>Email: <a href="mailto:sonimapokhrel017@gmail.com" className="text-yellow-400 hover:underline">sonimapokhrel017@gmail.com</a></div>
          <div>Phone: <a href="tel:9807197313" className="text-yellow-400 hover:underline">9807197313</a></div>
          <div>LinkedIn: <a href="https://www.linkedin.com/in/sonima-pokharel-2a04a6351" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline">sonima-pokharel</a></div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
