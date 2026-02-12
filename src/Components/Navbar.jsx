import React, { useState } from "react";
import { BsDiamondHalf } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-[#111418] border-b border-[#e5e5e5] z-50 flex items-center px-4">
      {" "}
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-row  items-center gap-2 ">
          <span className="text-[#1174d5]">
            <BsDiamondHalf />
          </span>
          <h3 className="text-[#e5e5e5] font-bold">Stanley's Portfolio</h3>
        </div>
        <div className="hidden md:flex md:flex-row items-center gap-4">
          <ul className="text-[#6a747e] flex flex-row gap-4 font-semibold">
            <Link
              to="/"
              className="hover:text-[#e5e5e5] cursor-pointer hover:bg-[#283039] p-2 rounded-md"
            >
              About
            </Link>
            <Link
              to="/webprojects/"
              className="hover:text-[#e5e5e5] cursor-pointer hover:bg-[#283039] p-2 rounded-md"
            >
              Projects
            </Link>
            {/* <Link
              to="/dataprojects/"
              className="hover:text-[#e5e5e5] cursor-pointer hover:bg-[#283039] p-2 rounded-md"
            >
              Data Science
            </Link> */}

            <Link
              to="/contact"
              className="hover:text-[#e5e5e5] cursor-pointer hover:bg-[#283039] p-2 rounded-md"
            >
              Contact
            </Link>
          </ul>
          <div className="flex flex-row gap-2">
            <a
              href="https://github.com/Stanlee-Sam"
              className="bg-[#283039] rounded-full p-2 text-[#e5e5e5] cursor-pointer hover:bg-[#e5e5e5] hover:text-black"
            >
              <LuGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/stanley-amunze/"
              className="bg-[#283039] rounded-full p-2 text-[#e5e5e5] cursor-pointer hover:bg-[#e5e5e5] hover:text-black"
            >
              <CiLinkedin />
            </a>
          </div>
        </div>
        {isOpen && (
          <div
            className={`fixed top-0 right-0 z-40 h-full w-full bg-[#111418] md:hidden flex flex-col items-center gap-2 pt-20  border-black  transition-all duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <hr className="border-t-2 border-white w-4/5" />
            <Link
              to="/"
              onClick={toggleHamburger}
              style={{ fontFamily: "'Bree Serif'" }}
              className="w-[80%] rounded-lg  py-2 text-center  text-white text-lg font-bold cursor-pointer hover:bg-[#1174d5]  hover:text-white transition-colors duration-300"
            >
              About
            </Link>
            <hr className="border-t-2 border-white w-4/5" />
            <Link
              to="/webprojects/"
              onClick={toggleHamburger}
              style={{ fontFamily: "'Bree Serif'" }}
              className="w-[80%] rounded-lg  py-2 text-center  text-white text-lg font-bold cursor-pointer hover:bg-[#1174d5]  hover:text-white transition-colors duration-300"
            >
              Projects
            </Link>
            <hr className="border-t-2 border-white w-4/5" />
            {/* <Link
              to="/dataprojects/"
              onClick={toggleHamburger}
              style={{ fontFamily: "'Bree Serif'" }}
              className="w-[80%] rounded-lg  py-2 text-center  text-white text-lg font-bold cursor-pointer hover:bg-[#1174d5]  hover:text-white transition-colors duration-300"
            >
              Data Science
            </Link>
            <hr className="border-t-2 border-white w-4/5" /> */}
            <Link
              to="/contact"
              onClick={toggleHamburger}
              style={{ fontFamily: "'Bree Serif'" }}
              className="w-[80%] rounded-lg  py-2 text-center  text-white text-lg font-bold cursor-pointer hover:bg-[#1174d5]  hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
            <hr className="border-t-2 border-white w-4/5" />
            <div className="absolute top-4 right-4 text-3xl text-white cursor-pointer hover:text-[#1174d5]">
              <IoMdClose onClick={toggleHamburger} />
            </div>
          </div>
        )}
        {!isOpen && (
          <div
            className="md:hidden text-white text-2xl hover:text-[#1174d5]"
            onClick={toggleHamburger}
          >
            <MdOutlineMenu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
