import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { educationData } from "../../data/educationData";
import EducationCard  from "./EducationCard";
import "./Education.css";

const Education = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div id="education" className="edcuation">
      <div className="education-body">
        <div className="education-description">
          <h2 style={{ color: theme.primary }}>Education</h2>
          <ul>
            {educationData.map((edu, index) => (
              <EducationCard
                key={index}
                id={index}
                institution={edu.institution}
                course={edu.course}
                startYear={edu.startYear}
                endYear={edu.endYear}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
