import { useEffect } from "react";

const Mensaje = () => {
  useEffect(() => {
    console.log("Mensaje solicitado!!");

    // Destrucción del componente
    return () => {
      console.log("Mensaje Entendido , desmontando..");
    };
  }, []);

  return <h1>El usuario ya existe</h1>;
};

export default Mensaje;
