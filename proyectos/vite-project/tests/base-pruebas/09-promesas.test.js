// OBTENGO LAS FUNCIONES QUE VOY A TESTEAR
import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("testeo para funciones de 09-promesas.js", () => {
  // FUNCION ASINCRONA PARA BUSCAR HEROES
  test("debe retornar 10", () => {
    const respuesta = getHeroeByIdAsync(1);
    // expect(respuesta).toBe(10);

    // PARA LAS PRUEBAS ASINCRONAS PUEDO PASAR done() por parametro y usarlo
  });
});
