import React from "react";
import { useParams } from "react-router-dom";
import { devProjects } from "./webDevProjects";
import { CiCircleCheck } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";
import { FaCode } from "react-icons/fa";

const DevProDetails = () => {
  const { id } = useParams();
  const project = devProjects.find((p) => p.id === parseInt(id));

  return (
    <div className=" bg-[#111418] flex flex-col items-center gap-3 w-full p-3  mt-16 pb-2">
      <div className="w-[80%]">
        <div className="flex flex-col gap-2">
          <h2 className="text-[25px] text-white font-bold">{project.title}</h2>
          <p className="text-[#9dabb9]">{project.description}</p>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="flex flex-col gap-2 md:w-2/3">
            <h3 className="text-white text-[17px] font-bold">
              Project Overview
            </h3>
            <p className="text-[#9dabb9]">{project.overview}</p>
            <h3 className="text-white text-[17px] font-bold">Visual</h3>
            <img src={project.image} className="rounded-lg" alt="" />
          </div>
          <div className="flex flex-col gap-3 md:w-1/3">
            <h3 className="text-white text-[17px] font-bold">Key Features</h3>
            <ul className="flex flex-col gap-2">
              {project.keyFeatures.map((keyFeature) => (
                <li className="flex flex-row gap-3 items-center text-[#9dabb9]">
                  <p className="text-[#114f8e] font-bold">
                    <CiCircleCheck />
                  </p>
                  {keyFeature}
                </li>
              ))}
            </ul>
            <h3 className="text-white text-[17px] font-bold">
              Technologies Used
            </h3>
            <ul className="flex flex-wrap  gap-4">
              {project.technologies.map((technology) => (
                <li className="text-[#e5e5e5] text-[12px] bg-[#283039] rounded-md p-2 font-bold">
                  {technology}
                </li>
              ))}
            </ul>
            <h3 className="text-white text-[17px] font-bold">Links</h3>
            <a
              href={project.liveUrl}
              className="bg-[#1173d5] hover:bg-[#9dabb9] hover:text-black flex flex-row items-center justify-center gap-2 font-semibold text-white rounded-md p-2"
            >
              <span>
                <FiExternalLink />
              </span>
              Live Demo
            </a>
            <a
              href={project.repoUrl}
              className="bg-[#293139] hover:bg-[#9dabb9] hover:text-black flex flex-row items-center justify-center gap-2 font-semibold text-white rounded-md p-2"
            >
              <span>
                <FaCode />
              </span>
              Repository
            </a>
            <p className=" text-white font-semibold text-[13px]">{project.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevProDetails;
