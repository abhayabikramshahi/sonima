import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, User, MessageSquare, Github, Linkedin, Twitter } from "lucide-react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact | Sonima Pokhrel</title>
        <meta
          name="description"
          content="Get in touch with Sonima Pokhrel. Contact for collaborations, projects, or just to say hello!"
        />
      </Helmet>

      <div className="min-h-screen bg-black text-white py-16 px-6 mt-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LHS - Text Info */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
              📬 Contact Me
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Got an idea, project, or just want to say hi? 
              Let’s connect and build something awesome together.
            </p>

            {/* Socials */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/sonimapokhrelcoder"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition"
              >
                <Twitter size={22} />
              </a>
            </div>
          </div>

          {/* RHS - Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-2xl shadow-lg border border-gray-800">
            {submitted ? (
              <div className="text-center text-green-400 font-semibold">
                ✅ Thank you! Your message has been sent.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <User size={16} /> Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-pink-400 focus:ring focus:ring-pink-400/20 outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <Mail size={16} /> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-violet-400 focus:ring focus:ring-violet-400/20 outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-300 mb-2 flex items-center gap-2">
                    <MessageSquare size={16} /> Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/20 outline-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:opacity-90 text-white font-semibold py-3 rounded-lg shadow-lg transition"
                >
                  Send Message 🚀
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
