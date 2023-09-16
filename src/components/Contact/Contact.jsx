import { useContext, useRef } from "react";
import useFadeIn from "../Transition/useFadeIn";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { contactData } from "../../data/contactData";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Contact.css";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const cardRef = useRef(null);
  const isVisible = useFadeIn(cardRef);
  return (
    <section
      className="contact"
      id="contacto"
      style={{
        background: theme.backgroundThird,
        backgroundColor: theme.secondary,
        backgroundSize: theme.backgroundThirdSize,
      }}
    >
      <article
        className={`contact--container ${isVisible ? "fadeIn" : ""}`}
        ref={cardRef}
      >
        <div
          className="contact--container-main"
          style={{ backgroundColor: theme.secondary }}
        >
          <header className="contact--container-title">
            <h1>Contacto</h1>
          </header>
          <div className="contact--container-body">
            <h6>
              ¡Hablemos de tu próximo proyecto! ¿Estás listo para llevar tus
              ideas al siguiente nivel? Estoy emocionado por conocer más sobre
              tu proyecto y cómo puedo ayudarte a hacerlo realidad. Como
              desarrollador web apasionado, estoy comprometido a crear
              soluciones digitales bonitas y funcionales que impulsen tu éxito
              en línea.
            </h6>
            <nav className="contact--navbar-contact">
              <ul className="contact--navbar-list">
                <li className="contact--navbar-item">
                  <a
                    className="contact--menu-item"
                    href={`mailto:${contactData.email}`}
                  >
                    <EmailIcon />
                  </a>
                </li>
                <li className="contact--navbar-item">
                  <a
                    className="contact--menu-item"
                    href={`mailto:${contactData.email}`}
                  >
                    <WhatsAppIcon />
                  </a>
                </li>
                <li className="contact--navbar-item">
                  <a
                    className="contact--menu-item"
                    href={`mailto:${contactData.email}`}
                  >
                    <InstagramIcon />
                  </a>
                </li>
                <li className="contact--navbar-item">
                  <a
                    className="contact--menu-item"
                    href={`mailto:${contactData.email}`}
                  >
                    <TwitterIcon />
                  </a>
                </li>
                <li className="contact--navbar-item">
                  <a
                    className="contact--menu-item"
                    href={`mailto:${contactData.email}`}
                  >
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </nav>

            {/* <p>{contactData.phone}</p>
          <p>{contactData.address}</p> */}
          </div>
        </div>
      </article>
      <footer className="contact-footer">
        <div>
          <p>© 2023 Francisco Gonzalez | Ing. Civil en Informática</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
