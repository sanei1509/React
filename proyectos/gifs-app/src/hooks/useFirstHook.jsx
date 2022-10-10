import { useState, useEffect } from "react";
import { gifExtract } from "../helpers/ObtenerGifs";

export const useFirstHook = (tema) => {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(true);

  const getImages = async () => {
    const newImages = await gifExtract(tema);
    // console.log(newImages);
    setImages(newImages);
    setLoader(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return [images, loader];
};
