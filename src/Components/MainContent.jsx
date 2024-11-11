import React from 'react';

function MainContent() {
  return (
    <main className=" mt-20 flex-1 p-10 text-white font-mono">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-400">Developer</h2>
      <div className="mt-8 space-y-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Hey, I'm <span className="text-teal-400">Israr</span>,
          <br /> React JS Developer
        </h1>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl">
          I help businesses grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done.
        </p>
        <a href="#" className="inline-flex items-center text-teal-400 hover:text-teal-500 text-base sm:text-lg md:text-xl">
          Let's Talk <span className="ml-2">✉️</span>
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg">
          <span className="text-3xl sm:text-4xl font-bold text-teal-400">4</span>
          <p className="text-gray-400 mt-2">Programming Languages</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg">
          <span className="text-3xl sm:text-4xl font-bold text-teal-400">6</span>
          <p className="text-gray-400 mt-2">Development Tools</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg">
          <span className="text-3xl sm:text-4xl font-bold text-teal-400">0-1</span>
          <p className="text-gray-400 mt-2">Years of Experience</p>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
