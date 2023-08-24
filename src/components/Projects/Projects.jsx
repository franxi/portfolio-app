import { projectsData } from "../../data/projectData";

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projectsData.map((project, index) => {
          return (
            <li key={index}>
              <strong>Nombre Proyecto</strong> {project.projectName} <br />
              <strong>Descripcion</strong> {project.projectDesc} <br />
              <strong>tags</strong> {project.tags} <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
