import { render, screen } from "@testing-library/react";
import ListadoGifs from "../components/ListadoGifs.jsx";

describe("Testeo del componente <ListadoGif />", () => {
  // verificar que el listado de gifs se renderice correctamente
  test("renderizado correcto", () => {
    render(<ListadoGifs />);
    screen.debug();
  });
});
