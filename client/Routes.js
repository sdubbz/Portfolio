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

      <Canvas className='canvas'/>
      <div className="layout">
         <Nav className="nav"/>
      </div>

      {/* <Nav className="nav"/> */}
      {/* <Canvas/> */}
      <Routes>
        <Route path="/home" element={<Home/>}/>
      {/* <Route path="/" element={<Nav/>}/> */}
      </Routes>
    </div>
  )
}


export default App;
