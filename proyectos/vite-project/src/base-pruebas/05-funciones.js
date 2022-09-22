// TIPOS DE FUNCIONES EN ES6

const saludar = (nombre) => {
  return `Hola, ${nombre}`;
};

export const saludar3 = (nombre) => `Hola ${nombre}`;
export const saludar4 = () => `Hola Mundo`;

// console.log( saludar('Goku') )

// console.log(saludar("NARUTO"));
// console.log(saludar3("UZUMAKI"));
// console.log(saludar4());

// FUNCIÓN
export const getUser = () => ({
  uid: "ABC123",
  username: "Nachito tricolor",
});

//EJECUCION EN PRUEBAS ACA NO
// const user = getUser();
// console.log(user);

// Tarea
export const obtenerUsuario = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

// const usuarioActivo = getUsuarioActivo("Mateo");
// console.log(usuarioActivo);
