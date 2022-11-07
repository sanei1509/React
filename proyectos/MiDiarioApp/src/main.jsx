import React from "react";
import ReactDOM from "react-dom/client";
import MiDiarioApp from "./MiDiarioApp";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MiDiarioApp />
    </BrowserRouter>
  </React.StrictMode>
);
