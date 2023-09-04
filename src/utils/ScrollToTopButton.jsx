import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./ScrollToTopButton.css";
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Manejar la visibilidad del botón al desplazarse
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para volver al principio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Desplazamiento suave
    });
  };

  return (
    isVisible && (
    <button className="scroll-to-top-button" onClick={scrollToTop}>
      <KeyboardArrowUpIcon/>
    </button>
    )
  );
}

export default ScrollToTopButton;
