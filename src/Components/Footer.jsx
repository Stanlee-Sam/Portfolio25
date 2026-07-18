import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { BsDiamondHalf } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0d10] py-8 border-t border-[#283039]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and name */}
          <div className="flex items-center gap-2">
            <span className="text-[#1174d5]">
              <BsDiamondHalf />
            </span>
            <h3 className="text-[#e5e5e5] font-bold">Stanley's Portfolio</h3>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-[#9dabb9] text-sm">
              &copy; {currentYear} Stanley Amunze. All rights reserved.
            </p>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Stanlee-Sam"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#283039] rounded-full flex items-center justify-center text-[#e5e5e5] hover:bg-[#1174d5] hover:text-white transition-all duration-300"
            >
              <LuGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/stanley-amunze/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#283039] rounded-full flex items-center justify-center text-[#e5e5e5] hover:bg-[#1174d5] hover:text-white transition-all duration-300"
            >
              <CiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
