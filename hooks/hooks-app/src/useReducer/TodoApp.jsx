import ListadoTareas from "./ListadoTareas";
import { userReducer } from "react";

const TodoApp = () => {
  // const [state, dispatch] = useReducer(reducer, initialArg, init);

  return (
    <>
      {" "}
      <h1>Lista de tareas ☑️</h1>
      <ListadoTareas />
    </>
  );
};

export default TodoApp;
