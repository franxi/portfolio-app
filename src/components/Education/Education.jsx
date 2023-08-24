import { educationData } from "../../data/educationData";

const Education = () => {
  return (
    <div>
      <h2>Education</h2>
      <ul>
        {educationData.map((education, index) => {
          return (
            <li key={index}>
              <strong>Curso:</strong> {education.course} <br />
              <strong>Año de finalización:</strong> {education.endYear} <br />
              <strong>Institución:</strong> {education.institution} <br />
              <strong>Año de inicio:</strong> {education.startYear}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Education;
