import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import DevProDetails from './Components/DevProjects/DevProDetails'
import { Route, Routes } from "react-router-dom";
import DevProjects from "./Components/DevProjects/DevProjects";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className="bg-[#111418]">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/webprojects/*" element={<DevProjects />} />
        <Route path="/project/:id" element={<DevProDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
