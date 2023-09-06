import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { educationData } from "../../data/educationData";
import EducationCard from "./EducationCard";
import "./Education.css";

const Education = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="educación"
      className="education"
      style={{
        background: theme.backgroundPrimary,
        backgroundColor: theme.primary,
        backgroundSize: theme.backgroundPrimarySize,
      }}
    >
      <article className="education-container">

          <header className="education-container-title">
            <h1>Educación</h1>
          </header>
          <div className="education-container-list">
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
      </article>
    </section>
  );
};

export default Education;
