import NavBar from "./components/Nav/NavBar";
// Componentes que vas a usar
import "./components/Nav/NavBar.css";
import { ListadoLoops } from "./components/ListadoLoops/ListadoLoops";
import image from "./assets/logo.png";
import "./index.css";

function App() {
  return (
    <>
      {/* Logo */}
      <div className="Logo-container p-10">
        <a href="#Home" className="link-logo">
          <img src={image} alt="logo" width={160} />
        </a>
      </div>
      {/* Barra izquierda */}
      <NavBar />
      {/* Listado */}
      <ListadoLoops />
    </>
  );
}

export default App;
