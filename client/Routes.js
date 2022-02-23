import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import Particlez from "./components/particles";
import Canvas from "./components/canvas";



export const App = () => {


  return (

    <div >
      {/* <Particlez/> */}
      <Canvas/>
      <Nav/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
      {/* <Route path="/" element={<Nav/>}/> */}
      </Routes>
    </div>
  )
}


export default App;
