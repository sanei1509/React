// primeros tests unitarios

test("Esto no debe fallar", () => {
  // Queremos evaluar algo
  if (2 < 1) throw new Error("no puede ser");
});
