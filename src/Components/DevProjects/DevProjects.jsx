import React from "react";
import { devProjects } from "./webDevProjects";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const DevProjects = () => {
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#111418]  flex flex-col items-center pt-3 gap-3 w-full mt-16 pb-16">
      <div className="w-[80%] flex flex-col items-center gap-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-white text-[20px] text-center md:text-4xl font-bold leading-tight tracking-[-0.015em] mb-4"
        >
          Web Development Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-[#575f68] text-center text-[15px] md:text-[20px] font-semibold"
        >
          Here are some of the web development projects I have worked on. Click
          to see more details.
        </motion.p>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-stretch gap-4 w-full"
        >
          {devProjects.map((devProject) => (
            <motion.li
              variants={item}
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
                <div className="flex flex-row w-full justify-between items-center">
                  <h3 className="text-[#949494] text-[23px] font-bold">
                    {devProject.title}
                  </h3>
                  <span
                    className={`px-2 py-1 text-[11px] font-semibold rounded ${
                      devProject.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-300"
                    }`}
                  >
                    {devProject.status}
                  </span>
                </div>
                <p className="text-[#575f68] text-[16px] flex-1">
                  {devProject.description}
                </p>
                <motion.div
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="flex flex-row justify-center items-center w-full"
                >
                  <Link
                    to={`/project/${devProject.id}`}
                    className="hover:bg-[#283039] rounded-md p-2 font-bold cursor-pointer hover:text-white bg-white text-center mt-auto w-full"
                  >
                    More Details
                  </Link>
                </motion.div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default DevProjects;
