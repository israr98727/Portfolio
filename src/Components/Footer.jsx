import { FaDiscord } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-teal-300 py-10 px-4">
      <div className="container  grid grid-cols-1  md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Contact Info Section */}
        <div>
          <h2 className="text-lg font-semibold text-teal-400 mb-2">Contact</h2>
          <p className="flex items-center justify-center md:justify-start">
            <FiMail className="mr-2" /> israr98727@gmail.com
          </p>
          <p className="flex items-center justify-center md:justify-start mt-2">
            <FiPhone className="mr-2" /> +923278695581
          </p>
          <p className="flex items-center justify-center md:justify-start mt-2">
            <FiMapPin className="mr-2" /> Islamabad, Pakistan
          </p>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-lg font-semibold text-teal-400 mb-2">Follow Me</h2>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="www.linkedin.com/in/israr-ahmed-199630302" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-teal-400 transition">
              <FiLinkedin size={24} />
            </a>
            <a href="https://github.com/israr98727" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-teal-400 transition">
              <FiGithub size={24} />
            </a>
            <a href="https://discord.com/channels/@israrahmed98727" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:text-teal-400 transition">
              <FaDiscord size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col items-center md:items-start mt-6 md:mt-0">
          <h2 className="text-lg font-semibold text-teal-400 mb-2">© 2023 Israr Ahmed</h2>
          <p className="text-gray-500 text-xs">All rights reserved.</p>
          <p className="text-gray-500 text-xs">Built React and Tailwind CSS</p>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-teal-700 mt-8 pt-4 text-center text-xs text-gray-500">
        Designed by Israr Ahmed - Portfolio 2024
      </div>
    </footer>
  );
};

export default Footer;
