import { useContext, useState } from "react";
import Atropos from "atropos/react";
import "atropos/css";
import { homeData } from "../../data/homeData";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { contactData } from "../../data/contactData";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { styled } from "@mui/material/styles";

import "./Home.css";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.white,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      fontSize: 11,
    },
  }));

  return (
    <section
      id="inicio"
      className="home"
      style={
        {
          // background: theme.backgroundSecondary,
          backgroundColor: theme.secondary,
          // backgroundSize: theme.backgroundSecondarySize,
        }
      }
    >
      <Atropos
        rotateXMax={5}
        rotateYMax={5}
        activeOffset={40}
        shadowOffset={100}
        // shadowScale={0.5}
        className="home--container"
      >
        {/* <article className="home--container"> */}
        <figure
          className="home--container-figure"
          style={{
            backgroundColor: theme.primary,
            border: "6px solid rgba(255,255,255,0.3)",
          }}
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
          <nav className="home--navbar-contact">
            <ul className="home--navbar-list">
              <li className="home--navbar-item">
                <a
                  className="home--navbar-anchor"
                  href={`mailto:${contactData.email}`}
                >
                  <EmailIcon />
                </a>
              </li>
              <li className="home--navbar-item">
                <a
                  className="home--navbar-anchor"
                  href={`mailto:${contactData.email}`}
                >
                  <WhatsAppIcon />
                </a>
              </li>
              <li className="home--navbar-item">
                <a
                  className="home--navbar-anchor"
                  href={`mailto:${contactData.email}`}
                >
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </nav>
          <div className="home--greet">
            <ClickAwayListener onClickAway={handleTooltipClose}>
              <div>
                <LightTooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  placement="top"
                  onClose={handleTooltipClose}
                  open={open}
                  disableTouchListener
                  disableHoverListener
                  disableFocusListener
                  title="Add"
                >
                  <button
                    onClick={handleTooltipOpen}
                    className="home--greet-button"
                  >
                    <WavingHandIcon />
                  </button>
                </LightTooltip>
              </div>
            </ClickAwayListener>
          </div>
        </figure>
        {/* </article> */}
      </Atropos>
    </section>
  );
};

export default Home;
