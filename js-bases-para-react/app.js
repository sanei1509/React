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
