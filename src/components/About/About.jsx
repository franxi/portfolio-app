import { useContext, useRef } from "react";
import { aboutData } from "../../data/aboutData";
import { ThemeContext } from "../../context/ThemeContextProvider";
import useFadeIn from "../Transition/useFadeIn";
import BackgroundAnimated from "../BackgroundAnimated/Backgroundanimated";

import "./About.css";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const aboutRef = useRef(null);
  const isVisible = useFadeIn(aboutRef);
  
  return (
    <section
    id="perfil"
    className="about"
    // style={{ backgroundColor: theme.secondary }}
    >
      <BackgroundAnimated/>
      <article className={`about--container ${isVisible ? "fadeIn" : ""}`} ref={aboutRef}>
        <div className="about--container-frame">
          <header className="about--container-title">
            <h1>{aboutData.title} </h1>
          </header>
          <div className="about--container-body">
            <p>{aboutData.description1}</p>
            <p>{aboutData.description2}</p>
          </div>
        </div>
      </article>
      {/* </BackgroundAnimated>   */}
    </section>
  );
};

export default About;
