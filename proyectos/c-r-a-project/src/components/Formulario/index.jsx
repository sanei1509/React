import { useState } from "react";

export const Formulario = () => {
  // Logica para el formulario
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleSubmit(e) {
    /*
      Previene el comportamiento default de los
      formularios el cual recarga el sitio
    */
    e.preventDefault();
    // Aquí puedes usar values para enviar la información
    console.log(values);
  }

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    const valoresRecuperados = {
      ...values,
      [name]: value,
    };
    // Despúes de haber dado el formato en el que queremos extraer los datos
    setValues(valoresRecuperados);
  };

  return (
    <div className="container">
      <h1 className="heading-form">Formulario de Registro</h1>
      <form className="text-center" onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            value={values.username}
            className="input-register"
            id="username"
            name="username"
            type="text"
            placeholder="nombre de usuario"
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            value={values.email}
            className="input-register"
            id="email"
            name="email"
            type="email"
            placeholder="Ingresa tu correo"
            required
            autoComplete="off"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            className="input-register"
            value={values.password}
            id="password"
            name="password"
            type="password"
            placeholder="Escribe tu contraseña"
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="input-register"
            value={values.confirmPassword}
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="repite tu contraseña"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="button-register">
          Enviar
        </button>
      </form>
    </div>
  );
};
