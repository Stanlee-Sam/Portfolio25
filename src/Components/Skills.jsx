import React from "react";
import { motion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaServer,
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaChartLine,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiExpress, SiPostgresql } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "SQL", icon: FaDatabase, color: "#4479A1" },
    { name: "Machine Learning", icon: FaBrain, color: "#FF6F61" },
    { name: "Data Visualization", icon: FaChartLine, color: "#4CAF50" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
    <section id="skills" className="bg-[#111418] py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={defaultTransition}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-[#9dabb9] text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1b1e24] rounded-xl p-6 flex flex-col items-center justify-center gap-3 border border-[#283039] hover:border-[#1174d5] transition-all duration-300 group"
            >
              <skill.icon
                size={48}
                className="text-[#1174d5] group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-white font-semibold text-center text-sm">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
