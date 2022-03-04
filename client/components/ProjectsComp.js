import React, {useEffect, useState} from 'react';
import axios from "axios";


export const ProjectsComp = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);


useEffect( () => {
  const getResults = async () =>   {
    const projectsResponse = await axios.get('/api/projects');
    setProjects(projectsResponse.data)
    setLoading(false);
  }
  getResults();
  // const projectsResponse = await axios.get('/api/projects');
  // console.log(projectsResponse)

  // setProjects(projectsResponse)

},[]);

  console.log(projects, 'YOOOOO FUCKERES')


if(!isLoading){
  console.log(projects, 'hellllooo')

  return(
    <div className='bottom'>
    {projects.map((project) => {
      return (<div key={project.id} >
        <div>{project.name}</div>
        <img className='project-image' src={project.imageUrl[0]}/>
        <img className='project-image' src={project.imageUrl[1]}/>
        <p>{project.description}</p>
         </div>
         )
    })}


    </div>
  )

}else{
  return (<div>naw</div>)
}
}

export default ProjectsComp;
