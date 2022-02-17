import React from "react";

export const Home = () => {
  return (
    <div>
      <nav class="container flex justify-around py-8 mx-auto bg-white items-center px-8 md:px-14 lg:px-24 w-full">
        <div>
          <h3 class="text-4xl font-medium text-blue-500">Dubbs designs</h3>
        </div>
        <div class="space-x-8">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Blogs</a>
          <a href="">Our Team</a>
          <a href="">Contact Us</a>
        </div>
      </nav>
    </div>
  );
};

export default Home;
