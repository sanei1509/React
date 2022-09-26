import { render } from "@testing-library/react";
import App from "../src/MeApp.jsx";

// PRUEBAS MÁS QUE NADA SOBRE EL DOM
describe("pruebas sobre componente principal REACT MeApp.js", () => {
  test("test DOM", () => {
    const title = "Welcome Natalia Oreiro!!";
    const { container, getByText } = render(<App />);

    expect(container).toMatchSnapshot();
    expect(getByText(title)).toBeTruthy();

    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toContain(title);
  });
});
