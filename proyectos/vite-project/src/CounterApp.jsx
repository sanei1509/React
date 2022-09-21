import PropTypes from "prop-types";
import { useState } from "react";

export default function CounterApp({ valor }) {
  // Todo lo que esta aqui se va a renderizar cada vez que cargue el componente
  console.log("Volvi!");

  // Estado [destructuring]
  const [contador, setContador] = useState(0);

  // controlador del contador
  const controladorSuma = () => {
    setContador(contador + 1);
    // setContador((c) => c + 1);
  };

  const controladorResta = () => {
    if (contador > 0) setContador(contador - 1);
  };

  const controladorReseteo = () => {
    setContador(valor);
  };

  return (
    <div>
      <h1>CounterApp</h1>
      <h1>{contador}</h1>

      {/* botones controladores */}
      <button onClick={controladorSuma}>+</button>
      <button onClick={controladorResta}>-</button>
      <button onClick={controladorReseteo}>RESET</button>
    </div>
  );
}

CounterApp.propTypes = {
  valor: PropTypes.number.isRequired,
};
