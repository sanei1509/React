import React from "react";

const Formulario = () => {
  return (
    <div className="formulario-container">
      <h2>Completa con tus datos aqui</h2>
      <label>Correo Electrónico</label>
      <input type="email" />
      <label>Nombre de usuario</label>
      <input type="text" />
      <label>Contraseña</label>
      <input type="password" />
    </div>
  );
};

export default Formulario;
