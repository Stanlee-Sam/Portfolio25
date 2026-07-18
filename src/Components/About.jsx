import React from "react";
import { motion } from "motion/react";
import { FaGraduationCap, FaCode, FaHeart } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";

const About = () => {
  const defaultTransition = { duration: 0.6, ease: "easeOut", delay: 0.1 };

  return (
    <section id="about" className="bg-[#111418] py-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={defaultTransition}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-[#9dabb9] text-lg max-w-2xl mx-auto">
            Get to know me better
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {/* My Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="w-14 h-14 bg-[#1174d5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <FaCode className="text-[#1174d5] text-2xl" />
            </div>
            <div>
              <h3 className="text-white font-bold text-2xl mb-4">My Journey</h3>
              <p className="text-[#9dabb9] leading-relaxed text-lg">
                My journey into tech started with curiosity about how things work on the web. From building my first simple HTML pages to now developing full-stack applications and working with machine learning models, I've been driven by a desire to solve real-world problems through technology. I'm constantly learning and adapting to new tools and methodologies.
              </p>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="w-14 h-14 bg-[#1174d5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <FaHeart className="text-[#1174d5] text-2xl" />
            </div>
            <div>
              <h3 className="text-white font-bold text-2xl mb-4">Interests</h3>
              <p className="text-[#9dabb9] leading-relaxed text-lg">
                Outside of work, I enjoy exploring new technologies and staying active through gaming and watching anime. I also have a keen interest in video editing and creative content creation.
              </p>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={defaultTransition}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="w-14 h-14 bg-[#1174d5]/10 rounded-xl flex items-center justify-center flex-shrink-0">
              <FaGraduationCap className="text-[#1174d5] text-2xl" />
            </div>
            <div>
              <h3 className="text-white font-bold text-2xl mb-4">Education</h3>
              <div className="text-[#9dabb9] text-lg">
                <p className="font-semibold text-white text-xl">Murang'a University of Technology</p>
                <p className="mt-2">
                  Bachelor of Science in Computer Technology
                </p>
                <div className="inline-flex items-center gap-2 font-semibold mt-2 bg-[#1174d5]/10 px-3 py-1 rounded-full border border-[#1174d5]/20">
                  <GiAchievement className="text-[#1174d5] text-lg" />
                  <span className="text-[#1174d5] text-sm">
                    Second Class Upper Division
                  </span>
                </div>
                
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
