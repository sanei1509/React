// funciones

const add = function (funcion) {
  return (funcion = function (a, b) {
    return a + b;
  });
};

// parametros
console.log(add()(2, 2));

// Objetos

const user = {
  nombre: "vale",
  last_name: "perez",
  age: 22,
  addres: {
    country: "Uruguay",
    city: "Santa Rosa",
    street: "campo 123",
  },
  friend: ["Flor", "Gonchy"],
  active: false,
  sendCorreo: function () {
    return "Mandando correo...";
  },
};

const name = "One plus";
const price = 3000;

const newProduct = {
  name,
  price,
};

console.log(newProduct);

// Manejo del DOM -> manejarlo bastante bien es importante
const text = "consolidando bases de javascript";
const description = document.createElement("p");

description.innerHTML = text;
document.body.append(description);

const boton = document.createElement("button");
boton.innerText = "Ver";
document.body.append(boton);

console.log(description);
console.log(boton);

// Manejar los evento en javascript EVENT HANDLER
let cont = 0;
boton.addEventListener("click", function () {
  let arr = [
    "Programación orientada a objetos",
    "Herencias",
    "Destructuring -> variables desde objetos(valores)",
    "ENHACEMENT -> (opuesto al de arriba)",
  ];
  description.innerText = "Visualizando temas trabajados..";
  if (cont < 1) {
    for (let i = 0; i < arr.length; i++) {
      let el = document.createElement("li");
      el.innerText = arr[i];
      document.body.append(el);
    }
    cont++;
  }
});

// DESTRUCTURING
const usuario = {
  name: "Mateo",
  apellido: "Reppeto",
};

function printName(usuario) {
  const { name, apellido } = usuario;

  return `nombre completo : ${name.toUpperCase()} ${apellido.toUpperCase()}`;
}

console.log(printName(usuario));

//FUNCIONES ANÓNIMAS EN JAVASCRIPT
console.log(
  (function msg() {
    return "Holaaa";
  })()
);


//ARROW FUNCTIONS
const texto = () => 'Hola'
const numero = () => 