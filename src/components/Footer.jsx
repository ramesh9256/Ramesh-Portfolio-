import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 text-center">
      <p className="text-lg mb-4">© 2025 My Portfolio. All rights reserved.</p>
      <div className="flex justify-center gap-6 text-2xl">
        <a 
          href="https://www.instagram.com/ramesh0003" 
          target="_blank" 
          rel="noopener noreferrer" 
          className=" text-[30px] hover:text-pink-600 transition-colors duration-300"
        >
          <FaInstagram />
        </a>
        <a 
          href="https://github.com/ramesh9256" 
          target="_blank" 
          rel="noopener noreferrer" 
          className=" text-[30px] hover:text-gray-500 transition-colors duration-300"
        >
          <IoLogoGithub />
        </a>
        <a 
          href="tel:+919256746259" 
          className="text-[28px] hover:text-green-500 transition-colors duration-300"
        >
          <FaPhoneAlt />
        </a>
        <a 
          href="https://www.linkedin.com/in/ramesh-kumar-xyz" 
          target="_blank" 
          rel="noopener noreferrer" 
          className=" text-[30px] hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedinIn />
        </a>
        <a 
          href="mailto:9256.ramesh.gmail.com" 
          className=" text-[30px] hover:text-yellow-400 transition-colors duration-300"
        >
          <CgMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
