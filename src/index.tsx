import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/App.css";
import "./style/Header.css";
import "./style/Skills.css";
import "./style/Project.css";
import "./style/Overlay.css";
import "./style/AdditionalLinks.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
