import React from "react";
import { useParams } from "react-router-dom";
import { devProjects } from "./webDevProjects";
import { CiCircleCheck } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { motion } from "motion/react";

const DevProDetails = () => {
  const { id } = useParams();
  const project = devProjects.find((p) => p.id === parseInt(id));

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4, delayChildren: 1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className=" bg-[#111418] flex flex-col items-center gap-3 w-full p-3  mt-16 pb-16">
      <div className="w-[80%] flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2"
        >
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-[25px] text-white font-bold">
              {project.title}
            </h2>
            <span
              className={`px-2 py-1 text-[11px] font-semibold rounded ${
                project.status === "Completed"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-yellow-500/20 text-yellow-300"
              }`}
            >
              {project.status}
            </span>
          </div>
          <p className="text-[#9dabb9]">{project.description}</p>
        </motion.div>
        <div className="w-full flex flex-col md:flex-row gap-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2 md:w-2/3"
          >
            <h3 className="text-white text-[17px] font-bold">
              Project Overview
            </h3>
            <p className="text-[#9dabb9]">{project.overview}</p>
            <h3 className="text-white text-[17px] font-bold">Visual</h3>
            <img src={project.image} className="rounded-lg" alt="" />
          </motion.div>
          <div className="flex flex-col gap-3 md:w-1/3">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="text-white text-[17px] font-bold"
            >
              Key Features
            </motion.h3>
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-2"
            >
              {project.keyFeatures.map((keyFeature) => (
                <motion.li
                  variants={item}
                  className="flex flex-row gap-3 items-center text-[#9dabb9]"
                >
                  <p className="text-[#114f8e] font-bold">
                    <CiCircleCheck />
                  </p>
                  {keyFeature}
                </motion.li>
              ))}
            </motion.ul>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="text-white text-[17px] font-bold"
            >
              Technologies Used
            </motion.h3>
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-wrap  gap-4"
            >
              {project.technologies.map((technology) => (
                <motion.li
                  variants={item}
                  className="text-[#e5e5e5] text-[12px] bg-[#283039] rounded-md p-2 font-bold"
                >
                  {technology}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 3 }}
              viewport={{ once: true }}
              className="w-full flex flex-col gap-5"
            >
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                className="text-white text-[17px] font-bold"
              >
                Links
              </motion.h3>
              <motion.div
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <a
                  href={project.liveUrl}
                  className="bg-[#1173d5] hover:bg-[#9dabb9] hover:text-black flex flex-row items-center justify-center gap-2 font-semibold text-white rounded-md p-2"
                >
                  <span>
                    <FiExternalLink />
                  </span>
                  Live Demo
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <a
                  href={project.repoUrl}
                  className="bg-[#293139] hover:bg-[#9dabb9] hover:text-black flex flex-row items-center justify-center gap-2 font-semibold text-white rounded-md p-2"
                >
                  <span>
                    <FaCode />
                  </span>
                  Repository
                </a>
              </motion.div>

              <p className=" text-white font-semibold text-[13px]">
                {project.note}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevProDetails;
