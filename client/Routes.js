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
        <Route
          path="/"
          element={
            <div>
              <img className="bgPic" src="images/cocktailsDreams.jpeg" />
              <Canvas className="canvas" />

              <div className="layout">
                <LandingButton />
              </div>
            </div>
          }
        />

        <Route
          path="/home"
          element={
            // <div >
            //   {/* <img className="bgPic" src="images/espresso.jpeg" /> */}
            //   <div className="layout">
            //     {/* <Nav className="nav" /> */}
                <Home/>
            //     {/* <BgCanvas className="bgCanvas" /> */}
            //   </div>
            // </div>
          }
        />
        <Route path="/projects" element={<Projects classname="projects" />} />
        <Route path="email" element={<Email />} />
      </Routes>
    </div>
  );
};

export default App;
