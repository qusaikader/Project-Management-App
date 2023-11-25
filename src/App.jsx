import { useState } from "react";
import NewProject from "./component/NewProject.jsx";
import ProjectsSidebar from "./component/ProjectsSidebar.jsx";
import NoProject from "./component/NoProject.jsx";



function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  const handleAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  const handleCloseProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  const handleProjectList = (projectData) => {
    const newProject = {
      ...projectData,
      id: Math.random()
    }

    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  console.log(projectsState);

  let content;

  if(projectsState.selectedProjectId === null) {
    content = <NewProject onClose = {handleCloseProject} appendProject = {handleProjectList}/>
  }else if(projectsState.selectedProjectId === undefined){
    content = <NoProject onAddProject = {handleAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddProject = {handleAddProject} projects = {projectsState.projects}/>
      {content}
    </main>
  );
}

export default App;
