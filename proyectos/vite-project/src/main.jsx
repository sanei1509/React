import React from "react";
import ReactDOM from "react-dom/client";

// importo mi aplicación para renderizar
import App from "./MeApp";
import "./global.css";

// obtenemos el elementos que le vamos a pasar a create root para renderizar
const app = document.getElementById("root");
ReactDOM.createRoot(app).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
