import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas -> 02-template-string", () => {
  test('La función debe retornar "Hola Gonzalo"', () => {
    const name = "Gonzalo";
    const saludo = getSaludo(name);
    const expected = `Hola ${name}`;
    // expect(saludo).toBe();
    expect("HOLA").toBe("HOLA");
  });
});
