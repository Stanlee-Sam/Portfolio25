import React from "react";
import { BsDiamondHalf } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="bg-[#111418] w-full flex h-[13vh] p-2 border-b border-b-[#e5e5e5] ">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-row  items-center gap-2 ">
          <span className="text-[#1174d5]">
            <BsDiamondHalf />
          </span>
          <h3 className="text-[#e5e5e5] font-bold">Stanley's Portfolio</h3>
        </div>
        <div className="flex flex-row items-center gap-4">
          <ul className="text-[#6a747e] flex flex-row gap-4 font-semibold">
            <li className="hover:text-[#e5e5e5] cursor-pointer hover:bg-[#283039] p-2 rounded-md">About</li>
            <li className="hover:text-[#e5e5e5] cursor-pointer hover:bg-[#283039] p-2 rounded-md">Projects</li>
            <li className="hover:text-[#e5e5e5] cursor-pointer hover:bg-[#283039] p-2 rounded-md">Contact</li>
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
