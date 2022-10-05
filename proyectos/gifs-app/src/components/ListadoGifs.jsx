// Si FUNCIONA ACA LA PODEMOS TENER EN CUALQUIER LUGAR APARTE
import { useEffect } from "react";
import { gifExtract } from "../helpers/ObtenerGifs";
import { FirstCustom } from "../hooks/FirstCustom";

const ListadoGifs = ({ key, tema }) => {
  // custom hook
  const [images, setImages] = FirstCustom([]);

  const getImages = async () => {};

  useEffect(() => {
    gifExtract(tema).then((images) => {
      setImages(images);
    });
  }, []);

  return (
    <>
      <h3 className="text-3xl font-bold">{tema}</h3>
      {/* <img src={gifExtract(tema)["img"]} /> */}
      <li>titulo</li>
      <li>titulo</li>
      <li>titulo</li>
      <li>titulo</li>
    </>
  );
};

export default ListadoGifs;
