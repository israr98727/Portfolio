import React from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa';
import { BsFillExplicitFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";

const NavLinks = ({ onClose, isMobile }) => {
  const links = [
    { name: 'About', icon: <FaUser />, href: '#about' },
    { name: 'Experience', icon:<BsFillExplicitFill />, href: '#experience' },
    { name: 'Skills', icon: <GiSkills/>, href: '#skills' },
    { name: 'Projects', icon: <GrProjects />, href: '#projects' },
    { name: 'Contact', icon: <FaEnvelope />, href: '#contact' },
  ];

  return (
    <nav className="flex space-x-14 md:space-x-8">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          onClick={onClose}
          className="flex flex-col items-center text-white hover:text-teal-300 transition-colors duration-300"
        >
          {/* Show icon only on mobile view */}
          {isMobile ? link.icon : link.name}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
