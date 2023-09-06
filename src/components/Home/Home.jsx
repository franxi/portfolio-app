import { useContext } from "react";
import { homeData } from "../../data/homeData";
import { ThemeContext } from "../../context/ThemeContextProvider";
import "./Home.css";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section
      id="inicio"
      className="home"
      style={{
        background: theme.backgroundSecondary,
        backgroundColor: theme.secondary,
        backgroundSize: theme.backgroundSecondarySize,
      }}
    >
      <article className="home--container">
        <figure
          className="home--container-frame"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="home--container-left">
            <img
              src={homeData.image}
              alt="Foto de Perfil"
              className="home--img"
            />
          </div>
          <figcaption className="home--container-right">
            <div className="home--container-text">
              <h6> {homeData.title} </h6>
              <h1> {homeData.name}</h1>
              <p>{homeData.desciption}</p>
            </div>
          </figcaption>
        </figure>
      </article>
    </section>
  );
};

export default Home;
