import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { CiCircleCheck } from "react-icons/ci";
import { FiExternalLink } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1b1e24] rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto border border-[#283039] relative"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#283039 transparent'
              }}
            >
              <div className="p-6 md:p-8">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 bg-[#283039] rounded-full flex items-center justify-center text-white hover:bg-[#1174d5] transition-colors z-10"
                >
                  <IoMdClose size={24} />
                </button>

                {/* Header */}
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex flex-row  items-center gap-5">
                    <h2 className="text-2xl md:text-3xl text-white font-bold">
                      {project.title}
                    </h2>
                    {/* <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                      }`}
                    >
                      {project.status}
                    </span> */}
                  </div>
                  <p className="text-[#9dabb9]">{project.description}</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left side - Overview and Image */}
                  <div className="flex flex-col gap-4 lg:w-2/3">
                    <div>
                      <h3 className="text-white text-lg font-bold mb-2">
                        Project Overview
                      </h3>
                      <p className="text-[#9dabb9] leading-relaxed">
                        {project.overview}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-white text-lg font-bold mb-3">
                        Visual
                      </h3>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-lg w-full object-cover max-h-80"
                      />
                    </div>
                  </div>

                  {/* Right side - Features, Tech, Links */}
                  <div className="flex flex-col gap-4 lg:w-1/3">
                    <div>
                      <h3 className="text-white text-lg font-bold mb-3">
                        Key Features
                      </h3>
                      <motion.ul
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-2"
                      >
                        {project.keyFeatures.map((keyFeature, index) => (
                          <motion.li
                            key={index}
                            variants={item}
                            className="flex flex-row gap-3 items-center text-[#9dabb9]"
                          >
                            <span className="text-[#1174d5] flex-shrink-0">
                              <CiCircleCheck size={20} />
                            </span>
                            {keyFeature}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>

                    <div>
                      <h3 className="text-white text-lg font-bold mb-3">
                        Technologies Used
                      </h3>
                      <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-wrap gap-2"
                      >
                        {project.technologies.map((technology, index) => (
                          <motion.span
                            key={index}
                            variants={item}
                            className="text-[#e5e5e5] text-xs bg-[#283039] rounded-md px-3 py-1.5 font-semibold"
                          >
                            {technology}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <h3 className="text-white text-lg font-bold">Links</h3>
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#1174d5] hover:bg-[#0d5bb8] flex flex-row items-center justify-center gap-2 font-semibold text-white rounded-lg p-3 transition-colors"
                        >
                          <FiExternalLink size={18} />
                          Live Demo
                        </motion.a>
                      )}
                      {project.repoUrl && (
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#283039] hover:bg-[#3a4452] flex flex-row items-center justify-center gap-2 font-semibold text-white rounded-lg p-3 transition-colors"
                        >
                          <FaCode size={18} />
                          Repository
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
