import React from "react";
import Image from "../../src/assets/me.png";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    'Tailwind CSS',
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "Machine Learning",
    "Data Visualization",
    "Git",
  ];
  return (
    <div className="bg-[#111418] flex flex-col md:h-screen gap-5 w-full  mt-16 pb-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-3 md:w-[60%] ">
        <img
          className="w-[200px] h-[200px] rounded-full object-cover 
             border-4 border-[#283039] shadow-lg shadow-black/40
             hover:scale-105 transition-transform duration-300 ease-in-out"
          src={Image}
          alt="Stanley"
        />

        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-[#e5e5e5] font-bold text-3xl">Stanley Amunze</h2>
          <span className="text-[#6a747e]">Web Developer & Data Scientist</span>
          <p className="text-[#6a747e]">Based in Ongata Rongai, KE</p>
        </div>
      </div>
      <div className="w-full md:w-[80%] mx-auto flex md:flex-row flex-col gap-4 items-center justify-center md:justify-items-center">
        <div className="flex flex-col gap-5 w-[80%] md:w-2/3 ">
          <div className="flex flex-col gap-3 w-full justify-center">
            <h3 className="text-[#e5e5e5] text-2xl font-bold">About Me</h3>
            <p className="text-[#9dabb9] text-base font-normal leading-normal">
              I am a versatile web developer and data scientist with a passion
              for creating innovative solutions. My expertise spans front-end
              and back-end development, as well as data analysis and machine
              learning. I thrive on tackling complex challenges and delivering
              impactful results.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full justify-center">
            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] ">
              Interests
            </h2>
            <p className="text-[#9dabb9] text-base font-normal leading-normal">
              Outside of work, I enjoy exploring new technologies and staying active through gaming and
              watching anime. I also have a keen interest in video editing .
            </p>
          </div>
        </div>
        <div className="w-[80%] flex flex-col gap-3 md:w-1/3">
          <div className="flex flex-col gap-3 w-full justify-center">
            <h2 className="text-[#e5e5e5] text-2xl font-bold">Skills</h2>
            <ul className="flex flex-wrap  gap-4">
              {skills.map((skill) => (
                <li className="text-[#e5e5e5] text-[12px] bg-[#283039] rounded-md p-2 font-bold">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex flex-col gap-3 w-full justify-center">
              <h2 className="text-[#e5e5e5] text-2xl font-bold">Education</h2>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[#e5e5e5] text-[20px] ">
                  Murang'a University of Technology
                </h3>
                <p className="text-[#9dabb9]">
                  Bachelor of Science in Computer Technolody - Second Class Upper Division
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
