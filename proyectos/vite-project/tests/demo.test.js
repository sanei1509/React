// primeros tests unitarios

test("Esto no debe fallar", () => {
  // Queremos evaluar algo
  if (2 < 1) throw new Error("no puede ser");
});

test("Los mensajes deberíans ser iguales", () => {
  // 1.incialización
  const mensaje_uno = "Hola";

  // 2. Cambio / estimulo
  let mensaje_dos = "Hola ";

  // solución :
  // pasarle un .trim al mensaje_dos
  mensaje_dos = mensaje_dos.trim();

  // 3. Observar el comportamiento que esperamos
  expect(mensaje_uno).toBe(mensaje_dos);
});
