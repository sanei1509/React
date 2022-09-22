// ========== tests ===============
import { random } from "./random";

test("la función debería devolver el nombre del usuario completo (limpio), sin espacios", () => {
  // 1.inicializo
  random("Valentin ", " Lopez  ");
});
