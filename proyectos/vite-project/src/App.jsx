import { useState } from "react";
import "./index.css";
// import { Route, Routes } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// importo los componentes que voy a utilizar
// import Header from "./componentes/Header";
// import Formulario from "./componentes/Formulario";
// import ListadoPacientes from "./componentes/ListadoPacientes";

//importaciones del ruteo
import Home from "./vistas/Home";
import Login from "./vistas/Login";
import Register from "./vistas/Register";

function App() {
  // podemos trabajar lógica por aqui
  return (
    <div className="App" style={{ width: "100%", alignContent: "center" }}>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />
        {/* LOGIN */}
        <Route path="/login" element={<Login />} />
        {/* REGISTER */}
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <Header />
      <Formulario />
      <ListadoPacientes /> */}
    </div>
  );
}

export default App;
