// Si FUNCIONA ACA LA PODEMOS TENER EN CUALQUIER LUGAR APARTE
import { useEffect, useState } from "react";
import { gifExtract } from "../helpers/ObtenerGifs";
import { FirstCustom } from "../hooks/FirstCustom";

const ListadoGifs = ({ key, tema }) => {
  // custom hook
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await gifExtract(tema);
    console.log(newImages);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  console.log(images);

  return (
    <>
      <h3 className="text-3xl font-bold">{tema}</h3>
      {/* <img src={gifExtract(tema)["img"]} /> */}
      {images.map((gif) => (
        <ol>
          <li key={gif.id}>
            <img src={gif.img} />
          </li>
        </ol>

        // TODO estilar esto en un componente aparte
      ))}
      ;
    </>
  );
};

export default ListadoGifs;
