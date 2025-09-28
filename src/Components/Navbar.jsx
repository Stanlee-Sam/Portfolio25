import React from "react";
import { BsDiamondHalf } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
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
        <div className="flex flex-row items-center gap-4">
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
              Web Development
            </Link>
            <Link
              to="/dataprojects/"
              className="hover:text-[#e5e5e5] cursor-pointer hover:bg-[#283039] p-2 rounded-md"
            >
              Data Science
            </Link>

            <Link
              to="/contact"
              className="hover:text-[#e5e5e5] cursor-pointer hover:bg-[#283039] p-2 rounded-md"
            >
              Contact
            </Link>
          </ul>
          <div className="flex flex-row gap-2">
            <button className="bg-[#283039] rounded-full p-2 text-[#e5e5e5] cursor-pointer hover:bg-[#e5e5e5] hover:text-black">
              <LuGithub />
            </button>
            <button className="bg-[#283039] rounded-full p-2 text-[#e5e5e5] cursor-pointer hover:bg-[#e5e5e5] hover:text-black">
              <CiLinkedin />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
