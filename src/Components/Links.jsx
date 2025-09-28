import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="flex flex-row justify-evenly  items-center">
      <Link
        to="/projects/"
        className="text-[15px] md:text-[20px] text-center  w-full font-bold cursor-pointer hover:bg-gray-800 p-2 rounded-md  text-white hover:text-black  transition-colors duration-300 ease-in-out active:bg-[#59bdf1] active:text-white"
      >
        Web Development
      </Link>
      <span className="font-bold text-[17px] text-white"> | </span>
      <Link
        to="/dataprojects"
        className="text-[15px] md:text-[20px] text-center  w-full font-bold cursor-pointer hover:bg-gray-800 p-2 rounded-md  text-white hover:text-black  transition-colors duration-300 ease-in-out active:bg-[#59bdf1] active:text-white"
      >
        Data Science
      </Link>
    </div>
  );
};

export default Links;
