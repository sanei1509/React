import { createSlice } from "@reduxjs/toolkit";

//MI PORCIÓN DE ESTADO
// Muy importante, el estado inicial de la aplicacion

const initialState = [
  { id: 0, tarea: "Controlar REDUX", state: false },
  { id: 1, tarea: "Hacer las compras", state: false },
  { id: 2, tarea: "Encontrar Motivacion", state: true },
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
  },
});

export const { addTask } = todosSlice.actions;
export default todosSlice.reducer;
