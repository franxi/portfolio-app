import { aboutData } from "../../data/aboutData";

const About = () => {
  return (
    <div>
      <h2>{aboutData.title} </h2>
      <p>
        {aboutData.description1}
        <br />
        <br />
        {aboutData.description2}
      </p>
    </div>
  );
};

export default About;
