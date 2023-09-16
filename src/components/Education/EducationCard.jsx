import { useRef } from "react";
import SchoolIcon from "@mui/icons-material/School";
import useFadeIn from "../Transition/useFadeIn";
import "./Education.css";

const EducationCard = ({
  id,
  institution,
  course,
  startYear,
  endYear,
  url,
  studyPlan,
  image,
}) => {
  const cardRef = useRef(null);
  const isVisible = useFadeIn(cardRef);

  return (
    <div
      key={id}
      className={`education--card ${isVisible ? "fadeIn" : ""}`}
      ref={cardRef}
    >
      <div className="education--card-details">
        <p>
          {startYear}-{endYear}
        </p>
        <h6>{course}</h6>
        <a href={url} target="_blank">
          <p className="education--card-university">{institution}</p>
        </a>
        {studyPlan && (
          <a href={studyPlan} target="_blank">
            <SchoolIcon />
          </a>
        )}
      </div>
      <a href={url} target="_blank">
        <img
          src={image}
          alt="logo universidad ubb"
          className="education--card-image"
        />
      </a>
    </div>
  );
};

export default EducationCard;
