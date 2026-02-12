import React from "react";
import { devProjects } from "./webDevProjects";
import { Link } from "react-router-dom";

const DevProjects = () => {
  return (
    <div className="bg-[#111418]  flex flex-col items-center pt-3 gap-3  mt-16 w-full pb-4">
      <div className="w-[80%] flex flex-col items-center gap-4">
        <h2 className="text-white text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
          Web Development Projects
        </h2>
        <p className="text-[#575f68] text-center text-[20px] font-semibold">
          Here are some of the web development projects I have worked on. Click
          to see more details.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-stretch gap-4 w-full">
          {devProjects.map((devProject) => (
            <li
              key={devProject.id}
              className="bg-[#1b1e24] rounded-md w-full h-full flex flex-col overflow-hidden"
            >
              <div className="w-full">
                <img
                  src={devProject.image}
                  alt={devProject.title}
                  className="w-full h-52 object-cover"
                />
              </div>
              <div className="p-3 flex flex-col gap-3 flex-1">
                <h3 className="text-[#949494] text-[23px] font-bold">
                  {devProject.title}
                </h3>
                <p className="text-[#575f68] text-[16px] flex-1">
                  {devProject.description}
                </p>
                <Link
                  to={`/project/${devProject.id}`}
                  className="hover:bg-[#283039] rounded-md p-2 font-bold cursor-pointer hover:text-white bg-white text-center mt-auto"
                >
                  More Details
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DevProjects;
