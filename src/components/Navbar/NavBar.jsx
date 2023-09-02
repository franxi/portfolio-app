import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContextProvider";
import useActiveSection from "./useActiveSection";
import { sectionsData } from "../../data/sectionsData";
import { Button } from "@mui/material";

import "./Navbar.css";

const NavBar = () => {
  const { theme } = useContext(ThemeContext);

  const activeSection = useActiveSection(sectionsData);
  //si hago click me redirige a ese lugar
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <Button variant="contained">Contained</Button>
      <ul className="navbar--container">
        {sectionsData.map((sectionId) => (
          <li key={sectionId}>
            <button
              onClick={() => scrollToSection(sectionId)}
              className={
                sectionId === activeSection ? "navbar--sections-active" : ""
              }
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
