// DESESTRUCTURACIÓN BÁSICA
const personajes = ["Naruto", "Sasuke", "Sakura"];
const [, , personaje_terciario] = personajes;
console.log(personaje_terciario);

export const random_array = () => {
  return ["ABC", 123];
};

//ASIGNAMOS VALORES A NUESTRAS VARIABLES [LETRAS, NUMEROS]
const [letras, numeros] = random_array();
console.log(letras, numeros);

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
export const usState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const [nombre, setNombre] = usState("Goku");

console.log(nombre);
setNombre();
