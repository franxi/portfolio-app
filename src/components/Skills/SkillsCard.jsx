// import { ThemeContext } from "../../context/ThemeContextProvider";
// import { useContext } from "react";

import "./Skills.css";

const SkillsCard = ({ id, name, skillSvg }) => {
  
  // const { theme } = useContext(ThemeContext);

  return (
    <li
      key={id}
      className="skill-card"
      // style={{ backgroundColor: theme.primary }}
    >
      <span className="skill-card-svg">{skillSvg}</span>
      <h6>{name}</h6>
    </li>
  );
};

export default SkillsCard;
