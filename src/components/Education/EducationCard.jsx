import "./Education.css";

const EducationCard = ({ id, institution, course, startYear, endYear }) => {
  return (
    <li key={id} className="education-card">
      <div className="education-details">
        <p>
          {startYear}-{endYear}
        </p>
        <h6>{course}</h6>
        <p>{institution}</p>
      </div>
    </li>
  );
};

export default EducationCard;
