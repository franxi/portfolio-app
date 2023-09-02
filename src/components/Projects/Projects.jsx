import { projectsData } from "../../data/projectData";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { useContext } from "react";

import "./Projects.css";

const Projects = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      className="projects"
      id="projects"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="projects--header">
        <h1 style={{ color: theme.primary }}>Projects</h1>
      </div>
      <div className="projects--body">
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
    </div>
  );
};

export default Projects;
