// Si FUNCIONA ACA LA PODEMOS TENER EN CUALQUIER LUGAR APARTE
import { gifExtract } from "../helpers/ObtenerGifs";
import { FirstCustom } from "../hooks/FirstCustom";

const ListadoGifs = ({ key, tema }) => {
  // custom hook
  const [images, cargandoContenido] = FirstCustom(tema);

  // const gifs = [1, 2, 3, 4, 5];
  // Vamos a traer los gifs de la API

  return (
    <>
      <h3 className="text-3xl font-bold">{tema}</h3>
      <img src={gifExtract(tema)["img"]} />
    </>
  );
};

export default ListadoGifs;
