console.log("PROBANDO PROBANDO REDUCERS !!");

const valorInicial = [
  {
    id: 1,
    nome: "Vale",
    nota: 8,
  },
];

const todoReducer = (state = valorInicial, action) => {
  return state;
};

const newTodo = {
  id: 2,
  name: "Mateo",
  nota: 8,
};

export default todoReducer;
