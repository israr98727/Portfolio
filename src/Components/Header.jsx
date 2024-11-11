import React, { useState } from 'react';
import { FaInstagram, FaDiscord, FaGithub } from 'react-icons/fa';
import { IoShareSocialSharp } from 'react-icons/io5';
import NavLinks from './NavLinks';

function Header() {
  const [socialOpen, setSocialOpen] = useState(false);

  const toggleSocialLinks = () => {
    setSocialOpen(!socialOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 flex md:flex-row justify-between items-center p-5 font-mono text-center bg-gray-900">
      {/* Logo */}
      <h1 className="text-teal-400 text-2xl font-bold md:mb-0">
        <span className="text-white cursor-pointer">
          {"<"}
        </span>
        Israr Ahmed
        <span className="text-white">{"/>"}</span>
      </h1>

      {/* Social Links Toggle Icon for Small Screens */}
      <div className="md:hidden flex items-center space-x-4">
        <div onClick={toggleSocialLinks}>
          <IoShareSocialSharp className="text-white text-3xl cursor-pointer" />
        </div>
      </div>

      {/* Navigation Links for Medium Screens and Above */}
      <div className="hidden md:flex">
        <NavLinks />
      </div>

      {/* Social Links for Medium Screens and Above */}
      <div className="hidden md:flex space-x-4">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-white transition-colors duration-300">
          <FaInstagram />
        </a>
        <a href="https://discord.com/channels/@israrahmed98727" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-white transition-colors duration-300">
          <FaDiscord />
        </a>
        <a href="https://github.com/israr98727" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-white transition-colors duration-300">
          <FaGithub />
        </a>
      </div>

      {/* Social Links Overlay for Small Screens */}
      {socialOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 z-50 flex flex-col justify-center items-center text-center">
          <button onClick={toggleSocialLinks} className="absolute top-5 right-5 text-white text-3xl">
            &times;
          </button>
          {/* Social Links */}
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-teal-300 text-4xl m-4 hover:text-white transition-colors duration-300">
            <FaInstagram />
          </a>
          <a href="https://discord.com/channels/@israrahmed98727" target="_blank" rel="noopener noreferrer" className="text-teal-300 text-4xl m-4 hover:text-white transition-colors duration-300">
            <FaDiscord />
          </a>
          <a href="https://github.com/israr98727" target="_blank" rel="noopener noreferrer" className="text-teal-300 text-4xl m-4 hover:text-white transition-colors duration-300">
            <FaGithub />
          </a>
        </div>
      )}

      {/* Mobile Bottom Navigation with Icons */}
      <div className="fixed w-full left-0 bottom-0 bg-gray-900 py-6 flex justify-evenly md:hidden">
        <NavLinks isMobile={true} />
      </div>
    </header>
  );
}

export default Header;
