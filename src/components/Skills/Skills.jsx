import { skillsData } from "../../data/skillData";

const Skills = () => {
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skillsData.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;
