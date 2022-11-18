import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

//MI PORCIÓN DE ESTADO
// Muy importante, el estado inicial de la aplicacion

const initialState = [
  { id: uuid(), tarea: "Controlar REDUX", state: false },
  { id: uuid(), tarea: "Hacer las compras", state: false },
  { id: uuid(), tarea: "Encontrar Motivacion", state: true },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  // Ahora que vamos a poder hacer?
  reducers: {
    // Aqui vamos a definir las acciones que vamos a poder hacer
    addTask: (state, action) => {
      // El estado es el estado inicial, y la accion es el payload
      // console.log("action", action);
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      // recordemos que cada item tiene un id unico
      console.log("eliminando");
      const tareaToDelete = state.find((tarea) => tarea.id === action.payload);

      state.splice(state.indexOf(tareaToDelete), 1);
    },
    completeTask: (state, action) => {
      // console.log("Completada");
      const taskCompleted = state.find((todo) => todo.id === action.payload);
      console.log(state.indexOf(taskCompleted));
    },
  },
});

export const { addTask, deleteTask, completeTask } = todosSlice.actions;
export default todosSlice.reducer;
