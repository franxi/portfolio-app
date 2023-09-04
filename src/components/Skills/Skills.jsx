import { skillsData } from "../../data/skillData";
import SkillsCard from "./SkillsCard";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { useContext } from "react";

import "./Skills.css";

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="habilidades" className="skills">
      <header>
        <h2 style={{ color: theme.primary }}>Skills</h2>
      </header>
      <div className="skillsContainer">
        <ul className="skillsContainer">
          {skillsData.map((skill) => (
            <SkillsCard
              key={skill.id}
              id={skill.id}
              name={skill.name}
              skillSvg={skill.skillSvg}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
