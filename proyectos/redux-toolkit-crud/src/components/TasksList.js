import { TaskItem } from "./TaskItem";
import { useSelector, useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../features/todos/todosSlice";
import { useNavigate } from "react-router";

export const TasksList = () => {
  const { tareas } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // ACCIONES SOBRE LAS TAREAS
  const handleComplete = (id) => {
    dispatch(completeTask(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h2>Tus tareas</h2>
      <h2>Total :{tareas.length}</h2>
      <button onClick={() => navigate("/create")}>Crear ➕</button>
      <ul>
        {tareas.map((tarea) => (
          <TaskItem
            key={tarea.id}
            tarea={tarea}
            handleDelete={() => handleDelete(tarea.id)}
            handleComplete={() => handleComplete(tarea.id)}
          />
        ))}
      </ul>
    </div>
  );
};
