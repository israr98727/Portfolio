import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      setStatus("All fields are required.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("Please enter a valid email address.");
      return false;
    }
    setStatus("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs
      .send(
        "service_cujjb7w", // Replace with your EmailJS Service ID
        "template_s1e467a", // Replace with your EmailJS Template ID
        formData,
        "1dLYVyobw0x6YMQy7" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div id="contact" className=" min-h-screen flex flex-col items-center justify-center bg-gray-900 text-teal-300 font-mono text-xs">
      <div className="relative flex flex-col items-center mb-8">
        <h2 className="relative z-10 mb-2 mt-16 text-3xl font-semibold text-teal-500">
          <span className="border-b-4  border-teal-400">Contact</span>
        </h2>

        <p className="mb-5 mt-5 text-center text-xs text-gray-400">
          I'm currently available for freelance work
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-gray-900 p-6 rounded-lg shadow-lg text-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-xs font-medium mb-4">Your name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="p-1 bg-gray-900 border-b-2 mb-5 border-teal-300 text-white focus:outline-none focus:border-teal-500 text-xs"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-medium mb-4">Your email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-1 bg-gray-900 border-b-2 border-teal-300 text-white focus:outline-none focus:border-teal-500 text-xs"
              required
            />
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <label className="text-xs font-medium mb-1">Subject*</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter subject"
            className="p-1 bg-gray-900 border-b-2 mb-5 border-teal-300 text-white focus:outline-none focus:border-teal-500 resize-none text-xs"
            required
          />
        </div>

        <div className="flex flex-col mt-4">
          <label className="text-xs font-medium mb-1">Your message*</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="p-1 bg-gray-900 border-b-2 mb-5 border-teal-300 text-white focus:outline-none focus:border-teal-500 resize-none text-xs"
            required
          />
        </div>

        <div className="flex justify-center items-center">
          <button type="submit" className="flex items-center justify-center text-sm py-2 px-4 mt-4 bg-teal-200 text-gray-900 font-semibold rounded-full hover:bg-teal-400 transition">
            Send Message
            <FiSend className="ml-2" />
          </button>
        </div>
      </form>

      {status && <p className="mt-4 text-teal-400 text-xs">{status}</p>}
    </div>
  );
};

export default Contact;
