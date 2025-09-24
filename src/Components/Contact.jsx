import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-[#111418] flex items-center justify-center min-h-screen ">
      <div className=" pt-3 flex flex-col md:flex-row items-center md:justify-items-center mx-auto gap-5 w-full md:w-[80%] ">
        <div className="w-[80%] md:w-1/2 flex flex-col gap-5">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-white text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
              Get in Touch
            </h2>
            <p className="text-[#9dabb9] text-base font-normal leading-normal">
              I'm activeley looking for new opportunities and would love to hear
              from you. Whether you have a question, a project propasal or just
              want to say hi, feel free to reach out.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-row gap-3">
              <div className="bg-[#1e293b] flex items-center rounded-md p-2 text-2xl text-white">
                <MdOutlineMail />
              </div>
              <div>
                <h3 className="text-white font-bold text-[15px]">Email</h3>
                <p className="text-[#9dabb9]">stanley03amunze@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="bg-[#1e293b] flex items-center rounded-md p-2 text-2xl text-white">
                <CiLinkedin />
              </div>
              <div>
                <h3 className="text-white font-bold text-[15px]">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/stanley-amunze/" className="text-[#9dabb9]">linkedin.com/in/stanley-amunze/</a>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="bg-[#1e293b] flex items-center rounded-md p-2 text-2xl text-white">
                <LuGithub />
              </div>
              <div>
                <h3 className="text-white font-bold text-[15px]">GitHub</h3>
                <a href="https://github.com/Stanlee-Sam" className="text-[#9dabb9]">github.com/Stanlee-Sam</a>
              </div>
            </div>
          </div>
        </div>
        <form
          action=""
          className="w-[80%] md:w-1/2 bg-[#101621] rounded-md p-3 border-1 border-[#9dabb9] flex flex-col items-center justify-center mx-auto gap-3"
        >
          <div className="flex flex-col gap-2 w-[90%]">
            <label htmlFor="" className="text-white font-semibold text-[15px]">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="text-[#9dabb9] border-1 p-2 rounded-md border-[#9dabb9] bg-[#1e293b]"
            />
          </div>
          <div className="flex flex-col gap-2 w-[90%]">
            <label htmlFor="" className="text-white font-semibold text-[15px]">
              Email address
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="text-[#9dabb9] border-1 p-2 rounded-md border-[#9dabb9] bg-[#1e293b]"
            />
          </div>
          <div className="flex flex-col gap-2 w-[90%]">
            <label htmlFor="" className="text-white font-semibold text-[15px]">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter the subject"
              className="text-[#9dabb9] border-1 p-2 rounded-md border-[#9dabb9] bg-[#1e293b] "
            />
          </div>
          <div className="flex flex-col gap-2 w-[90%]">
            <label htmlFor="" className="text-white font-semibold text-[15px]">
              Message
            </label>
            <textarea
              name=""
              placeholder="Enter your message"
              id=""
              className="text-[#9dabb9] border-1 p-2 rounded-md border-[#9dabb9] bg-[#1e293b] resize-none "
            ></textarea>
          </div>
          <div className="w-[90%] flex justify-center ">
            <button type="submit"
            className="bg-[#1173d4] font-bold text-white rounded-md p-2 cursor-pointer hover:bg-[#9dabb9] hover:text-black w-full"
            >Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
