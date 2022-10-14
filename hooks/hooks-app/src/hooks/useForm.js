import { useState } from "react";

// quiero poder ahorarre la inicialización inicial
export const useForm = (initialForm) => {
  // Con objetos obtenemos facilidad a la posibilidad de expandirlo
  const [stateForm, setStateForm] = useState({
    username: "",
    password: "",
  });

  console.log(stateForm);
  // ¿ Como puedo yo usar mis valores del form?
  // DESTRUCTURACIÓN..
  const { username, password } = stateForm;

  const controladorForm = ({ target }) => {
    const { name, value } = target;
    setStateForm({ ...stateForm, [name]: value });
    // return `Hola: ${username} | ${email} | ${password}`;
  };
  return {
    ...stateForm,
    stateForm,
    controladorForm,
  };
};
