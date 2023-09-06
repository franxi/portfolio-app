import { useContext } from "react";
import { aboutData } from "../../data/aboutData";
import { ThemeContext } from "../../context/ThemeContextProvider";

import "./About.css";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="perfil"
      className="about"
      style={{ backgroundColor: theme.secondary }}
    >
      <article className="about--container">
        <header className="about--container-title">
          <h1>{aboutData.title} </h1>
        </header>
        <div className="about--container-body">
          <p>{aboutData.description1}</p>
          <p>{aboutData.description2}</p>
        </div>
      </article>
    </section>
  );
};

export default About;
