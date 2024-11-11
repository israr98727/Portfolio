import React from 'react';

function Sidebar() {
  return (
    <aside className="w-full h-[70vh] mt-28 sm:w-2/3 md:w-1/3 lg:w-1/4 p-5 sm:p-8 md:p-8 sm:h-[70vh] font-mono border-4 border-white bg-gray-800 rounded-tl-[100px] rounded-br-[100px] shadow-lg animate-slideInLeft">
      <div className="flex flex-col items-center text-[14px] md:text-[15px]">
        <img src="images.png" alt="ISRAR" className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-4 object-cover" />
        <h2 className="text-lg text-white font-bold">Israr Ahmed</h2>
        <p className="text-gray-400">Frontend Developer</p>
        <ul className="mt-4 text-teal-300 space-y-2">
          <li>Email: <span className="text-gray-300">israr98727@gmail.com</span></li>
          <li>Location: <span className='text-gray-300'>Islamabad</span></li>
          <li>Role: <span className='text-gray-300'>Full Time / Freelancer</span></li>
        </ul>
        <button className="mt-5 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
        <a
          href="/Resume/ISRAR AHMED RESUME.pdf" // Replace with your CV file's path
          download="Israr_Ahmed_CV.pdf" // Optional: Customize the downloaded file name
          className="mt-5 px-4 py-2 bg-teal-500 text-black font-bold rounded-lg hover:bg-teal-600 text-center"
        >
          Download CV
        </a>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
