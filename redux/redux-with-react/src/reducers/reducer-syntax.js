const valorInicial = [{ id: 1, nome: "Ana", nota: 6.0 }];

// Los reducer son simples funciones que reciben el estado actual y una acción
const randomReducer = (state = valorInicial, action) => {
  return state;
};

export default randomReducer;

// CICLO DE VIDA DE UN REDUCER
// 1. Se ejecuta la función reducer
// 2. Se evalúa el estado inicial
// 3. Se evalúa la acción
// 4. Se retorna el nuevo estado
// 5. Se ejecuta el store
// 6. Se ejecuta el componente
// 7. Se ejecuta el mapStateToProps
// 8. Se ejecuta el render
// 9. Se ejecuta el componentDidMount
// 10. Se ejecuta el componentDidUpdate
// 11. Se ejecuta el componentWillUnmount
