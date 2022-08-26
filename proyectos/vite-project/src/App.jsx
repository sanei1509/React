import { useState } from "react";
import "./index.css";

// importo los componentes que voy a utilizar
import Header from "./componentes/Header";
import Formulario from "./componentes/Formulario";
import ListadoPacientes from "./componentes/ListadoPacientes";

function App() {
  // podemos trabajar lógica por aqui

  return (
    <div className="App" style={{ width: "100%", alignContent: "center" }}>
      <Header />
      <Formulario />
      <ListadoPacientes />
    </div>
  );
}

export default App;
