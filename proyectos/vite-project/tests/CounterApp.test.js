// Tarea
// pruebas a counter app

// 1 - debe hacer match con el snapshot
// 2 - debe de mostrar el valor inicial de 0
// IMPORTACION DE FILE
import { fireEvent, render } from "@testing-library/react";
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

  // PRUEBAS SOBRE EVENTOS (RESULTADO DE ELLOS)
  test("debería aumentar en 1 con el botón +1", () => {
    render(<CounterApp valor={10} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy();
  });

  test("debería decrementar en 1 con el botón -1", () => {});
  render(<CounterApp value={10} />);
  fireEvent.click(screen.getByText("-1")).toBeTruthy();
  expect(screen.get);

  test("Debe estar funcionando el boton de reset, debería volver a ser 10", () => {
    render(<CounterApp valor={10} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("RESET"));

    // enlazar un boton especifico
    // fireEvents.click(screen.getByRole("button", { name: 'btn-reset'}))
    expect(screenl.getByText(10)).toBeTruthy();
  });
});
