import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
