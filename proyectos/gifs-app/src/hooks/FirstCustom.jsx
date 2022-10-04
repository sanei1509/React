import { useState, useEffect } from "react";

export const FirstCustom = (tema) => {
  const [img, setImg] = useState([]);

  const getImages = async () => {
    const images = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=J9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9&q=${tema}&limit=10&offset=0&rating=g&lang=en`
    );
  };

  // Queremos obtener las imagenes solo una vez por renderizado
  useEffect(() => {
    getImages();
  }, []);

  return { images: [], cargandoContenido: false };
};
