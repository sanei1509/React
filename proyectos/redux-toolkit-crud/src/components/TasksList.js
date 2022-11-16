import { TaskItem } from "./TaskItem";
import { useSelector } from "react-redux";

export const TasksList = () => {
  const { tareas } = useSelector((state) => state);
  return (
    <div>
      <h2>Tus tareas</h2>
      <ul>
        {tareas.map((tarea) => (
          <TaskItem key={tarea.id} tarea={tarea} />
        ))}
      </ul>
    </div>
  );
};
