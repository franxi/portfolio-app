import { useContext } from "react";
import { aboutData } from "../../data/aboutData";
import { ThemeContext } from "../../context/ThemeContextProvider";

import "./About.css";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="about" className="about" style={{ backgroundColor: theme.secondary70 }}>
      <div className="about-body">
        <div className="about-description">
          <h2 style={{ color: theme.primary }}>{aboutData.title} </h2>
          <p style={{ color: theme.tertiary80 }}>
            {aboutData.description1}
            <br />
            <br />
            {aboutData.description2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
