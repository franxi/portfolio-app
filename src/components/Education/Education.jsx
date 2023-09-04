// import { useContext } from "react";
// import { ThemeContext } from "../../context/ThemeContextProvider";
import { educationData } from "../../data/educationData";
import EducationCard  from "./EducationCard";
import "./Education.css";

const Education = () => {
  // const {theme} = useContext(ThemeContext);
  return (
    <div id="educación" className="education">
      <div className="education-body">
        <div className="education-description">
        <div className="lcr--content">
          <h1>Education</h1>
          <ul>
            {educationData.map((edu) => (
              <EducationCard
                key={edu.id}
                id={edu.id}
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
    </div>
  );
};

export default Education;
