import { useState } from "react";

export const Contador = () => {
  const [{ contadores }, setContador] = useState({
    counter: 0,
    counter2: 10,
    counter3: 20,
  });

  const { counter, counter2, counter3 } = contadores;

  return (
    <>
      <h2>{counter}</h2>
      <button
        onClick={() =>
          setContador({
            ...contadores,
            counter: counter + 1,
          })
        }
      >
        +
      </button>
      <h2>{counter2}</h2>
      <button
        onClick={() =>
          setContador({
            ...contadores,
            counter2: counter2 + 10,
          })
        }
      >
        +
      </button>
      <h2>{counter3}</h2>
      <button
        onClick={() => setContador({ ...contadores, counter3: counter3 + 20 })}
      >
        +
      </button>
    </>
  );
};
