import { getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe("Test para la 08-imp-exp js", () => {
  test("la función devuelve el heroe con el owner pasado por parametros", () => {
    // inicializo
    const owner = "Marvel";

    // acción
    const respuesta = getHeroesByOwner(owner);
    console.log(respuesta);
    // controlo retorno
  });
});
