import { useState } from "react";

export const useContador = (valorDefault = 10) => {
  const { contador, setContador } = useState(valorDefault);

  return {
    contador,
  };
};
