import { useState } from "react";

export const useLocalStorage = (tareas, initialValue) => {
  const [storage, setStorage] = useState(() => {
    try {
      const store = window.localStoragse.getItem(tareas);
      return store ? JSON.parse(store) : initialValue;
    } catch (error) {
      console.log(`error en el custom hook, extraccion -> ${error}`);
    }
  });

  // Funcion encargada de la persistencia
  const setValue = (value) => {
    //por lo general va a ser un proceso asincrono
    try {
      setStorage(value);
      //cada tarea va a ser un objeto con su informacion
      //de la cual vamos a poder despues extraer la data con get item
      window.localStorage.setItem("tareas", JSON.stringify(value));
    } catch (error) {
      console.log(`error en la peristencia -> ${error}`);
    }
  };

  //Vamos a devolver el valor guardado
  //Metodo para actualizar el store
  return [setStorage, setValue];
};
