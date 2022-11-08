import { useState } from "react";

const ReducerMain = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas(...(tareas + tarea));
  };

  console.log(tarea, tareas);

  return (
    <>
      <h1>Reducers Todo APP</h1>

      <h2>Por hacer</h2>

      <form action="">
        <input
          type="text"
          placeholder="Agrega una tarea"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Agregar
        </button>
      </form>

      <ul className="listado">
        <li>Correr</li>
        <li>Caminar</li>
        <li>Descansar</li>
      </ul>
    </>
  );
};

export default ReducerMain;
