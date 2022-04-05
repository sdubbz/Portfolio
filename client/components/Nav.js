import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Nav = () => {

  const navigate = useNavigate();

  const contact = () => {
    console.log('hello inside contact')

    navigate('/email')
  }

  return (
    <div class="text-black w-full">
      <nav class="container flex justify-around py-8 mx-auto items-center px-8 md:px-14 lg:px-14 w-full xl:px-8 ">
        <div>
          <h3 class="text-4xl font-bold">Dubbs Designs</h3>
        </div>
        <div class=" hidden md:flex space-x-12 items-center  a:link">
          <Link class="" to="/">Home</Link>
          <a class="" href="/projects">Projects</a>
          {/* <a class="text-blue-500" href="">Blogs</a> */}
          <a class="" href="">About Me</a>
          <a class="" href="">Contact Us</a>
          <button class="px-6 py-2 bg-theme text-white font-bold" onClick={() => contact()}>Hire me</button>
        </div>
        <div class="md:hidden">
          <img className="mobileMenu" src="./images/mobileMenu.png"></img>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
