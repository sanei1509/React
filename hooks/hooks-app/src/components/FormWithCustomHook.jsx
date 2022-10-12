import { useForm } from "../hooks/useForm";

export const FormWitCustomHook = () => {
  const { stateForm, onInputChange } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formState;
  return <h1>Formulario</h1>;
};
