import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { GifItem } from "../components/GifItem";
import { gifExtract } from "../helpers/ObtenerGifs";

describe("Pruebas en <GifItem />", () => {
  const title = "Naruto";
  const url = "https://i.giphy.com/media/2y98KScHKeaQM/giphy.webp";
});

test("Debe hacer match con el snapshot", () => {
  const { container } = renderer(<GifItem />);
  screen.debug();
});
