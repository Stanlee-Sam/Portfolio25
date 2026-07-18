import React from "react";
import Image from "../assets/me.png";
import HeroImg from "../assets/hero_icon.png"
import { motion } from "motion/react";
import { BsDiamondHalf } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

const Hero = () => {
  const defaultTransition = { duration: 0.6, ease: "easeOut", delay: 0.1 };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#111418] pt-16 pb-5 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#111418] via-[#111418] to-[#0a0d10] opacity-50"></div>
      
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-20 h-20 bg-[#1174d5] rounded-full opacity-10 blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-20 w-32 h-32 bg-[#1174d5] rounded-full opacity-10 blur-xl"
      />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={defaultTransition}
            className="flex-1 text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#1174d5] font-semibold text-lg mb-4"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4"
            >
              Stanley Amunze
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-[#9dabb9] mb-6"
            >
              Web Developer & Data Scientist
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[#6a747e] text-lg mb-8 max-w-xl"
            >
              I build scalable web applications, data-driven solutions, and innovative digital experiences. 
              Passionate about transforming complex problems into elegant solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="bg-[#1174d5] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0d5bb8] transition-colors text-center"
              >
                View Projects
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="border-2 border-[#1174d5] text-[#1174d5] px-8 py-3 rounded-full font-semibold hover:bg-[#1174d5] hover:text-white transition-colors text-center"
              >
                Contact Me
              </motion.a>
            </motion.div>
            
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="hidden md flex gap-4 mt-8 justify-center md:justify-start"
            >
              <a
                href="https://github.com/Stanlee-Sam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#283039] rounded-full flex items-center justify-center text-[#e5e5e5] hover:bg-[#1174d5] hover:text-white transition-all duration-300"
              >
                <LuGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/stanley-amunze/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#283039] rounded-full flex items-center justify-center text-[#e5e5e5] hover:bg-[#1174d5] hover:text-white transition-all duration-300"
              >
                <CiLinkedin size={24} />
              </a>
            </motion.div> */}
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={defaultTransition}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#1174d5] shadow-2xl shadow-[#1174d5]/20"
              >
                <img
                  src={HeroImg}
                  alt="Stanley Amunze"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Floating tech icons */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-[#283039] rounded-full flex items-center justify-center text-[#1174d5] text-2xl shadow-lg"
              >
                <FaReact />
              </motion.div>
              
              {/* PostgreSQL icon */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 -left-8 w-14 h-14 bg-[#283039] rounded-full flex items-center justify-center text-[#336791] text-2xl shadow-lg"
              >
                <SiPostgresql />
              </motion.div>
              
              {/* Node.js icon */}
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-10 -right-8 w-14 h-14 bg-[#283039] rounded-full flex items-center justify-center text-[#339933] text-2xl shadow-lg"
              >
                <FaNodeJs />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-20 left-0 w-12 h-12 bg-[#283039] rounded-full flex items-center justify-center text-[#3776AB] text-xl shadow-lg"
              >
                <FaPython />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
