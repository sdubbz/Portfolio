import React from 'react';
import { useNavigate } from 'react-router-dom';



export const LandingButton = () => {

  const navigate = useNavigate();

  const toHome = () => {
    navigate('/home')

  }

  return(

    <div class="fill-width">


      <button class=" h-12 px-6 m-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-500 transition-colors duration-150 bg-indigo-700 rounded-lg border-white hover:border-black border-solid" onClick={() => toHome()}>ENTER</button>


    </div>



  )
}

export default LandingButton;
