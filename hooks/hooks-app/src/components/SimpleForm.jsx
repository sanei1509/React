import { useState } from "react";

const SimpleForm = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = form;

  const handleInputContent = (evt) => {
    console.log(evt);
    const { name, value } = evt.target;
    console.log(name, value);
    setForm({ [name]: value });
  };

  return (
    <>
      <h1>Formulario random</h1>
      <br />
      <hr />

      <input
        type="text"
        className="user-input"
        placeholder="User"
        name="username"
        onChange={handleInputContent}
      />

      <div>
        <span>{username}</span>
        <span>{password}</span>
      </div>
    </>
  );
};

export default SimpleForm;
