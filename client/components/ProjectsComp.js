import React, {useEffect, useState} from 'react';
import axios from "axios";

export const ProjectsComp = () => {

useEffect( async () => {
  const projectsResponse = await axios.get('/api/projects');
  console.log(projectsResponse)
})


  return(
    <div className='bottom'>
    <div >YOOOOOO</div>
    <div>yooooo</div>
    </div>
  )

}

export default ProjectsComp;
