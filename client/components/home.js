import React from "react";
import Nav from './Nav';
import HomeAbout from './homeAbout';
 import espresso from '../../public/images/espresso.jpeg';


// const espresso = new URL("./images/espresso.jpeg", import.meta.url)



export const Home = () => {
  return (
    <div>
    <img className="bgPic" src="images/espresso.jpeg" />
    {/* <Canvas class="flex h-full justify-center absolute ..." /> */}

    <div class="layout">
      <Nav />
      {/* <HomeAbout class="h-full w-full"/> */}
    </div>
     <div class="layout  w-full  ">
    <HomeAbout class=" w-full pt-6 "/>
    </div>
  </div>

    //  <div className="w-full h-full spro">
    //    <div>
    //    <Nav className="trying"/>
    //    <h1 className="trying">
    // HELLO
    //    </h1>
    //  {/* <img className="trying1" src='/images/espresso.jpeg'/> */}
    //  </div>
    //  </div>
  );
};

export default Home;
