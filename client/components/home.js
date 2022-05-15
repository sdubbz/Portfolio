import React from "react";
import Nav from './Nav';
import HomeAbout from './homeAbout';
 import espresso from '../../public/images/espresso.jpeg';

import HomeContact from "./HomeContact";
import AboutTest from "./aboutTest";


// const espresso = new URL("./images/espresso.jpeg", import.meta.url)



export const Home = () => {
  return (
    <div>
    <img className="bgPic" src="images/espresso.jpeg" />


    <div class="layout grow-[3]">
      <Nav />
      <HomeAbout class="flex grow-[3] hover:place-content-center"/>

    </div>
    <div class="absolute homeContact">

    {/* <HomeContact class="absolute "/> */}
    {/* <AboutTest/> */}
    </div>


  </div>


  );
};

export default Home;
