import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";

import "./Education.css";

const EducationCard = ({ id, institution, course, startYear, endYear }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div key={id} className="education-card">
      <div className="education-details">
        <h6 style={{ color: theme.primary }}>
          {startYear}-{endYear}
        </h6>
        <h4 style={{ color: theme.primary }}>{course}</h4>
        <h5 style={{ color: theme.primary }}>{institution}</h5>
      </div>
    </div>
  );
};

export default EducationCard;
