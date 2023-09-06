// import { useContext } from "react";
// import { ThemeContext } from "../../context/ThemeContextProvider";
import useActiveSection from "./useActiveSection";
import { sectionsData } from "../../data/sectionsData";
import { sectionsIconsData } from "../../data/sectionsData";
import "./Navbar.css";

const NavBar = () => {
  // const { theme } = useContext(ThemeContext);

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
      <ul className="navbar--container">
        <li className="navbar--logo">
          <a href="home">
            <svg
              className="navbar--logo-edit"
              viewBox="0 0 500.000000 500.000000"
            >
              <g
                className="navbar--logo-color"
                transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
              >
                <path
                  className="navbar--logo-up"
                  d="M29 3871 l-29 -29 0 -837 c0 -916 -2 -879 59 -905 35 -14 85 -2 107
            27 11 15 13 165 14 800 l0 782 783 3 c844 3 812 1 836 55 22 49 5 96 -46 122
            -15 8 -262 11 -858 11 l-837 0 -29 -29z"
                />
                <path
                  d="M3580 3449 c-333 -31 -619 -159 -804 -360 -106 -115 -198 -286 -238
            -445 -20 -78 -23 -115 -23 -289 0 -181 2 -208 24 -285 111 -394 428 -648 889
            -710 134 -18 362 -16 477 4 125 22 287 74 385 123 l75 38 0 294 0 294 89 30
            88 29 -6 52 c-3 28 -6 66 -6 84 l0 32 -439 0 -438 0 -7 -86 c-3 -48 -5 -88 -4
            -90 2 -1 56 -13 121 -27 65 -14 122 -28 125 -32 4 -4 8 -118 10 -255 l4 -247
            -34 -6 c-93 -16 -130 -18 -201 -8 -147 21 -258 74 -358 174 -130 129 -212 312
            -238 532 -49 409 83 745 344 870 94 45 150 57 275 58 113 1 198 -13 272 -45
            l47 -20 53 -159 53 -160 109 3 110 3 -3 135 c-2 74 -6 187 -10 250 l-6 115
            -95 33 c-178 62 -437 91 -640 71z"
                />
                <path
                  d="M1319 3433 l-706 -3 -7 -38 c-3 -20 -6 -60 -6 -89 l0 -52 43 -12
            c173 -46 171 -45 181 -75 12 -35 11 -1384 -1 -1489 l-8 -70 -103 -27 c-57 -15
            -105 -28 -106 -30 -1 -2 1 -41 4 -88 l5 -85 491 -3 492 -2 7 90 c4 50 5 93 3
            95 -2 3 -66 15 -141 27 -98 16 -138 26 -143 38 -4 8 -9 165 -12 349 l-5 334
            227 -5 c128 -2 231 -9 236 -14 6 -6 17 -59 25 -119 8 -61 17 -116 20 -123 3
            -9 30 -12 102 -10 l98 3 3 363 2 362 -104 0 -104 0 -11 -82 c-7 -46 -14 -97
            -17 -115 l-6 -31 -81 -7 c-45 -3 -152 -5 -237 -3 l-155 3 0 337 c0 185 4 340
            8 345 10 10 524 17 583 8 l42 -6 67 -152 c37 -84 69 -153 70 -154 3 -5 180 20
            191 26 9 5 -28 226 -85 509 -1 1 -36 1 -78 0 -43 -2 -396 -4 -784 -5z"
                />
                <path
                  className="navbar--logo-down"
                  d="M4845 2555 l-25 -24 0 -786 0 -785 -776 0 c-551 0 -782 -3 -797 -11
            -62 -32 -73 -91 -28 -141 l29 -33 819 -3 c450 -2 832 0 849 3 18 3 44 17 58
            32 l26 26 0 839 c0 864 0 865 -39 895 -28 22 -89 16 -116 -12z"
                />
              </g>
            </svg>
          </a>
        </li>
        <div className="navbar--menu">
          {sectionsData.map((sectionId) => (
            <li key={sectionId}>
              <button
                onClick={() => scrollToSection(sectionId)}
                className={
                  sectionId === activeSection
                    ? "navbar--button navbar--button-active"
                    : "navbar--button"
                }
                // className="button_slide slide_right"
              >
                {sectionsIconsData[sectionId]}

                {/* {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)} */}
              </button>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
