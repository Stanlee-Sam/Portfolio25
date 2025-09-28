import React from "react";
import { Routes, Route } from "react-router-dom";
import DevProjects from "./DevProjects/DevProjects";
import Links from "./Links";
import DataProjects from "./DataProjects/DataProjects";

const Projects = () => {
  return (
    <div className="bg-[#111418]  flex items-center justify-center  h-[calc(100vh-64px)] mt-16 w-full ">
      <div className="w-[80%]">
        <div>
          {/* <Links /> */}
        </div>
        <div>
          {/* <Routes>
            <Route path="/" element={<DevProjects />} />
            <Route path="/dataprojects" element={<DataProjects />} />
          </Routes> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
