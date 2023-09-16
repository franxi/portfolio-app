// import { ThemeContext } from "../../context/ThemeContextProvider";
// import { useContext } from "react";
import { useRef } from "react";
import useFadeIn from "../Transition/useFadeIn";

import "./Skills.css";

const SkillsCard = ({ id, name, skillSvg, url }) => {
  // const { theme } = useContext(ThemeContext);
  const cardRef = useRef(null);
  const isVisible = useFadeIn(cardRef);

  return (
    <li
      key={id}
      className={`skill-card ${isVisible ? "fadeIn" : ""}`}
      ref={cardRef}
    >
      <a href={url} target="_blank" className="skill-card-svg">
        {skillSvg}
      </a>
      <h2>{name}</h2>
    </li>
  );
};

export default SkillsCard;
