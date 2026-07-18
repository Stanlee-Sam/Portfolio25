import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import DevProjects from "./Components/DevProjects/DevProjects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="bg-[#111418]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <DevProjects />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
