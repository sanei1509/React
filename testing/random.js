// función random que formula el nombre completo del usuario
// de lo toma por 2 inputs
export const random = (name, surname) => {
  return `${name} ${surname}`;
};

//imaginemos que la información desde el input no siempre va a venir limpia
console.log(random("Victor", "Porras  "));
