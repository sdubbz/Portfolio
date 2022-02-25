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


},[]);

  console.log(projects, 'YOOOOO FUCKERES')


if(!isLoading){
  console.log(projects, 'hellllooo')

  return(
    <div className='bottom'>
    <div >{projects.map((project) => {
      return (project.name)
    })}</div>


    </div>
  )

}else{
  return (<div>naw</div>)
}
}

export default ProjectsComp;
