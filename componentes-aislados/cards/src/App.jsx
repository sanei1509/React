import NavBar from "./components/nav/NavBar";
// Componentes que vas a usar
import "../src/components/nav/NavBar.css";
import image from "./assets/logo.png";
import "./index.css";

function App() {
  return (
    <>
      <div className="Logo-container p-10">
        <a href="#Home" className="link-logo">
          <img src={image} alt="logo" width={160} />
        </a>
      </div>
      <NavBar />
    </>
  );
}

export default App;
