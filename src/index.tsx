import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./style/Reset.css";
import "./style/App.css";
import "./style/Nav.css";
import "./style/Layer.css";
import "./style/Promo.css";
import "./style/Project.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
