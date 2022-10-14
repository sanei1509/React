import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";

const initialForm = { username: "", password: "" };

const SimpleForm = () => {
  const [form, setForm] = useState(initialForm);

  let { username, password } = form;

  const resetForm = (e) => {
    e.preventDefault();
    setForm(initialForm);
  };

  // uso del useEffect
  // cada que el username cambie
  useEffect(() => {
    // console.log("username!!");
  }, [username]);

  useEffect(() => {
    // console.log("estoy viendo tu contraseña 😮");
  }, [password]);

  // DESMONTEMOS UN USEEFFECT

  const handleInputUsername = (evt) => {
    console.log(evt);
    const { name, value } = evt.target;
    console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  const handleInputPass = (evt) => {
    console.log(evt);
    const { name, value } = evt.target;
    console.log(name, value);
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <h1>Formulario random</h1>
      <br />
      <hr />

      <form>
        <input
          type="text"
          className="user-input"
          placeholder="User"
          name="username"
          onChange={handleInputUsername}
        />

        <input
          type="password"
          className="password-input"
          placeholder="Password"
          name="password"
          onChange={handleInputPass}
        />

        <button onClick={resetForm}>Enviar</button>
      </form>
      <div>
        <span>{username}</span>
        <span>{password}</span>
      </div>

      {username.toLowerCase() === "santi" && <Mensaje />}
    </>
  );
};

export default SimpleForm;
