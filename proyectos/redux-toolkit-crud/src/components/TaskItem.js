import { useSelector, useDispatch } from "react-redux";

export const TaskItem = ({ tarea, handleComplete, handleDelete }) => {
  return (
    <div>
      <li key={tarea.id} style={{ listStyle: "none" }}>
        <h1>Title</h1>
        <p>{tarea.tarea}</p>
        <span>{!tarea.state ? "POR HACER ⏳" : "COMPLETADA ☑️"}</span>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={handleComplete}>Realizada 👍</button>
          <button onClick={handleDelete}>Eliminar 🗑️</button>
        </div>
      </li>
    </div>
  );
};
