const nombre = "Naruto";
const apellido = "Uzumaki";

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

export function getSaludo(nombre) {
  return "Hola " + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}  `);
