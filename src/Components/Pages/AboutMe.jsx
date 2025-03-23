import React from 'react';
import { FaBlog, FaBook, FaGlobe, FaPenFancy } from 'react-icons/fa';

function AboutMe() {
  return (
    <section id="about" className="about relative flex flex-col lg:flex-row items-center justify-center py-20 px-6 bg-gray-900 text-white font-sans min-h-screen">
      {/* Background and Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-90" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 w-full max-w-6xl">
        
        {/* Profile Card */}
        <div className="relative bg-gray-800 rounded-2xl shadow-lg p-8 lg:w-[40%] w-full text-center">
          {/* Fiery Animation */}
          <div
            className="relative mx-auto rounded-full"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/60 to-transparent animate-flicker" />
            <img
              src="About.jpeg"
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full border-4 border-teal-400 shadow-lg mb-6 relative z-10"
            />
          </div>
          <h2 className="text-3xl font-bold text-teal-400 mb-2">Israr Ahmed</h2>
          <p className="text-gray-300 mb-4">React JS Developer</p>
          <p className="text-sm text-gray-400 leading-relaxed">
            Passionate about building robust and user-centric applications. I thrive on challenges and am dedicated to continuous learning.
          </p>
        </div>

        {/* Detail Section */}
        <div className="lg:w-[50%] w-full flex flex-col items-start space-y-8 p-6 bg-gray-900 rounded-2xl shadow-lg">
          
          {/* Highlighted Skill Section */}
          <div className="flex flex-col space-y-4 text-left">
            <h3 className="text-teal-400 text-2xl font-semibold border-b-4 border-teal-400 pb-2">About Me</h3>
            <p className="text-gray-300 leading-relaxed">
              I specialize in <span className="text-teal-400 font-semibold">React, JavaScript technologies</span>, creating clean and efficient code that brings user experiences to life. Outside of coding, I love exploring new trends and taking on creative side projects.
            </p>
          </div>

          {/* Hobbies and Interests */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <FaPenFancy className="text-teal-400 text-2xl" />
              <p className="text-gray-300 text-sm">Blog Writing</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaBook className="text-teal-400 text-2xl" />
              <p className="text-gray-300 text-sm">Reading</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaGlobe className="text-teal-400 text-2xl" />
              <p className="text-gray-300 text-sm">Traveling</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaBlog className="text-teal-400 text-2xl" />
              <p className="text-gray-300 text-sm">Learning</p>
            </div>
          </div>

          {/* Personal Quote */}
          <div className="bg-teal-400 bg-opacity-20 p-4 rounded-lg shadow-inner text-gray-300 italic text-sm leading-relaxed">
            "Challenging my perspective and broadening my vision with every project. Life is a constant learning journey!"
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
