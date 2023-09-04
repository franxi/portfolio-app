import { useContext } from "react";
import { homeData } from "../../data/homeData";
import { ThemeContext } from "../../context/ThemeContextProvider";
import "./Home.css";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    // <section id="inicio" className="home">
    //   <div className="home--container">
    //     <img
    //       src={homeData.image}
    //       alt="Foto de Perfil"
    //       className="home--img"
    //       style={{
    //         border: `1px solid ${theme.primary}`,
    //       }}
    //     />
    //     <div className="home--container-left">
    //       <h1>Biendo que poner</h1>
    //     </div>

    //     <div
    //       className="home--container-right"
    //       // style={{ backgroundColor: theme.primary }}
    //     >
    //       <div className="lcr--content" style={{ color: theme.tertiary }}>
    //         <h6> {homeData.title} </h6>
    //         <h1> {homeData.name}</h1>

    //         <p>{homeData.desciption}</p>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section id="inicio" className="home">
      <div className="home--container">
        <div className="home--container-frame" style={{backgroundColor: theme.primary}}>
          <div className="home--container-left">
            <img
              src={homeData.image}
              alt="Foto de Perfil"
              className="home--img"
              style={{
                border: `1px solid ${theme.primary}`,
              }}
            />
          </div>
          <div className="home--container-right">
            <div className="lcr--content" style={{ color: theme.tertiary }}>
              <h6> {homeData.title} </h6>
              <h1> {homeData.name}</h1>

              <p>{homeData.desciption}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
