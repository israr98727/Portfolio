import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { FiMonitor } from 'react-icons/fi';

function Skills() {
  return (
    <section id='skills' className="relative flex flex-col items-center justify-center py-20 bg-gray-900 text-white font-mono">
      
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-90 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")' }}
        />
      </div>

      {/* Scroll Icon */}
      <div className="absolute top-5 flex flex-col items-center animate-bounce z-10">
        <div className="text-teal-400 text-4xl">0</div>
        <div className="text-teal-400">↓</div>
      </div>

      {/* Title with Icon */}
      <div className="relative z-10 flex flex-col mt-5 items-center justify-center mb-12">
        <h2 className="text-4xl font-semibold text-teal-400 border-b-4 border-teal-400 mb-5">Skills</h2>
        <p className="text-gray-300 text-sm text-center">I am striving to never stop learning and improving</p>
      </div>

      {/* Skills Cards */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-8 mb-12 w-full items-center justify-center">
        <div className="flex flex-col items-center w-64 p-4 bg-teal-700 rounded-lg shadow-lg hover:scale-105 transition transform duration-200">
          <FiMonitor className="text-3xl text-teal-300 mb-4" />
          <h3 className="text-xl font-semibold text-white">Web Development</h3>
          <p className="text-gray-300">HTML - CSS - JS - REACT</p>
        </div>
      </div>

      {/* Technology Icons */}
      <div className="flex flex-wrap justify-center gap-12 mt-8 z-10">
        <div className="flex flex-col items-center hover:animate-spin transition-transform duration-300 w-20">
          <FaHtml5 className="text-6xl text-orange-500 mb-2" />
          <p className="text-orange-500 font-semibold">HTML</p>
        </div>
        <div className="flex flex-col items-center hover:animate-spin transition-transform duration-300 w-20">
          <FaCss3Alt className="text-6xl text-blue-500 mb-2" />
          <p className="text-blue-500 font-semibold">CSS</p>
        </div>
        <div className="flex flex-col items-center hover:animate-spin transition-transform duration-300 w-20">
          <FaJs className="text-6xl text-yellow-400 mb-2" />
          <p className="text-yellow-400 font-semibold">JS</p>
        </div>
        <div className="flex flex-col items-center hover:animate-spin transition-transform duration-300 w-20">
          <FaReact className="text-6xl text-teal-400 mb-2" />
          <p className="text-teal-400 font-semibold">REACT</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
