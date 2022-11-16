import "./App.css";
// USEDISPATCH -> permite ejecutar acciones
// USETHUNK -> permite ejecutar acciones asincronas
// USESELECTOR -> permite obtener datos del store
import { TasksList } from "./components/TasksList";
import { TaskForm } from "./components/TaskForm";

function App() {
  return (
    <div className="App">
      <h1>Gestor de tareas con redux (tkt)</h1>
      <TaskForm />

      <TasksList />
    </div>
  );
}

export default App;
