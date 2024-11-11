import React from 'react';
import { FaReact, FaDatabase, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiSupabase } from 'react-icons/si';
import Slider from 'react-slick';

// Import slick-carousel CSS for styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Projects() {
  // Slider settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id='projects' className="relative flex flex-col items-center justify-center py-20 bg-gray-900 text-white font-mono">
      
      {/* Background Overlay */}
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

      {/* Section Title */}
      <div className="relative z-10 flex flex-col items-center mb-12">
        <h2 className="text-4xl font-semibold text-teal-400 border-b-4 border-teal-400 mb-5">Projects</h2>
        <p className="text-gray-300 text-center">Following projects showcase my skills and experience through real-world examples of my work.</p>
      </div>

      {/* Project Carousel */}
      <div className="relative z-10 w-full max-w-5xl px-8">
        <Slider {...settings}>
          {/* Project Card 1 */}
          <div className="p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
              <img src="/magma.jpeg" alt="Magma Clone Project" className="rounded-lg mb-4"/>
              <h3 className="text-2xl font-semibold text-teal-400 mb-2">Magma Website Clone</h3>
              <p className="text-gray-300 mb-4">A clone of the Magma website built with HTML, CSS, and JavaScript, focusing on replicating design, layout, and user interactions.</p>
              <div className="flex gap-2 mb-4">
                <FaReact className="text-teal-400 text-xl" />
                <FaDatabase className="text-green-400 text-xl" />
                <SiTailwindcss className="text-blue-400 text-xl" />
              </div>
              {/* Visit Website Button */}
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-2 bg-teal-400 text-gray-900 font-semibold rounded hover:bg-teal-500 transition-colors duration-200">
                Visit Website
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
              <img src="/HRMS.png" alt="HRMS Project" className="rounded-lg mb-4"/>
              <h3 className="text-2xl font-semibold text-teal-400 mb-2">HRMS Application</h3>
              <p className="text-gray-300 mb-4">A Human Resource Management System built with React.js and Tailwind CSS, featuring employee data management, payroll processing, and attendance tracking.</p>
              <div className="flex gap-2 mb-4">
                <FaReact className="text-teal-400 text-xl" />
                <FaDatabase className="text-green-400 text-xl" />
                <SiTailwindcss className="text-blue-400 text-xl" />
              </div>
              {/* Visit Website Button */}
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-2 bg-teal-400 text-gray-900 font-semibold rounded hover:bg-teal-500 transition-colors duration-200">
                Visit Website
              </a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="p-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
              <img src='/Screenshot (47) copy.png' className="rounded-lg mb-4"/>
              <h3 className="text-2xl font-semibold text-teal-400 mb-2">Portfolio Website</h3>
              <p className="text-gray-300 mb-4">A personal portfolio website developed using Next.js and Tailwind CSS, deployed on Vercel.</p>
              <div className="flex gap-2 mb-4">
                <SiNextdotjs className="text-gray-300 text-xl" />
                <SiSupabase className="text-green-400 text-xl" />
                <SiTailwindcss className="text-blue-400 text-xl" />
              </div>
              {/* Visit Website Button */}
              <a href="https://portfolio-website-omega-olive.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-4 py-2 bg-teal-400 text-gray-900 font-semibold rounded hover:bg-teal-500 transition-colors duration-200">
                Visit Website
              </a>
            </div>
          </div>

          {/* Add more project cards as needed */}
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
