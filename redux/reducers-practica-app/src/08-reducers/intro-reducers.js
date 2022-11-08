import useReducer from "react";

console.log("PROBANDO PROBANDO REDUCERS !!");

const valorInicial = [
  {
    id: new Date().getTime(),
    description: "Ir formal a la entrevista",
    hora: "8:00 am",
  },
  {
    id: new Date().getTime() * 4,
    description: "Buen día",
    hora: "7:00 am",
  }
];

const TodoReducer = () => {
  // Dispatch de actiones sobre el store, sobre nuestros almacenamientos
  const [state, dispatch] = useReducer(reducer??, initialState);

  return <h1>REDUCERS</h1>;
};
// const TodoReducer = (state = valorInicial, action) => {
//   return state;
// };

//
// };

export default TodoReducer;
