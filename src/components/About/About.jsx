import { useContext } from "react";
import { aboutData } from "../../data/aboutData";
import { ThemeContext } from "../../context/ThemeContextProvider";

import "./About.css";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="perfil" className="about">
      <div className="about-body">
        <div className="about-description">
          <div className="lcr--content">
            <h1>{aboutData.title} </h1>
            <p style={{ color: theme.tertiary80 }}>
              {aboutData.description1}
              <br />
              <br />
              {aboutData.description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
