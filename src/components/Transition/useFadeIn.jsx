import { useEffect, useState } from "react";

function useFadeIn(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (!element) return;

      const elementRect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (elementRect.top < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return isVisible;
}

export default useFadeIn;
