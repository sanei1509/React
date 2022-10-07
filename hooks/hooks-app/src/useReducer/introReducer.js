const NOW = new Date().getTime();

console.log("Hola, trabajando con reducers");

// INITIAL STATE => array con el estado de mis tareas
const initialState = [
  {
    id: NOW,
    tarea: "Aprender react en profundidad",
    done: false,
  },
];

// REDUCER -> recibe siempre un estado  y acción de manipulación
const todoReducer = (estado = initialState, action = {}) => {
  // En todos los casos debemos devolver un estado
  switch (action.type) {
    case "[TODO] add todo":
      return [...estado, action.payload];
    default:
      return estado;
  }
};

let storeTareas = todoReducer();

// No debo hacer MUTACIONES sobre mi arreglo

// Creo una acción para poder modificar mis tareas.
const addTareas = {
  type: "[TODO] add todo",
  payload: {
    id: new Date().getTime(),
    tarea: "Aprender más y más sobre react",
    done: false,
  }, // LO QUE VA DENTRO DE LA ACCION [SU CARGA]
};

storeTareas = todoReducer(storeTareas, addTareas);

console.log(storeTareas);

console.log(addTareas["payload"]);
