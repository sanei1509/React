import {
  saludar,
  saludar3,
  saludar4,
  getUser,
  obtenerUsuario,
} from "../../src/base-pruebas/05-funciones";

describe("Pruebas 05-funciones.js", () => {
  //FUNCION SALUDAR
  test("saludar3 debería retornar 'Hola Naruto'", () => {
    const name = "Naruto";
    const retorno = saludar3(name);

    const respuestaEsperada = "Hola Naruto";
    expect(retorno).toBe(respuestaEsperada);
  });

  // OBTENIENDO UN USUARIO
  test("deberia retornar el objeto completado con el parametro pasado", () => {
    const nombre = "Santiago";
    //   inicializamos el objeto
    const res = obtenerUsuario(nombre);

    // Construído desde el parametro pasado
    const objetoEsperado = {
      uid: "ABC567",
      username: nombre,
    };

    expect(res).toEqual(objetoEsperado);
  });
});
