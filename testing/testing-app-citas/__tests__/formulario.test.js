import React from "react";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  getTestById,
} from "@testing-library/react";
import Formulario from "../components/Formulario";
import "@testing-library/jest-dom/extend-expect";

// FUNCIONES SPY
// const crearCita = jest.fn();

// LIMPIAR
afterEach(cleanup);

describe("pruebas sobre el archivo contenedor de nuestra aplicación", () => {
  test("<Formulario /> Cargar el formulario y validar existencias en el DOM", () => {
    // obtenemos los elememntos que vamos a probar
    const contenedor = render(<Formulario />);
    const titulo = contenedor.getByTestId("titulo-formulario");
    const botonAgregar = contenedor.getByTestId("boton-enviar");

    // opcion para monitorear el DOM
    contenedor.debug();

    // HEADING TESTS
    expect(true).toBe(true);
    expect(contenedor.getByText("Crear Cita")).toBeInTheDocument();

    // recuperamos elemento a probar y aplicamos tests
    expect(titulo).toBeInTheDocument();
    expect(titulo).toHaveTextContent("Crear Cita");

    // recuperamos elemento y aplicamos tests
    expect(botonAgregar).toBeInTheDocument();
    expect(botonAgregar.tagName).toBe("BUTTON");
    expect(botonAgregar.textContent).toBe("Agregar Cita");
  });

  test("< Formulario /> } MENSAJE DE ERROR EMPTY FIELDS", () => {
    // elementos que vamos a necesitar para esta prueba
    const contenedor = render(<Formulario />);
    const botonAgregar = contenedor.getByTestId("boton-enviar");

    // comprobamos que los eventos esten funcionando realmente
    fireEvent.click(botonAgregar);
    contenedor.debug();

    // verificamos que el error este saliendo al no llenar el formulario
    const alerta = contenedor.getByTestId("alerta");

    expect(alerta).toBeInTheDocument();
    expect(alerta.textContent).toBe("Todos los campos son obligatorios");
  });

  test("< Formulario/> cargamos el formulario para probar", () => {
    // obtenemos los elementos que vamos a testear
    const elementoPadre = render(<Formulario />);
    const inputMascota = elementoPadre.getByTestId("input-mascota");

    expect(inputMascota).toBeInTheDocument();
  });
});
