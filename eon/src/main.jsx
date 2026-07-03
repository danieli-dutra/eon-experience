import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Fontes
import "@fontsource/inter-tight/400.css";
import "@fontsource/inter-tight/500.css";
import "@fontsource/inter-tight/600.css";
import "@fontsource/inter-tight/700.css";

// Estilos
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/typography.css";
import "./styles/global.css";
import "./styles/utilities.css";
import "./styles/animations.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);