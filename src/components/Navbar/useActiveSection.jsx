import { useState, useEffect } from "react";

const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const checkActiveSection = () => {
      let currentActive = 'null';

      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        const rect = element.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
          currentActive = id;
        }
      });
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", checkActiveSection);
    return () => {
      window.removeEventListener("scroll", checkActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
};

export default useActiveSection;

// Se itera sobre cada id en el array sectionIds con .forEach().

// Para cada id, se obtiene el elemento correspondiente del DOM y se calcula su posición con getBoundingClientRect().

// Luego, se comprueba si este elemento está en la ventana de visualización con la condición (rect.top <= 0 && rect.bottom >= 0).

// Si es así, currentActive se actualiza con el id del elemento.
// Al final del bucle, setActiveSection(currentActive) actualiza el estado activeSection con el id de la sección que está activa (visible en la ventana) o null si no hay ninguna.

// Por lo tanto, sí, checkActiveSection se ejecuta en su totalidad cada vez que cambia el scroll, recorriendo todos los id en sectionIds para determinar cuál sección es la que está activa en ese momento.





