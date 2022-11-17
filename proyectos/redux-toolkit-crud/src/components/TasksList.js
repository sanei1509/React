import { TaskItem } from "./TaskItem";
import { useSelector } from "react-redux";

export const TasksList = () => {
  const { tareas } = useSelector((state) => state);

  // ACCIONES SOBRE LAS TAREAS
  const handleComplete = (id) => {
    console.log("Tarea Completada");
    console.log(id);
  };

  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <div>
      <h2>Tus tareas</h2>
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
