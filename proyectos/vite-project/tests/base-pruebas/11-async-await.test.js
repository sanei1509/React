import { getImagen } from "../../src/base-pruebas/11-async-await";

// REALIZANDO PRUEBAS SOBRE ACCIONES ASINCRONAS
describe("Testeo a archivo 11-async-await.js", () => {
  test("la función debería recuperar el URL de una imagen", async () => {
    const url = await getImagen();
    console.log(url);
    expect(typeof url).toBe("string");
  });
});
