import { random_array, usState } from "../../src/base-pruebas/07-deses-arr";

describe("Testeo funciones de 07-deses.arr.js", () => {
  test("debe devolver un array con solo strings", () => {
    // Inicializamos con mi función
    const [string, numero] = random_array();

    // Controlamos el tipo dentro del string
    expect(typeof string).toBe("string");
    expect(typeof numero).toBe("number");

    // le especifico que voy a esperar cualquier string ninguno fijo
  });
});
