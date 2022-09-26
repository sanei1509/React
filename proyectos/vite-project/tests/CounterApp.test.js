// Tarea
// pruebas a counter app

// 1 - debe hacer match con el snapshot
// 2 - debe de mostrar el valor inicial de 0
// IMPORTACION DE FILE
import { render } from "@testing-library/react";
import CounterApp from "../src/CounterApp.jsx";

describe("Pruebas sobre el contador - CounterApp", () => {
  const initialValue = 0;

  test("debe hacer match con el snap", () => {
    const [container] = render(<CounterApp valor={initialValue} />);

    expect(container).toMatchSnapshot();
  });

  test("El valor inicial tiene que estar en pantalla", () => {
    render(<CounterApp valor={0} />);
    // luego de renderizar el dom
    expect(screen.getByText(0).toBeTruthy());

    // tambien podemos comprobar el elemento
    expect(screen.getByRole("heading", { level: 2 }.innerHTML).toContain("0"));
  });
});
