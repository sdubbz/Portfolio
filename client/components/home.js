import React from "react";
import Nav from './Nav';
 import espresso from '../../public/images/espresso.jpeg'


// const espresso = new URL("./images/espresso.jpeg", import.meta.url)



export const Home = () => {
  return (


     <div className="w-full h-full bgImage ">
       <div>
       <Nav className="trying"/>
       <h1 className="trying">
    HELLO
       </h1>
     <img className="trying1" src='/images/espresso.jpeg'/>
     </div>
     </div>
  );
};

export default Home;
