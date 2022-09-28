import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MeApp from "../src/MeApp.jsx";

// PRUEBAS MÁS QUE NADA SOBRE EL DOM
describe("pruebas sobre componente principal REACT MeApp.js", () => {
  // prueba teniendo un problema con reconocer jsx
  test("debe matchear con el snapshot", () => {
    const title = "Welcome Natalia Oreiro!!";
    const contenedor = render(<MeApp />);

    expect(contenedor.getByText(title)).toBeTruthy();
  });

  test("el titulo debe estar dentro de un h1", () => {
    const contenedor = render(<MeApp />);

    const title = "Welcome Natalia Oreiro!!";
    expect(
      contenedor.getByRole("heading", { level: 1 }.innerHTML).toContain(title)
    );
  });
});
