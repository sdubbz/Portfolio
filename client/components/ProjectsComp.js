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

  // const mappedProjects = projects.map(project => {
  //   return (
  //     <div>project[0].name</div>
  //   )
  // })
  // console.log(mappedProjects)
if(!isLoading){
  console.log(projects, 'hellllooo')

  return(
    <div className='bottom'>
    <div >{projects.map((project) => {
      return (project.name)
    })}</div>
    {/* mappedProjects */}

    </div>
  )

}else{
  return (<div>naw</div>)
}
}

export default ProjectsComp;
