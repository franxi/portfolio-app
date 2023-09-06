import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { skillsData } from "../../data/skillData";
import SkillsCard from "./SkillsCard";

import "./Skills.css";

const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="habilidades"
      className="skills"
      style={{ backgroundColor: theme.secondary }}
    >
      <article className="skills-container">
        <header className="skills-container-title">
          <h1>Habilidades</h1>
        </header>
        <div className="skills-container-list">
          <ul>
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
      </article>
    </section>
  );
};

export default Skills;
