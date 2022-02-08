import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from './components/home';



export const App = () => {


  return (

    <div>

      <Routes>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  )
}


export default App;
