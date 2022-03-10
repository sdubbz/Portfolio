import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Particlez from "./components/particles";
import Canvas from "./components/canvas";
import Projects from "./components/Projects";
import Email from "./components/Email";
import BgCanvas from "./components/bgCanvas";
import HomeAbout from "./components/homeAbout";
import LandingButton from "./components/landingButton";

export const App = () => {
  return (
    <div>

      <Routes>

        <Route path="/" element={
          // <div>
          // <img className="bgPic" src="images/cocktailsDreams.jpeg"/>
          //  <Canvas className="canvas" />
          //  </div>
          <div>
            <img className="bgPic" src="images/cocktailsDreams.jpeg"/>
          <Canvas className="canvas" />
          {/* <BgCanvas className="bgCanvas" /> */}
          <div className="layout">
        {/* <Nav className="nav" /> */}
          <LandingButton />
             {/* <BgCanvas className="bgCanvas" /> */}
      </div></div>}/>
        {/* }/> */}
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects classname="projects"/>}/>
        <Route path='email' element={<Email/>}/>
      </Routes>
    </div>
  );
};

export default App;
