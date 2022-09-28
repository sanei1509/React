import React from "react";
import { render } from "@testing-library/react";
import Formulario from "../components/Formulario";
import "@testing-library/jest-dom/extend-expect";

describe("pruebas sobre el archivo contenedor de nuestra aplicación", () => {
  test("<Formulario /> Cargar el formulario y validar existencias en el DOM", () => {
    const contenedor = render(<Formulario />);

    // opcion para monitorear el DOM
    // contenedor.debug();

    // HEADING TESTS
    expect(true).toBe(true);
    expect(contenedor.getByText("Crear Cita")).toBeInTheDocument();

    // recuperamos elementos de otra manera
    expect(contenedor.getByTestId("titulo-formulario")).toBeInTheDocument();
    expect(contenedor.getByTestId("titulo-formulario")).toHaveTextContent(
      "Crear Cita"
    );

    // BOTON TESTS
    expect(contenedor.getByTestId("boton-enviar")).toBeInTheDocument();
    expect(contenedor.getByTestId("boton-enviar").tagName).toBe("BUTTON");
    expect(contenedor.getByTestId("boton-enviar").textContent).toBe(
      "Agregar Cita"
    );
  });
});
