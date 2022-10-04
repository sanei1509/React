import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const heading = screen.getByTestId("heading-app");
  expect(heading).toBeInTheDocument();

  expect(screen.getByText("Formulario de registro")).toBeInTheDocument();
});
