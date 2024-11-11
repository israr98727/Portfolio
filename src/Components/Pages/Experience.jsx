import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaReact } from 'react-icons/fa'; // Example icon, replace as needed
import { MdWork } from 'react-icons/md';
import 'react-vertical-timeline-component/style.min.css';

const experiences = [
  {
    title: "React.js Trainee",
    company: "Arkplus Private Limited",
    description: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
    dateRange: "September 2024 - (Continue..)",
    icon: <MdWork />,
  },
  {
    title: "Youtube Courses",
    company: "javascript Mastery",
    description: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "creating different projects for learning purposes"
    ],
    dateRange: "january 2024 - August 2024",
    icon: <FaReact />,
  },
];

const Experience = () => {
  return (
    <section id='experience' className="relative bg-gray-900 text-white py-16 font-mono ">
      <div className="max-w-4xl mx-auto">
        
        {/* Scroll Icon */}
        <div className="absolute top-5 right-[50%] flex flex-col items-center  justify-center animate-bounce z-10">
          <div className="text-teal-400 text-4xl">0</div>
          <div className="text-teal-400">↓</div>
        </div>
        
        {/* Title */}
        <h2 className="text-4xl mt-5 font-bold text-teal-400 text-center mb-12">Experience</h2>
        
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#1f2937', color: '#fff' }} // Tailwind gray-800
              contentArrowStyle={{ borderRight: '7px solid #1f2937' }}
              date={experience.dateRange}
              iconStyle={{ background: '#0d9488', color: '#fff' }} // Tailwind teal-600
              icon={experience.icon}
            >
              <h3 className="text-2xl font-semibold text-teal-400">{experience.title}</h3>
              <h4 className="text-xl text-gray-400 mb-2">{experience.company}</h4>
              <ul className="list-disc list-inside text-gray-300">
                {experience.description.map((point, i) => (
                  <li key={i} className="mb-1">{point}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
