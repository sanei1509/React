import { useState } from "react";

export const LocalStorage = (key, initialValue) => {
  const [valorGuardado, setValorGuardado] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(`error en el custom hook, extraccion -> ${error}`);
    }
  });

  // Funcion encargada de la persistencia
  const setValue = (value) => {
    //por lo general va a ser un proceso asincrono
    try {
      setValorGuardado(value);
      //cada tarea va a ser un objeto con su informacion
      //de la cual vamos a poder despues extraer la data con get item
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(`error en la peristencia -> ${error}`);
    }
  };

  //Vamos a devolver el valor guardado
  //Metodo para actualizar el store
  return [valorGuardado, setValue];
};
