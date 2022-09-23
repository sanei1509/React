import React from "react";
import ReactDOM from "react-dom/client";
// importamos el distribuidor de nuestra app
import { AppContainer } from "./AppContainer";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);
