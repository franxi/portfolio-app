import { createContext, useState } from "react";
import { themeData } from "../data/themeData";

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {

  // const [theme, setTheme] = useState(themeData.theme);
  const theme = themeData;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
