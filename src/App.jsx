import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import SocialConnections from "./components/SocialConnections";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import { Route , Routes } from 'react-router-dom';
import Combine from "./components/Combine";

function App() {
  return (
   <>
      <Navbar />
      {/* <Home />
      <SocialConnections />
      <AboutMe />
      <Projects />
      <Technologies />
      <Contact /> */}
      <Routes>
        <Route path="/" element={<Combine />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
   </>
  );
}

export default App;
