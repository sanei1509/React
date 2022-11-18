import "./App.css";
// USEDISPATCH -> permite ejecutar acciones
// USETHUNK -> permite ejecutar acciones asincronas
// USESELECTOR -> permite obtener datos del store
import { TasksList } from "./components/TasksList";
import { TaskForm } from "./components/TaskForm";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Gestor de tareas con redux (tkt)</h1>
      <Routes>
        <Route path="/" element={<TasksList />} />
        <Route path="/create" element={<TaskForm />} />
      </Routes>
    </div>
  );
}

export default App;
