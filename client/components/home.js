import React from "react";
import Nav from './Nav';
import HomeAbout from './homeAbout';
 import espresso from '../../public/images/espresso.jpeg';

import HomeContact from "./HomeContact";


// const espresso = new URL("./images/espresso.jpeg", import.meta.url)



export const Home = () => {
  return (
    <div>
    <img className="bgPic" src="images/espresso.jpeg" />


    <div class="layout">
      <Nav />
      <HomeAbout class="flex"/>

    </div>
    <HomeContact class=""/>


  </div>


  );
};

export default Home;
