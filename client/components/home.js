import React from 'react';


export const Home = () => {

  return(
    <div>

      <nav class="container flex justify-around py-8 mx-auto bg-white">
  <div>
    <h3 class="text-1xl font-medium text-blue-500">Dubbs designs</h3>
  </div>
  <div class="space-x-8">
    <a href="">Home</a>
    <a href="">About Us</a>
    <a href="">Blogs</a>
    <a href="">Our Team</a>
    <a href="">Contact Us</a>
  </div>
</nav>

<header class="flex justify-between items-center mt-28">
        <div class="pl-20 w-3/5 animate__animated animate__jackInTheBox">
            <h1 class="text-4xl">Welcome to <span class="text-green-600 font-bold">Awesome CSS</span> website</h1>
            <p class="mt-4">
                With just HTML and CSS you can created magical websites. There are so many things in CSS to do, that it takes a lifetime to master. There are many CSS gurus and they share their work with everyone. Two of them are Sara Soueidan and Dev Ed.
            </p>
            <button class="bg-green-600 px-2 py-2 text-white rounded">Subscribe</button>
            <button class="bg-gray-300 px-2 py-2 mt-4 ml-4 rounded">Connect with us!</button>
        </div>
        <div class="w-2/5 animate__animated animate__fadeIn animate__delay-1s">

        </div>
    </header>
      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
 <button class="bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 ...">
  Save changes
</button>

      <h1>cmonnn</h1>
    </div>
  )




}


export default Home;
