import { useContador } from "../hooks/useContador";

const ContadorCustomHook = () => {
  const { contador } = useContador();

  return (
    <>
      <h1>Contador utilizando un custom hook</h1>

      <h2>Acciones:{contador}</h2>
      <div className="container-acciones">
        <h3>valor :{contador}</h3>
        <button>-</button>
        <button>volver a cero!</button>

        <button>+</button>
      </div>
    </>
  );
};

export default ContadorCustomHook;
