import { skillsData } from "../../data/skillData";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { useContext } from "react";

import "./Skills.css";

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="skills" className="skills" style={{ backgroundColor: theme.secondary }}>
      <header>
        <h2 style={{ color: theme.primary }}>Skills</h2>
      </header>
      <div className="skillsContainer">
        <ul>
          {skillsData.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
