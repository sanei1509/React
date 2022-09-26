import { render } from "@testing-library/react";
import MeApp from "../src/MeApp.jsx";

// PRUEBAS MÁS QUE NADA SOBRE EL DOM
describe("pruebas sobre componente principal REACT MeApp.js", () => {
  // prueba teniendo un problema con reconocer jsx
  test("debe matchear con el snapshot", () => {
    const title = "Welcome Natalia Oreiro!!";
    render(<MeApp />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("el titulo debe estar dentro de un h1", () => {
    render(<MeApp />);
    const title = "Welcome Natalia Oreiro!!";
    expect(
      screen.getByRole("heading", { level: 1 }.innerHTML).toContain(title)
    );
  });
});
