import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Particlez from "./components/particles";
import Canvas from "./components/canvas";
import Projects from "./components/Projects";

export const App = () => {
  return (
    <div>


      {/* <Canvas className="canvas" /> */}
      {/* <div className="layout">
        <Nav className="nav" />

      </div> */}

      {/* <Nav className="nav"/> */}
      {/* <Canvas/> */}
      <Routes>

        <Route path="/" element={
        <div>
          <Canvas className="canvas" />
          <div className="layout">
        <Nav className="nav" />

      </div></div>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects classname="projects"/>}/>
      </Routes>
    </div>
  );
};

export default App;
