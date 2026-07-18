import React, { useState } from "react";
import { devProjects } from "./webDevProjects";
import { motion } from "motion/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectModal from "../ProjectModal";

const DevProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const container = {
    hidden: {
      opacity: 0,
    },
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const defaultTransition = { duration: 0.6, ease: "easeOut", delay: 0.1 };

  return (
    <section id="projects" className="bg-[#111418] py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={defaultTransition}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-[#9dabb9] text-lg max-w-2xl mx-auto">
            Here are some of the web development projects I've worked on
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {devProjects.map((devProject) => (
            <motion.div
              variants={item}
              key={devProject.id}
              whileHover={{ y: -10 }}
              className="bg-[#1b1e24] rounded-xl overflow-hidden border border-[#283039] hover:border-[#1174d5] transition-all duration-300 flex flex-col"
            >
              <div className=" overflow-hidden">
                <img
                  src={devProject.image}
                  alt={devProject.title}
                  className="w-full h-52 object-cover transition-transform duration-300 hover:scale-110"
                />
                
              </div>
              
              <div className="p-4 md:p-3 flex flex-col flex-1">
              <div className="flex flex-row justify-between items-center">
                  <h3 className="text-white text-xl font-bold mb-3">
                  {devProject.title}
                </h3>
                <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm ${
                      devProject.status === "Completed"
                        ? "bg-green-500/20 text-white border border-green-400"
                        : "bg-yellow-500/20 text-white border border-yellow-400"
                    }`}
                  >
                    {devProject.status}
                  </span>
              </div>
                <p className="text-[#9dabb9] text-sm mb-4 flex-1 leading-relaxed">
                  {devProject.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {devProject.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#1174d5]/10 text-[#1174d5] text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {devProject.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-[#283039] text-[#9dabb9] text-xs rounded-md">
                      +{devProject.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-3 mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleViewDetails(devProject)}
                    className="flex-1 bg-[#1174d5] text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#0d5bb8] transition-colors"
                  >
                    View Details
                  </motion.button>
                  {devProject.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={devProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#283039] text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#3a4452] transition-colors"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live
                    </motion.a>
                  )}
                  {devProject.repoUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={devProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#283039] text-white px-4 py-2 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#3a4452] transition-colors"
                    >
                      <FaGithub size={14} />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default DevProjects;
