import React from "react";
import ReactDOM from "react-dom/client";
import ThemeContextProvider from "./context/ThemeContextProvider";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextProvider>
);
