import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";

export const store = configureStore({
  // vamos a configurar mediante un slice o porcion de estado
  reducer: {
    tareas: todosReducer,
  },
});
