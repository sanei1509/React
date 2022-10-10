// Si FUNCIONA ACA LA PODEMOS TENER EN CUALQUIER LUGAR APARTE
import { useEffect, useState } from "react";
import { gifExtract } from "../helpers/ObtenerGifs";
import { useFirstHook } from "../hooks/useFirstHook";
import { GifItem } from "./GifItem";

const ListadoGifs = ({ key, tema }) => {
  // custom hook
  const [images, loader] = useFirstHook(tema);

  // const getImages = async () => {
  //   const newImages = await gifExtract(tema);
  //   console.log(newImages);
  //   setImages([]);
  //   setLoader(false);
  // };

  // useEffect(() => {
  //   getImages();
  // }, []);

  return (
    <>
      <h3 className="text-4xl font-bold mb-3">{tema}</h3>
      {images.map((gif) => (
        <GifItem title={gif.title} img={gif.img} id={gif.id} />
      ))}
      {/* Paso por props, lo necesario */};
    </>
  );
};

export default ListadoGifs;
