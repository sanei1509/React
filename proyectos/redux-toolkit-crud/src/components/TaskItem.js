export const TaskItem = ({ tarea }) => {
  return (
    <div>
      <li key={tarea.id} style={{ listStyle: "none" }}>
        <h1>Title</h1>
        <p>{tarea.tarea}</p>
        <span>{!tarea.state ? "POR HACER ⏳" : "COMPLETADA ☑️"}</span>
      </li>
    </div>
  );
};
