import { useState } from "react";
import NewProject from "./component/NewProject.jsx";
import ProjectsSidebar from "./component/ProjectsSidebar.jsx";
import NoProject from "./component/NoProject.jsx";
import SelectedProject from "./component/SelectedProject.jsx"; 


function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  const handleAddTask = (text) => {
    setProjectsState(prevState => {
      const taskid = Math.random();
      const newTask = {
        taskContent: text,
        projectId: prevState.selectedProjectId,
        id: taskid,
      };

      const updatedTask = [...prevState.tasks, newTask];
      return {
        ...prevState,
        tasks: updatedTask,
      };
    });
  }

  const handleDeleteTask = (id) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks : prevState.tasks.filter(
          (task) => task.id !== id)
      }
    })
  }

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
    const projectid = Math.random();
    const newProject = {
      ...projectData,
      id: projectid,
    };
  
    setProjectsState(prevState => {
      const updatedProjects = [...prevState.projects, newProject];
      return {
        ...prevState,
        selectedProjectId: undefined, // Keep the existing selectedProjectId
        projects: updatedProjects,
      };
    });
  };


  const handleSelectProject = (id) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }
  
  const handleDeleteProject = (id) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects : prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId)
      }
    })
  }

  const selectedProject = projectsState.projects.find(
    project => project.id === projectsState.selectedProjectId
  );
  

  let content = <SelectedProject tasks={projectsState.tasks} project = {selectedProject} onDelete = {handleDeleteProject} addTask = {handleAddTask} deleteTask = {handleDeleteTask}/>;

  if(projectsState.selectedProjectId === null) {
    content = <NewProject onClose = {handleCloseProject} appendProject = {handleProjectList}/>
  }else if(projectsState.selectedProjectId === undefined){
    content = <NoProject onAddProject = {handleAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onAddProject = {handleAddProject} projects = {projectsState.projects} onSelectProject = {handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;
