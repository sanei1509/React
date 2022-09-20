// Importamos componentes dentro de nuestra app principal
import RandomBlock from "./RandomBlock";

// creamos un componente
const App = ({ msg = "hola no llego nada !!" }) => {
  return (
    <div>
      {/* <h1>Hola, desde mi MeApp.jsx</h1> */}

      {/* <h2>Además</h2> */}
      <RandomBlock fraseCitada="Siempre que llovio paro" />
    </div>
  );
};

export default App;
