import React from "react";
import { motion } from "motion/react";
import { FaLaptopCode, FaServer, FaBrain, FaPalette, FaCloud, FaShieldAlt } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: FaLaptopCode,
      title: "Full-Stack Web Development",
      description: "Building modern, responsive web applications using React, Next.js, Node.js, and more",
    },
    {
      icon: FaServer,
      title: "API & Backend Development",
      description: "Creating robust RESTful APIs and backend systems with Express, PostgreSQL, and authentication",
    },
    {
      icon: FaBrain,
      title: "Data Science & ML",
      description: "Developing data-driven solutions, machine learning models, and data visualization dashboards",
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and experiences with modern design principles",
    },
    {
      icon: FaCloud,
      title: "Cloud Deployment",
      description: "Deploying and managing applications on cloud platforms like Vercel, with CI/CD pipelines",
    },
    {
      icon: FaShieldAlt,
      title: "Technical Consultation",
      description: "Providing expert guidance on technology stack selection, architecture, and best practices",
    },
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
    <section id="services" className="bg-[#111418] py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={defaultTransition}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Services
          </h2>
          <p className="text-[#9dabb9] text-lg max-w-2xl mx-auto">
            Solutions I offer to help bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#1b1e24] rounded-xl p-8 flex flex-col items-center text-center gap-4 border border-[#283039] hover:border-[#1174d5] transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-[#1174d5]/10 rounded-full flex items-center justify-center group-hover:bg-[#1174d5]/20 transition-colors duration-300">
                <service.icon size={32} className="text-[#1174d5]" />
              </div>
              <h3 className="text-white font-bold text-xl">{service.title}</h3>
              <p className="text-[#9dabb9] text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
